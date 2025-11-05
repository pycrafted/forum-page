"use client"

import type { Conversation } from "./forum-page"
import Image from "next/image"
import { Plus } from "lucide-react"

interface ForumSidebarProps {
  conversations: Conversation[]
  selectedConversationId: string | null
  onSelectConversation: (conversation: Conversation) => void
}

export function ForumSidebar({ conversations, selectedConversationId, onSelectConversation }: ForumSidebarProps) {
  return (
    <div className="h-screen border-r border-border bg-card flex flex-col">
      <div className="border-b border-border p-4 flex-shrink-0">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-foreground">Conversations</h3>
          <button
            onClick={() => {
              // TODO: Implement create conversation functionality
              console.log("[v0] Create new conversation clicked")
            }}
            className="flex items-center gap-2 rounded-lg bg-[#344256] px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#3d4d63]"
          >
            <Plus className="h-4 w-4" />
            Créer
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-2 p-3">
          {conversations.map((conversation) => (
            <button
              key={conversation.id}
              onClick={() => onSelectConversation(conversation)}
              className={`w-full rounded-lg p-3 text-left transition-all ${
                selectedConversationId === conversation.id
                  ? "bg-[#344256] text-white shadow-sm"
                  : "hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              <div className="flex gap-3">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={conversation.image || "/placeholder.svg"}
                    alt={conversation.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm line-clamp-2 mb-1">{conversation.title}</div>
                  <div className="text-xs opacity-70 line-clamp-2">{conversation.description}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
