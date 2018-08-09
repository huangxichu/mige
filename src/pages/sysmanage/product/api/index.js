import {get_head,post_head,delete_head} from '../../../../axios/ajax'
import {getLoginUser,checkLoginUser} from '../../../../assets/js/assist'
const baseUrl = '/api'

export const urls = {
  getPageCategory:baseUrl+'/product/page/categories',
  saveProductCategory:baseUrl+'/product/category/save',
  deleteProductCategory:baseUrl+'/product/category/delete',
  getCategory:baseUrl+'/product/categories',
  getPageProduct:baseUrl+'/page/products',
  saveProduct:baseUrl+'/product/save',
  deleteProduct:baseUrl+'/product/delete'
}


export const getProductCategory = (params,that) => {
  // if(!checkLoginUser){
  //
  // }
  var user = getLoginUser()
  return get_head(urls.getPageCategory,params, {
    'token': user.token
  });
}

export const saveProductCategory = (params,that) => {
  var user = getLoginUser()
  return post_head(urls.saveProductCategory,params, {
    'token': user.token
  });
}

export const deleteProductCategory = (params,that) => {
  var user = getLoginUser()
  return delete_head(urls.deleteProductCategory,params, {
    'token': user.token
  });
}

export const getCategory = (params) => {
  return get_head(urls.getCategory,params,{});
}


export const getProduct = (params,that) => {
  var user = getLoginUser()
  return get_head(urls.getPageProduct,params, {
    'token': user.token
  });
}

export const saveProduct= (params,that) => {
  var user = getLoginUser()
  return post_head(urls.saveProduct,params, {
    'token': user.token
  });
}

export const deleteProduct = (params,that) => {
  var user = getLoginUser()
  return delete_head(urls.deleteProduct,params, {
    'token': user.token
  });
}


