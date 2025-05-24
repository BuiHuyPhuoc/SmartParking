import { LoginResponse } from "@/lib/models";
import { MessageResponse, RoomResponse } from "@/services/api/chatService";
import {
  useGetAllMessageByRoomId,
  useGetRoomByUserId,
} from "@/services/hook/useChat";
import useWebSocket from "@/services/hook/useWebSocket";
import { GetLocalStr } from "@/services/utils/storage";
import { Bot, MessageCircle, Plus, Send, User } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

// interface Message {
//   senderId: number;
//   role: "user" | "admin";
//   roomId: number;
//   sender: string;
//   message: string;
//   time: string;
// }

const ChatMessage: React.FC = () => {
  const account = GetLocalStr<LoginResponse>("loginResponse");
  const [activeConversation, setActiveConversation] = useState<number>(1);
  const { wsmessages, sendWSMessage } = useWebSocket(
    "ws://localhost:3300/websocket",
    "/topic/room/1"
  );
  const { data: conversations } = useGetRoomByUserId(account?.id ?? 1);
  const { data: listMessage } = useGetAllMessageByRoomId(activeConversation);
  const [contentChat, setContentChat] = useState<MessageResponse[]>([]);

  //   const [conversations, setConversations] = useState<RoomResponse[]>([]);
  //   const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  useEffect(() => {
    if (listMessage) {
      setContentChat(listMessage);
    }
  }, [listMessage]);
  const date = new Date();

  useEffect(() => {
    scrollToBottom();
    if (wsmessages.length > 0) {
      console.log(wsmessages[wsmessages.length - 1]);
      setContentChat((prev) => [...prev, wsmessages[wsmessages.length - 1]]);
    }
  }, [wsmessages.length]);

  console.log(contentChat);

  const handleSendMessage = (): void => {
    const content = {
      senderId: account?.id,
      senderName: account?.fullName,
      message: newMessage,
      sendAt: date.toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      type: "CHAT",
      roomId: activeConversation,
      role: "user",
    };
    sendWSMessage("/app/chat.sendMessage/1", content);
    setNewMessage("");
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  //   const createNewConversation = (): void => {
  //     // const newConv: Conversation = {
  //     //   id: conversations.length + 1,
  //     //   title: `Hội thoại mới ${conversations.length + 1}`,
  //     //   lastMessage: "Hội thoại trống",
  //     //   time: "Vừa xong",
  //     // };
  //     setConversations((prevConversations) => [newConv, ...prevConversations]);
  //     setActiveConversation(newConv.id);
  //     setMessages([]);
  //   };

  const handleConversationSelect = (conversationId: number): void => {
    setActiveConversation(conversationId);
    // Trong thực tế, bạn sẽ load messages từ API dựa trên conversationId
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setNewMessage(e.target.value);
  };

  //   const getCurrentConversationTitle = (): string => {
  //     return (
  //       conversations.find((c) => c.id === activeConversation)?.title ||
  //       "Chọn hội thoại"
  //     );
  //   };

  return (
    <div className="w-full max-w-6xl m-auto h-[80vh] bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex h-full">
        {/* Sidebar - Lịch sử chat (30%) */}
        <div className="w-3/10 bg-white border-r border-gray-200 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-200">
            <button
              //   onClick={createNewConversation}
              className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              type="button"
            >
              <Plus size={16} />
              Hội thoại mới
            </button>
          </div>

          {/* Danh sách hội thoại */}
          <div className="flex-1 overflow-y-auto">
            {conversations &&
              conversations.map((conv: RoomResponse) => (
                <div
                  key={conv.roomId}
                  onClick={() => handleConversationSelect(conv.roomId)}
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                    activeConversation === conv.roomId
                      ? "bg-blue-50 border-l-4 border-l-blue-500"
                      : ""
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleConversationSelect(conv.roomId);
                    }
                  }}
                >
                  <div className="flex items-start gap-3">
                    <MessageCircle
                      size={16}
                      className="text-gray-400 mt-1 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">
                        {conv.userName}
                      </h3>
                      <p className="text-sm text-gray-500 truncate mt-1">
                        {conv.lastMessage}
                      </p>
                      <span className="text-xs text-gray-400 mt-1">
                        {conv.createAt}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Main Chat Area (70%) */}
        <div className="flex-1 flex flex-col h-full">
          {/* Chat Header */}
          <div className="bg-white border-b border-gray-200 p-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {/* {getCurrentConversationTitle()} */}
            </h2>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-4"
            style={{ height: "400px" }}
            ref={messagesContainerRef}
          >
            {contentChat.map((message: MessageResponse, idx: number) => {
              // const newMessage = JSON.parse(message);
              return (
                <div
                  key={idx}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex gap-2 max-w-xs lg:max-w-md ${
                      message.role === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        message.role === "user" ? "bg-blue-500" : "bg-gray-400"
                      }`}
                    >
                      {message.role === "user" ? (
                        <User size={16} className="text-white" />
                      ) : (
                        <Bot size={16} className="text-white" />
                      )}
                    </div>
                    <div
                      className={`px-4 py-2 rounded-lg ${
                        message.role === "user"
                          ? "bg-blue-500 text-white"
                          : "bg-white border border-gray-200 text-gray-800"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.message}</p>
                      <span
                        className={`text-xs mt-1 block ${
                          message.role === "user"
                            ? "text-blue-100"
                            : "text-gray-500"
                        }`}
                      >
                        {/* {newMessage.time} */}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div ref={messagesEndRef} /> */}
          </div>

          {/* Input Area */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="flex gap-2">
              <textarea
                value={newMessage}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Nhập tin nhắn của bạn..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={1}
                style={{ minHeight: "40px", maxHeight: "120px" }}
              />
              <button
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                type="button"
                aria-label="Gửi tin nhắn"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
