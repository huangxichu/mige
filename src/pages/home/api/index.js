import {get_head,post_head,delete_head} from '../../../axios/ajax'
const baseUrl = '/api'

export const urls = {
  getHomeProducts:baseUrl+'/home/products',
  getHomeNews:baseUrl+'/home/news',
  getHomeTopNews:baseUrl+'/home/top/news',
}


export const getHomeProducts = (params,that) => {
  return get_head(urls.getHomeProducts,params, {});
}

export const getHomeNews = (params,that) => {
  return get_head(urls.getHomeNews,params, {});
}

export const getHomeTopNews = (params,that) => {
  return get_head(urls.getHomeTopNews,params, {});
}


