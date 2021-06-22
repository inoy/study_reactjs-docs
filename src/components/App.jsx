import { useState } from 'react';
import PostList from './PostList';

const App = () => {
  const [userId, setUserId] = useState(1);

  return (
    <>
      <h1>Blog</h1>
      <label for="userId">ユーザーID：</label>
      <input
        type="text"
        name="userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <PostList userId={userId} />
    </>
  );
};

export default App;
