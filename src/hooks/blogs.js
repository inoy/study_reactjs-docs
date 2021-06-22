import { useState, useEffect } from 'react';
import { fetchPosts } from '../apis/blog';

export const usePosts = (userId) => {
  const [posts, setPosts] = useState(undefined);

  useEffect(() => {
    setPosts(undefined);
    fetchPosts(userId).then((res) => {
      setPosts(res);
    });
  }, [userId]);

  return posts;
};
