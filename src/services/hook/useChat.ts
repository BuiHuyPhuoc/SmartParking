import { useQuery } from "@tanstack/react-query"
import { ChatService } from "../api/chatService"

export const useGetRoomByUserId = (userId: number) => {
    return useQuery({
        queryKey: ["getRoomByUserId"],
        queryFn: async () => await ChatService.getRoomByUserId(userId)
    })
}

export const useGetAllMessageByRoomId = (roomId: number) => {
    return useQuery({
        queryKey: ['getAllMessageByRoomId', roomId],
        queryFn: async () => await ChatService.getAllMessageByRoomId(roomId)

    })
}