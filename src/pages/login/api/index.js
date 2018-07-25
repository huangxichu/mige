import {post} from '../../../axios/ajax'
import { removeLoginUser, removeTokenCookie } from '../../../assets/js/assist'
const loginBaseUrl = '/api'
import axios from 'axios'
import qs from 'qs'
export const loginUrls = {
  login: loginBaseUrl + '/cswb/login.json',
  logout:  '/'
}

/**
 * 登录请求
 * @param params
 */
// export const requestLogin = params => { return post(loginUrls.login, params) }
export const requestLogin = params => {
  return axios.post(loginUrls.login,qs.stringify(params)).then(function(res){
    //对返回的数据res进行处理的逻辑
    return res
  }).catch(() => {
    console.info("error")
  })
}
/**
 * 登出请求
 * @param params
 */
export const requestLogout = params => {
  removeTokenCookie()
  removeLoginUser()
  return post(loginUrls.logout, params)
}
