import {get_head,get,post_head,delete_head} from '../../../../axios/ajax'
import {getLoginUser,checkLoginUser} from '../../../../assets/js/assist'
const baseUrl = '/api'

export const urls = {
  getPageCategory:baseUrl+'/news/page/categories',
  getCategory:baseUrl+'/news/categories',
  saveNewsCategory:baseUrl+'/news/category/save',
  deleteNewsCategory:baseUrl+'/news/category/delete',
  getPageNews:baseUrl+'/news/page',
  saveNews:baseUrl+'/news/save',
  deleteNews:baseUrl+'/news/delete'
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

export const getCategory = (params) => {
  return get_head(urls.getCategory,params,{});
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

export const getNews = (params,that) => {
  var user = getLoginUser()
  return get_head(urls.getPageNews,params, {
    'token': user.token
  });
}

export const saveNews= (params,that) => {
  var user = getLoginUser()
  return post_head(urls.saveNews,params, {
    'token': user.token
  });
}

export const deleteNews = (params,that) => {
  var user = getLoginUser()
  return delete_head(urls.deleteNews,params, {
    'token': user.token
  });
}

