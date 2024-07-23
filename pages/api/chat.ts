import { NextApiRequest, NextApiResponse } from 'next';
import { chatData } from '../../utils/mockData';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { user } = req.query;

  if (user) {
    const userData = chatData.find((chat) => chat.user === user);
    if (userData) {
      res.status(200).json(userData);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } else {
    res.status(200).json(chatData);
  }
};
