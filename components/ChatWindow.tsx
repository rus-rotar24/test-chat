import { useEffect, useState } from 'react';
import axios from 'axios';
import { Message } from '@/utils/types';

const ChatWindow = ({ user }: { user: string }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    axios.get(`/api/chat?user=${user}`).then((response) => {
      setMessages(response.data.messages);
    });
  }, [user]);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages((prev) => [...prev, { user: 'me', text: message }]);
      setMessage('');
    }
  };

  return (
    <div className="w-3/4 p-4 flex flex-col justify-between">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-lg ${
              msg.user === 'me' ? 'bg-blue-100 self-end' : 'bg-gray-100 self-start'
            }`}
          >
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
