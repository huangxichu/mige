import {get_head,post_head,delete_head} from '../../../../axios/ajax'
import {getLoginUser,checkLoginUser} from '../../../../assets/js/assist'
const baseUrl = '/api'

export const urls = {
  getPageCategory:baseUrl+'/news/page/categories',
  saveNewsCategory:baseUrl+'/news/category/save',
  deleteNewsCategory:baseUrl+'/news/category/delete'
}


export const getNewsCategory = (params,that) => {
  // if(!checkLoginUser){
  //
  // }
  var user = getLoginUser()
  return get_head(urls.getPageCategory,params, {
    'token': user.token
  });
}

export const saveNewsCategory = (params,that) => {
  var user = getLoginUser()
  return post_head(urls.saveNewsCategory,params, {
    'token': user.token
  });
}

export const deleteNewsCategory = (params,that) => {
  var user = getLoginUser()
  return delete_head(urls.deleteNewsCategory,params, {
    'token': user.token
  });
}



