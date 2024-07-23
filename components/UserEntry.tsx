import { useState } from 'react';
import { useRouter } from 'next/router';

const UserEntry = () => {
  const [name, setName] = useState<string>('');
  const router = useRouter();

  const handleSubmit = () => {
    if (name.trim()) {
      localStorage.setItem('userName', name);
      router.push('/chat');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      >
        Enter Chat
      </button>
    </div>
  );
};

export default UserEntry;
