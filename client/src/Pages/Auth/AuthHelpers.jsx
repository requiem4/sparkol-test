export function parseJwt(token) {
  var base64Url = token.split('.')[1];
  if(!base64Url){
    return false
  }
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  if(!base64){
    return false
  }
  var atob = window.atob(base64)
  if(!base64){
    return false
  }
  try {
    return JSON.parse(atob);
  } catch (e) {
    return false;
  }
}