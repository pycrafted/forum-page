"use client"

import type React from "react"

import { ArrowLeft, MessageSquare, Eye, ThumbsUp, Send } from "lucide-react"
import type { Conversation } from "./forum-page"
import Image from "next/image"
import { useState } from "react"

interface Comment {
  id: string
  author: string
  authorAvatar: string
  content: string
  timestamp: string
  likes: number
}

interface ConversationDetailProps {
  conversation: Conversation
  onBack: () => void
}

// Mock comments data
const mockComments: Record<string, Comment[]> = {
  "1": [
    {
      id: "c1",
      author: "Pierre Durand",
      authorAvatar: "/business-man.png",
      content:
        "Excellente initiative ! Le télétravail 3 jours par semaine va vraiment améliorer notre équilibre vie professionnelle/personnelle. J'apprécie particulièrement la flexibilité offerte.",
      timestamp: "Il y a 2 heures",
      likes: 12,
    },
    {
      id: "c2",
      author: "Sophie Martin",
      authorAvatar: "/woman-office.png",
      content:
        "Je suis d'accord avec Pierre. Cependant, j'aimerais avoir plus de détails sur la procédure de demande. Doit-on valider nos jours de télétravail chaque semaine avec notre manager ?",
      timestamp: "Il y a 1 heure",
      likes: 8,
    },
    {
      id: "c3",
      author: "Marie Dubois",
      authorAvatar: "/professional-woman.png",
      content:
        "Bonjour Sophie, oui il faudra coordonner avec votre manager pour assurer une présence minimale dans les équipes. Un planning sera mis en place via l'outil RH. Plus de détails dans le document complet qui sera partagé la semaine prochaine.",
      timestamp: "Il y a 45 minutes",
      likes: 15,
    },
    {
      id: "c4",
      author: "Lucas Bernard",
      authorAvatar: "/man-tech.png",
      content:
        "Question technique : est-ce que le VPN sera amélioré pour supporter cette augmentation du télétravail ? Actuellement il y a parfois des lenteurs.",
      timestamp: "Il y a 30 minutes",
      likes: 6,
    },
    {
      id: "c5",
      author: "Emma Rousseau",
      authorAvatar: "/creative-woman.png",
      content:
        "Super nouvelle ! Est-ce que cette politique s'applique également aux nouveaux employés en période d'essai ?",
      timestamp: "Il y a 15 minutes",
      likes: 4,
    },
  ],
}

export function ConversationDetail({ conversation, onBack }: ConversationDetailProps) {
  const [newComment, setNewComment] = useState("")
  const comments = mockComments[conversation.id] || []

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle comment submission
    setNewComment("")
  }

  return (
    <div className="space-y-6">
      <div className="relative h-80 w-full overflow-hidden rounded-lg">
        <Image
          src={conversation.image || "/placeholder.svg"}
          alt={conversation.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Back button positioned at top left */}
        <button
          onClick={onBack}
          className="absolute left-4 top-4 flex items-center gap-2 rounded-md bg-black/40 px-3 py-2 text-sm text-white backdrop-blur-sm transition-all hover:bg-black/60"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour
        </button>

        {/* Content at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
          <h1 className="text-3xl font-bold text-white text-balance">{conversation.title}</h1>

          {/* Author and metadata */}
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/20">
                <Image
                  src={conversation.authorAvatar || "/placeholder.svg"}
                  alt={conversation.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium text-white">{conversation.author}</div>
                <div className="text-sm text-white/80">{conversation.lastActivity}</div>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-white/90">
              <span className="flex items-center gap-1.5">
                <MessageSquare className="h-4 w-4" />
                {conversation.replies} réponses
              </span>
              <span className="flex items-center gap-1.5">
                <Eye className="h-4 w-4" />
                {conversation.views} vues
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Comments section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Réponses ({comments.length})</h3>

        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="rounded-lg border border-border bg-card p-5">
              <div className="mb-4 flex items-start gap-4">
                <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={comment.authorAvatar || "/placeholder.svg"}
                    alt={comment.author}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="mb-1 flex items-center gap-3">
                    <span className="font-medium text-foreground">{comment.author}</span>
                    <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/90 text-pretty">{comment.content}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 pl-14">
                <button className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary">
                  <ThumbsUp className="h-3.5 w-3.5" />
                  <span>{comment.likes}</span>
                </button>
                <button className="text-xs text-muted-foreground transition-colors hover:text-primary">Répondre</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New comment form */}
      <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-white to-gray-50/30 p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-primary/10">
            <Image src="/professional-woman.png" alt="Votre avatar" fill className="object-cover" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-foreground">Ajouter votre réponse</h4>
            <p className="text-sm text-muted-foreground">Partagez votre point de vue avec la communauté</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Partagez vos idées, posez vos questions..."
              className="min-h-[140px] w-full rounded-xl border border-border/60 bg-white px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground/60 shadow-sm transition-all focus:border-primary/40 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:shadow-md"
            />
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground italic">Soyez respectueux et constructif dans vos échanges</p>
            <button
              type="submit"
              className="flex items-center gap-2.5 rounded-xl bg-[#344256] px-6 py-3 text-sm font-medium text-white shadow-md transition-all hover:bg-[#3d4d63] hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send className="h-4 w-4" />
              Publier ma réponse
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
