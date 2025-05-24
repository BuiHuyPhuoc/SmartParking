import http from "./https"

export interface RoomResponse {
    userId: number;
    userName: string;
    roomId: number;
    lastMessage: string;
    createAt: string;
}

export interface MessageResponse {
    senderId: number | undefined;
    senderName: string | undefined;
    message: string;
    sendAt: string;
    roomId: number;
    role: string;
}

export const ChatService = {
    getRoomByUserId: async (userId: number) => {
        try {
            const response = await http.get<RoomResponse[]>(`/getAllRoomByUserIdAndRoomId?userId=${userId}`)
            return response.value
        } catch (error) {
            console.log(error)
        }
    },
    getAllMessageByRoomId: async (roomId: number) => {
        try {
            const response = await http.get<MessageResponse[]>(`getAllMessageByRoomId/${roomId}`)
            return response.value
        } catch (error) {
            console.log(error)
        }
    }
}