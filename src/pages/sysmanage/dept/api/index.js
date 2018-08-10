import {get_head,get,post_head,delete_head} from '../../../../axios/ajax'
import {getLoginUser,checkLoginUser} from '../../../../assets/js/assist'
const baseUrl = '/api'

export const urls = {
  getPageDepartment:baseUrl+'/department/page',
  saveDepartment:baseUrl+'/department/save',
  deleteDepartment:baseUrl+'/department/delete'
}


export const getDepartment = (params,that) => {
  var user = getLoginUser()
  return get_head(urls.getPageDepartment,params, {
    'token': user.token
  });
}

export const saveDepartment = (params,that) => {
  var user = getLoginUser()
  return post_head(urls.saveDepartment,params, {
    'token': user.token
  });
}

export const deleteDepartment = (params,that) => {
  var user = getLoginUser()
  return delete_head(urls.deleteDepartment,params, {
    'token': user.token
  });
}

