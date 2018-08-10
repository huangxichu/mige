import {get_head,get,post_head,delete_head} from '../../../../axios/ajax'
import {getLoginUser,checkLoginUser} from '../../../../assets/js/assist'
const baseUrl = '/api'

export const urls = {
  getPagePost:baseUrl+'/post/page',
  savePost:baseUrl+'/post/save',
  deletePost:baseUrl+'/post/delete'
}


export const getPost = (params,that) => {
  var user = getLoginUser()
  return get_head(urls.getPagePost,params, {
    'token': user.token
  });
}

export const savePost= (params,that) => {
  var user = getLoginUser()
  return post_head(urls.savePost,params, {
    'token': user.token
  });
}

export const deletePost = (params,that) => {
  var user = getLoginUser()
  return delete_head(urls.deletePost,params, {
    'token': user.token
  });
}

