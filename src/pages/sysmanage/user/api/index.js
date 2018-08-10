import {get_head,post_head,delete_head} from '../../../../axios/ajax'
import {getLoginUser,checkLoginUser} from '../../../../assets/js/assist'
const baseUrl = '/api'

export const urls = {
  getPageUser:baseUrl+'/user/page',
  saveEmployee:baseUrl+'/user/save',
  deleteEmployee:baseUrl+'/user/delete'
}


export const getUsers = (params,that) => {
  var user = getLoginUser()
  return get_head(urls.getPageUser,params, {
    'token': user.token
  });
}

export const saveEmployee= (params,that) => {
  var user = getLoginUser()
  return post_head(urls.saveEmployee,params, {
    'token': user.token
  });
}

export const deleteEmployee = (params,that) => {
  var user = getLoginUser()
  return delete_head(urls.deleteEmployee,params, {
    'token': user.token
  });
}





