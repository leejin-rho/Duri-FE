// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { getUser } from '@duri-fe/utils';

const Home = () => {
  // const [user, setUser] = useState<any>(null);

  // useEffect(async () => {
  //   const user = await getUser();
  //   setUser(user);
  // }, []);

  return (
    <div>
      <h1>안녕하세요!</h1>
      {/* {user ? (
        <div>
          <p>
            이름: {user.firstName} {user.lastName}
          </p>
        </div>
      ) : (
        <p>로딩 중...</p>
      )} */}
    </div>
  );
};

export default Home;
