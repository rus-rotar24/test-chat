import { useState } from 'react';
import ChatList from '../components/ChatList';
import ChatWindow from '../components/ChatWindow';

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState('');

  const selectChat = (user: string) => {
    setSelectedUser(user);
  };

  return (
    <div className="flex h-screen">
      <ChatList selectChat={selectChat} />
      {selectedUser && <ChatWindow user={selectedUser} />}
    </div>
  );
};

export default Chat;
