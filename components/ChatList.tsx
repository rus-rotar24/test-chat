import { useEffect, useState } from 'react';
import axios from 'axios';
import { Chat } from '@/utils/types';

const ChatList = ({ selectChat }: { selectChat: (user: string) => void }) => {
  const [chatHistory, setChatHistory] = useState<Chat[]>([]);

  useEffect(() => {
    axios.get('/api/chat').then((response) => {
      setChatHistory(response.data);
    });
  }, []);

  return (
    <div className="w-1/4 bg-gray-200 p-4 overflow-y-auto">
      {chatHistory.map((chat) => (
        <div
          key={chat.user}
          onClick={() => selectChat(chat.user)}
          className="p-2 mb-2 cursor-pointer bg-white rounded-lg shadow hover:bg-gray-300"
        >
          {chat.user}
        </div>
      ))}
    </div>
  );
};

export default ChatList;
