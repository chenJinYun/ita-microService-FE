import {
  get,
  post,
  put,
  del
} from "./http.js"


// first par is requst url, second par is request data
export const test = activityId => get('/activity/' + activityId, null);
