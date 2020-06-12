import axios from 'axios';

import loading from '../assets/loading.gif';
import { useState } from 'react';

export async function useGetUserAvatar(username) {
  const [avatar, setAvatar] = useState(loading);
  const response = await axios.get(`https://api.github.com/users/${username}/repos`);
  setAvatar(response.data[0].owner.avatar_url);
  return [avatar, setAvatar];
}

export async function getUserAvatar(username) {
  const response = await axios.get(`https://api.github.com/users/${username}/repos`);
  console.log(response.data[0].owner.avatar_url);
  return response.data[0].owner.avatar_url;
}