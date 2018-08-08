import {post,put_head,get} from '../../../axios/ajax'
import { removeLoginUser, removeTokenCookie } from '../../../assets/js/assist'
const loginBaseUrl = '/api'
export const loginUrls = {
  login: loginBaseUrl + '/user/login',
  getKey: loginBaseUrl + '/user/getPk',
  logout:  '/'
}

/**
 * 登录请求
 * @param params
 */
// export const requestLogin = params => { return post(loginUrls.login, params) }
export const requestLogin = params => {
  // return axios.get(loginUrls.login,
  //   {
  //     headers: {
  //       'salt': '123456',
  //     },
  //     params: params
  //   }
  // ).then(res => {
  //     //对返回的数据res进行处理的逻辑
  //     return res
  // }).catch(e => {
  //   console.info("error")
  // })
  return put_head(loginUrls.login,params, {
    'salt': 'Test'
  });
  // return axios.put(loginUrls.login,
  //   qs.stringify(params),
  //   {
  //     headers: {
  //       'salt': 'Bearer'
  //     }
  //   }
  // ).then(res => {
  //     //对返回的数据res进行处理的逻辑
  //     return res
  // }).catch(e => {
  //   console.info("error")
  // })

  // params.salt = "123456"
  // return axios({
  //   method: "GET",
  //   url: loginUrls.login,
  //   data: {},
  //   headers: params
  // }).then(function(res){
  //   //对返回的数据res进行处理的逻辑
  //   return res
  // }).catch(() => {
  //   console.info("error")
  // })


  // axios.post(urlString,
  //   {
  //     data: data,
  //     ...
  //   },
  //   {
  //     headers: {
  //       'Authorization': 'Bearer ' + token,
  //       "Cookie" : 'sessionId=' + sessionId + '; recId=' + recId,
  //       ...
  //     }
  //   }
  // )
  //   .then(res => fn)
  //   .catch(e => fn)

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

export const getKey = params => {
  return get(loginUrls.getKey,params);
}
