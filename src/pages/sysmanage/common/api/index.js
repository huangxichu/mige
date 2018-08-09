import {get_head,post_head,delete_head,put_head_upload} from '../../../../axios/ajax'
import {getLoginUser,checkLoginUser} from '../../../../assets/js/assist'
const baseUrl = '/api'

export const urls = {
  uploadFile:baseUrl+'/img/upload'
}


export const uploadFile = (params,that) => {
  var user = getLoginUser()
  return put_head_upload(urls.uploadFile,params, {
    'token': user.token
  });
}




