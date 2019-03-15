import {
  get,
  post,
  put,
  del
} from "./http.js"

// userInfo
export const getUserInfo = () => get('/user');
export const addUserInfo = params => post('/user', params);
export const updateUserInfo = params => put('/user', params);
export const deleteUserInfo = params => del('/user/' + params);

// userArticle
export const getUserArticleInfo = () => get('/user/article');
export const addUserArticleInfo = params => post('/user/article', params);
export const updateUserArticleInfo = params => put('/user/article', params);
export const deleteUserArticleInfo = params => del('/user/article/' + params);
