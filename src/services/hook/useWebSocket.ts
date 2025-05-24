import { useEffect, useRef, useState } from 'react'
import { Client, IMessage } from '@stomp/stompjs';
import { MessageResponse } from '../api/chatService';

const useWebSocket = (url: string, subscribeDestination: string) => {
    const clientRef = useRef<Client | null>(null);
    const [wsmessages, setWSMessages] = useState<MessageResponse[]>([]);

    useEffect(() => {
        const client = new Client({
            brokerURL: url,
            reconnectDelay: 5000,
            onConnect: () => {
                console.log("✅ STOMP connected");

                client.subscribe(subscribeDestination, (message: IMessage) => {
                    const payload = JSON.parse(message.body)
                    const { type, ...newPayload } = payload;
                    console.log(type)
                    setWSMessages((prev) => [...prev, newPayload]);
                });
            },
            onStompError: (frame) => {
                console.error("❌ STOMP error:", frame);
            },
        });

        client.activate();
        clientRef.current = client;

        return () => {
            client.deactivate();
        };
    }, [url, subscribeDestination]);

    const sendWSMessage = (destination: string, body: any) => {
        clientRef.current?.publish({
            destination,
            body: JSON.stringify(body),
        });
        // clientRef.current?.publish({
        //     destination: "/app/chat.sendMessage/1",
        //     body: JSON.stringify({
        //         senderId: 2,
        //         sender: "nldk",
        //         type: "CHAT",
        //         message: "Hello",
        //         roomId: 1,
        //         role: "user",
        //     }),
        // });
    };

    return { wsmessages, sendWSMessage };
}

export default useWebSocket