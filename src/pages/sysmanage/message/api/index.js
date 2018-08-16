import {get_head,post_head,delete_head} from '../../../../axios/ajax'
import {getLoginUser,checkLoginUser} from '../../../../assets/js/assist'
const baseUrl = '/api'

export const urls = {
  getPageMessage:baseUrl+'/message/page',
  saveMessage:baseUrl+'/message/save',
  saveYkMessage:baseUrl+'/message/yk/save'
}


export const getMessages = (params,that) => {
  var user = getLoginUser()
  return get_head(urls.getPageMessage,params, {
    'token': user.token
  });
}

export const saveMessage = (params,that) => {
  var user = getLoginUser()
  return post_head(urls.saveMessage,params, {
    'token': user.token
  });
}

export const saveYkMessage = (params,that) => {
  return post_head(urls.saveYkMessage,params, {

  });
}

