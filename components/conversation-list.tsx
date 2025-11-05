"use client"

import { MessageSquare, Eye, CheckCircle2 } from "lucide-react"
import type { Conversation } from "./forum-page"
import Image from "next/image"

interface ConversationListProps {
  conversations: Conversation[]
  onSelectConversation: (conversation: Conversation) => void
}

export function ConversationList({ conversations, onSelectConversation }: ConversationListProps) {
  return (
    <div className="space-y-3">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Conversations</h3>
        <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          Nouvelle conversation
        </button>
      </div>

      <div className="space-y-3">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            onClick={() => onSelectConversation(conversation)}
            className="group rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-sm cursor-pointer"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={conversation.authorAvatar || "/placeholder.svg"}
                    alt={conversation.author}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="mb-2 flex items-start justify-between gap-3">
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-pretty">
                    {conversation.title}
                  </h4>
                  {conversation.isResolved && <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600" />}
                </div>

                <div className="mb-3 text-sm text-muted-foreground">
                  Par <span className="font-medium">{conversation.author}</span>
                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-3.5 w-3.5" />
                    {conversation.replies} réponses
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="h-3.5 w-3.5" />
                    {conversation.views} vues
                  </span>
                  <span className="ml-auto">{conversation.lastActivity}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
