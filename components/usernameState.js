import { useState } from 'react';

export const useUsernameState = () => {
  const [username, setUsername] = useState('');

  return [username, setUsername];
};