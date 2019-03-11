import {
  get,
  post,
  put,
  del
} from "./http.js"


// first par is requst url, second par is request data
export const test = activityId => get('/activity/' + activityId, null);

// userInfo
export const getUserInfo = () => get('/user/all');
export const addUserInfo = params => post('/user/add', params);
export const updateUserInfo = params => put('/user/update', params);
export const deleteUserInfo = params => del('/user/delete/' + params);

// userArticle
export const getUserArticleInfo = () => get('/user/article/all');
export const addUserArticleInfo = params => post('/user/article/add', params);
export const updateUserArticleInfo = params => put('/user/article/update', params);
export const deleteUserArticleInfo = params => del('/user/article/delete/' , params);
