import jsonPlaceholder from './jsonPlaceholder';

export const fetchPosts = async (userId) => {
  if (!userId) return [];
  const response = await jsonPlaceholder.get(`/posts?userId=${userId}`);
  return response.data;
};
