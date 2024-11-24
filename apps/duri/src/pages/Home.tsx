import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // 비동기 데이터 요청 테스트!!!!!
    async function getUser() {
      try {
        const response = await axios.get('https://api.example.com/api/user');
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getUser();
  }, []);

  return (
    <div>
      <h1>안녕하세요!</h1>
      {user ? (
        <div>
          <p>이름: {user.firstName} {user.lastName}</p>
        </div>
      ) : (
        <p>로딩 중...</p>
      )}
    </div>
  );
};

export default Home;
