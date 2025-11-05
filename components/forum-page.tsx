"use client"

import { useState } from "react"
import { ForumSidebar } from "./forum-sidebar"
import { ConversationDetail } from "./conversation-detail"

export interface Forum {
  id: string
  name: string
  description: string
  image: string
  memberCount: number
  conversationCount: number
}

export interface Conversation {
  id: string
  title: string
  author: string
  authorAvatar: string
  replies: number
  views: number
  lastActivity: string
  isResolved?: boolean
  forumId: string
  image: string
  description: string // Added description field
}

const forums: Forum[] = [
  {
    id: "1",
    name: "Annonces Générales",
    description: "Actualités et communications importantes de l'entreprise",
    image: "/corporate-announcements-office.jpg",
    memberCount: 1247,
    conversationCount: 89,
  },
  {
    id: "2",
    name: "Support Technique",
    description: "Aide et assistance pour les outils et systèmes internes",
    image: "/technical-support-computers.jpg",
    memberCount: 856,
    conversationCount: 342,
  },
  {
    id: "3",
    name: "Innovation & Idées",
    description: "Partagez vos idées pour améliorer nos processus",
    image: "/innovation-lightbulb-ideas.jpg",
    memberCount: 623,
    conversationCount: 156,
  },
  {
    id: "4",
    name: "Ressources Humaines",
    description: "Questions RH, congés, et avantages sociaux",
    image: "/human-resources-team.jpg",
    memberCount: 1089,
    conversationCount: 234,
  },
]

const allConversations: Conversation[] = [
  {
    id: "1",
    title: "Nouvelle politique de télétravail 2025",
    author: "Marie Dubois",
    authorAvatar: "/professional-woman.png",
    replies: 23,
    views: 456,
    lastActivity: "Il y a 2 heures",
    forumId: "1",
    image: "/remote-work-home-office.jpg",
    description: "Discussion sur les nouvelles directives de travail à distance et les modalités d'application", // Added description
  },
  {
    id: "2",
    title: "Résultats du trimestre Q4 2024",
    author: "Jean Martin",
    authorAvatar: "/professional-man.png",
    replies: 15,
    views: 892,
    lastActivity: "Il y a 5 heures",
    forumId: "1",
    image: "/business-charts-analytics.jpg",
    description: "Présentation des performances financières et objectifs pour 2025", // Added description
  },
  {
    id: "3",
    title: "Événement team building - Inscriptions ouvertes",
    author: "Sophie Laurent",
    authorAvatar: "/diverse-woman-smiling.png",
    replies: 67,
    views: 1234,
    lastActivity: "Il y a 1 jour",
    forumId: "1",
    image: "/team-building-activities.jpg",
    description: "Activités de cohésion d'équipe prévues pour le mois prochain", // Added description
  },
  {
    id: "4",
    title: "Problème de connexion VPN",
    author: "Thomas Bernard",
    authorAvatar: "/man-tech.png",
    replies: 8,
    views: 124,
    lastActivity: "Il y a 30 minutes",
    isResolved: true,
    forumId: "2",
    image: "/vpn-network-security.jpg",
    description: "Aide pour résoudre les difficultés d'accès au réseau sécurisé", // Added description
  },
  {
    id: "5",
    title: "Comment réinitialiser mon mot de passe ?",
    author: "Claire Petit",
    authorAvatar: "/woman-office.png",
    replies: 3,
    views: 67,
    lastActivity: "Il y a 1 heure",
    isResolved: true,
    forumId: "2",
    image: "/password-security-lock.jpg",
    description: "Guide étape par étape pour la réinitialisation des identifiants", // Added description
  },
  {
    id: "6",
    title: "Mise à jour du logiciel CRM - Questions",
    author: "Pierre Moreau",
    authorAvatar: "/business-man.png",
    replies: 19,
    views: 345,
    lastActivity: "Il y a 3 heures",
    forumId: "2",
    image: "/crm-software-dashboard.jpg",
    description: "Nouvelles fonctionnalités et changements dans l'interface client", // Added description
  },
  {
    id: "7",
    title: "Proposition : Espace détente au 3ème étage",
    author: "Emma Rousseau",
    authorAvatar: "/creative-woman.png",
    replies: 42,
    views: 678,
    lastActivity: "Il y a 4 heures",
    forumId: "3",
    image: "/office-lounge-relaxation.jpg",
    description: "Idée d'aménagement pour améliorer le bien-être au bureau", // Added description
  },
  {
    id: "8",
    title: "Automatisation des rapports mensuels",
    author: "Lucas Girard",
    authorAvatar: "/man-developer.png",
    replies: 31,
    views: 523,
    lastActivity: "Il y a 6 heures",
    forumId: "3",
    image: "/automation-workflow-tech.jpg",
    description: "Proposition de solution pour optimiser la génération de rapports", // Added description
  },
  {
    id: "9",
    title: "Demande de congés - Procédure",
    author: "Isabelle Leroy",
    authorAvatar: "/woman-hr.png",
    replies: 12,
    views: 289,
    lastActivity: "Il y a 2 jours",
    forumId: "4",
    image: "/vacation-calendar-planning.jpg",
    description: "Informations sur le processus de demande de vacances et délais", // Added description
  },
  {
    id: "10",
    title: "Programme de formation 2025",
    author: "Antoine Blanc",
    authorAvatar: "/man-training.jpg",
    replies: 28,
    views: 567,
    lastActivity: "Il y a 1 jour",
    forumId: "4",
    image: "/training-education-learning.jpg",
    description: "Catalogue des formations disponibles et modalités d'inscription", // Added description
  },
]

export function ForumPage() {
  const [selectedConversation, setSelectedConversation] = useState<Conversation>(allConversations[0])

  return (
    <div className="h-screen overflow-hidden bg-[#e5e7eb]">
      <div className="flex h-full">
        <aside className="w-80">
          <ForumSidebar
            forums={forums}
            conversations={allConversations}
            selectedConversationId={selectedConversation.id}
            onSelectConversation={setSelectedConversation}
          />
        </aside>

        <main className="flex-1 min-w-0 px-6 py-8 overflow-y-auto">
          <ConversationDetail conversation={selectedConversation} onBack={() => {}} />
        </main>
      </div>
    </div>
  )
}
