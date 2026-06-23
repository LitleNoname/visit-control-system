import { useEffect, useState } from 'react';
import { getUser } from '../../../utils/auth.ts';

export const MainStudent = () => {
  const user = getUser();
  const [groupName, setGroupName] = useState('');

  useEffect(() => {
    if (user?.role === 'student' && user.groupId) {
      fetch(`/api/groups/${user.groupId}`)
        .then(res => res.json())
        .then(data => setGroupName(data.name))
        .catch(console.error);
    }
  }, [user]);

  return (
    <div>
      <h1>Привет, {user?.fullName}</h1>
      <p>Группа: {groupName || 'Загрузка...'}</p>
    </div>
  );
};