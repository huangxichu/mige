import axios from 'axios'
import qs from 'qs'

const baseUrl = '/api'
const baseUrl_API = '/api'
const baseUrl_API_H = '/health'
// const wechat_web_api = '/wechat'
const wechat_web_api = '/wechat2'
// const wechat_web_api = 'http://192.168.10.67:9988/api'
export const urls = {
  articleSearch: baseUrl + '/article/searchArticles.json',
  atricleInfo:baseUrl+ '/article/getArticle.json',
  upload: baseUrl + '/article/upload.json',
  savearticle: baseUrl + '/article/savearticle.json',
  removeArticle: baseUrl + '/article/removearticle.json',
  schedueSearch: baseUrl_API + '/cswb/findWechatshedule.json',
  findArticleWechatshedule: baseUrl_API + '/cswb/findArticleWechatshedule.json',
  removeSchedue: baseUrl_API + '/cswb/deleteWechatshedule.json',
  schedueInfo: baseUrl_API + '/cswb/getWechatShedule.json',
  saveSchedue: baseUrl_API + '/cswb/saveWechatshedule.json',
  searchOrgans: baseUrl_API +'/searchorgans.json',
  findOffices: baseUrl_API + '/findofficesbyorgancode.json',
  findDoctors: baseUrl_API +'/finddoctorsbyofficecode.json',
  bindArticleRegistr: baseUrl_API + '/cswb/bindarticleregistrs.json',
  findArticleRegistrs: baseUrl_API + '/cswb/findarticleregistrsbyarticlecode.json',
  reply: baseUrl + '/article/reply.json',
  replyed: baseUrl + '/article/replyed.json',
  findAtricleReply: baseUrl + '/article/reply/search.json',
  atricleReplyUpdate: baseUrl + '/article/reply/update.json',
  searchVideos: baseUrl + '/article/searchVideos.json',
  getVideoFile: baseUrl + '/article/getVideoFile.json',
  loadAdvices: baseUrl_API_H + '/advice/loadadvices.json',
  assess: baseUrl_API_H + '/advice/assess.json',
  loadAdviceAssess: baseUrl_API_H + '/advice/findadviceassess.json',
  loadAdvicereply: baseUrl_API_H + '/advice/getadvicereply.json',
  register: baseUrl + '/article/cswb/register.json',
  registered: baseUrl + '/article/cswb/registered.json',
  wechatLogin: baseUrl_API + '/cswb/weixin/login.json',
  getAssociatorInfo: baseUrl + '/article/cswb/getAssociatorInfo.json',
  saveOrEditAssociator: baseUrl + '/article/cswb/saveOrEditAssociator.json',
  searchRegister: baseUrl + '/article/cswb/searchregister.json',
  findOfflineOrgans: baseUrl_API + '/findofflineorgans.json',
  findAdviceMavins: baseUrl_API_H + '/advice/findadvicemavins.json',
  //offlineAdvice: baseUrl_API_H + '/outer/micomme/advice/offlineadvice.json',
  offlineAdvice: baseUrl_API_H + '/advice/offlineadvice.json',
  submitOfflineAdvice: baseUrl_API_H + '/advice/outer/submitofflineadvice.json',
  getAccessToken: wechat_web_api + '/access_token',//通过code换取网页授权access_token
  getUserInfo: wechat_web_api + '/userinfo',
  registerAssociator: baseUrl + '/cswb/weixin/register.json',
  unRegister: baseUrl + '/article/cswb/unregister.json',
  getUserRegister: baseUrl + '/article/cswb/register/search.json',
  getRegister: baseUrl + '/article/cswb/getRegister.json',
  updateRegister: baseUrl + '/article/cswb/updateRegister.json',
  getDoctor: baseUrl_API + '/doctor/getdoctor.json'
}

/**
 * 查询资讯
 * @param params
 */
// export const requestLogin = params => { return post(loginUrls.login, params) }
export const getArticle = params => {
  return axios.post(urls.articleSearch,qs.stringify(params)).then(function(res){
    //对返回的数据res进行处理的逻辑
    return res
  }).catch(() => {
    console.info("error")
  })
}

/**
 * 查询资讯详情
 * @param params
 */
// export const requestLogin = params => { return post(loginUrls.login, params) }
export const getArticleInfo = params => {
  return axios.post(urls.atricleInfo,qs.stringify(params)).then(function(res){
    //对返回的数据res进行处理的逻辑
    return res
  }).catch(() => {
    console.info("error")
  })
}

export const getArticleReply = params => {
  return axios.post(urls.findAtricleReply,qs.stringify(params)).then(function(res){
    //对返回的数据res进行处理的逻辑
    return res
  }).catch(() => {
    console.info("error")
  })
}

export const register = params => {
  return axios.post(urls.register,qs.stringify(params)).then(function(res){
    //对返回的数据res进行处理的逻辑
    return res
  }).catch(() => {
    console.info("error")
  })
}

export const uploadFile = params => {
  return axios.post(urls.upload, params).then(res => {
    return res;
  }).catch(err => {
    console.info(err);
  })
}

export const savearticle = params =>{
  return axios.post(urls.savearticle, qs.stringify(params)).then(res => {return res}).catch(err=>{})
}

export const removeArticle = params => {
  return axios.post(urls.removeArticle, qs.stringify(params)).then(res=>{return res}).catch(err=>{})
}

export const getSchedue = params => {
  return axios.post(urls.schedueSearch,qs.stringify(params)).then(res => {
    //对返回的数据res进行处理的逻辑
    return res
  }).catch(err => {
    console.info(err)
  })
}
export const findArticleWechatshedule = params => {
  return axios.post(urls.findArticleWechatshedule,qs.stringify(params)).then(res => {
    //对返回的数据res进行处理的逻辑
    return res
  }).catch(err => {
    console.info(err)
  })
}

export const removeSchedue = params => {
  return axios.post(urls.removeSchedue, qs.stringify(params)).then(res=>{
    //对返回的数据res进行处理的逻辑
    return res
  }).catch(err=>{
    console.info(err)
  })
}


export const getSchedueInfo = params => {
  return axios.post(urls.schedueInfo,qs.stringify(params)).then(function(res){
    //对返回的数据res进行处理的逻辑
    return res
  }).catch(() => {
    console.info("error")
  })
}


export const saveSchedue = params => {
  return axios.post(urls.saveSchedue,qs.stringify(params)).then(function(res){
    //对返回的数据res进行处理的逻辑
    return res
  }).catch(err => {
    console.info(err)
  })
}


export const getDoctor = params => {
  return axios.post(urls.getDoctor,qs.stringify(params)).then(function(res){
    //对返回的数据res进行处理的逻辑
    return res
  }).catch(err => {
    console.info(err)
  })
}

export const searchOrgans = params => {
  return axios.post(urls.searchOrgans, qs.stringify(params)).then(res=> {
    return res
  }).catch(err => {
    console.info(err);
  })
}

export const findOffices = params => {
  return axios.post(urls.findOffices, qs.stringify(params)).then(res => {
    return res;
  }).catch(err => {
    console.info(err);
  });
}

export const findDoctors = params => {
  return axios.post(urls.findDoctors, qs.stringify(params)).then(res => {
    return res;
  }).catch(err => {
    console.info(err);
  })
}

export const bindArticleRegistr = params => {
  return axios.post(urls.bindArticleRegistr, qs.stringify(params)).then(res => {
    return res;
  }).catch(err => {
    console.info(err);
  });
}

export const findArticleRegistrs = params => {
  return axios.post(urls.findArticleRegistrs, qs.stringify(params)).then(res => {
    return res;
  }).catch(err => {
    console.info(err);
  });
}


export const reply = params => {
  return axios.post(urls.reply,qs.stringify(params)).then(function(res){
    //对返回的数据res进行处理的逻辑
    return res
  }).catch(err => {
    console.info(err)
  })
}

export const updateAtricleReply = params => {
  return axios.post(urls.atricleReplyUpdate,qs.stringify(params)).then(function(res){
    //对返回的数据res进行处理的逻辑
    return res
  }).catch(err => {
    console.info(err)
  })
}

export const wechatLogin = params => {
  return axios.post(urls.wechatLogin,qs.stringify(params)).then(function(res){
    //对返回的数据res进行处理的逻辑
    return res
  }).catch(err => {
    console.info(err)
  })
}

export const replyed = params => {
  return axios.post(urls.replyed,qs.stringify(params)).then(function(res){
    //对返回的数据res进行处理的逻辑
    return res
  }).catch(err => {
    console.info(err)
  })
}

export const getAssociatorInfo = params => {
  return axios.post(urls.getAssociatorInfo,qs.stringify(params)).then(function(res){
    //对返回的数据res进行处理的逻辑
    return res
  }).catch(err => {
    console.info(err)
  })
}

export const searchRegister = params => {
  return axios.post(urls.searchRegister,qs.stringify(params)).then(function(res){
    //对返回的数据res进行处理的逻辑
    return res
  }).catch(err => {
    console.info(err)
  })
}


export const registered = params => {
  return axios.post(urls.registered,qs.stringify(params)).then(function(res){
    //对返回的数据res进行处理的逻辑
    return res
  }).catch(err => {
    console.info(err)
  })
}

export const saveOrEditAssociator = params => {
  return axios.post(urls.saveOrEditAssociator,qs.stringify(params)).then(function(res){
    //对返回的数据res进行处理的逻辑
    return res
  }).catch(err => {
    console.info(err)
  })
}

export const getVideoFile = params => {
  return axios.post(urls.getVideoFile, qs.stringify(params)).then(res => {
    return res;
  }).catch(err => {
    console.info(err);
  })
}

export const searchVideos = params => {
  return axios.post(urls.searchVideos, qs.stringify(params)).then(res => {
    return res;
  }).catch(err => {
    console.info(err);
  })
}

export const loadAdvices = params => {
  return axios.post(urls.loadAdvices, qs.stringify(params)).then(res => {
    return res;
  }).catch(err => {
    console.info(err);
  })
}

export const loadAdviceAssess = params => {
  return axios.post(urls.loadAdviceAssess, qs.stringify(params)).then(res => {
    return res;
  }).catch(err => {
    console.info(err);
  })
}

export const assess = params => {
  return axios.post(urls.assess, qs.stringify(params)).then(res => {
    return res;
  }).catch(err => {
    console.info(err);
  })
}

export const loadAdvicereply = params => {
  return axios.post(urls.loadAdvicereply, qs.stringify(params)).then(res => {
    return res;
  }).catch(err => {
    console.info(err);
  })
}

export const findOfflineOrgans = params => {
  return axios.post(urls.findOfflineOrgans, qs.stringify(params)).then(res => {
    return res;
  }).catch(err => {
    console.info(err);
  })
}

export const findAdviceMavins = params => {
  return axios.post(urls.findAdviceMavins, qs.stringify(params)).then(res => {
    return res;
  }).catch(err => {
    console.info(err);
  })
}

export const offlineAdvice = params => {
  return axios.post(urls.offlineAdvice, qs.stringify(params)).then(res => {
    return res;
  }).catch(err => {
    console.info(err);
  })
}

export const submitOfflineAdvice = params => {
  return axios.post(urls.submitOfflineAdvice, qs.stringify(params)).then(res => {
    return res;
  }).catch(err => {
    console.info(err);
  })
}

export const getWechatWebAccessToken = params => {
  // var appid = 'wx1b3e267af80fbecd';
  // var secret = '6cfbf5289b54ef233dc1925884295127';
  // var grant_type = 'authorization_code'
  var url = urls.getAccessToken + '?appid=' + params.appid + '&secret=' + params.secret + '&code=' + params.wechatCode + '&grant_type=authorization_code';
  return axios.get(url).then(res => {return res;}).catch(err => {console.info(err)});
}

export const getUserInfo = (accessToken, openId) => {
  var url = urls.getUserInfo + '?access_token='+accessToken+'&openid='+openId+'&lang=zh_CN';
  console.info('url:',url);
  return axios.get(url).then(res => {return res;}).catch(err => {console.info(err)});
}

export const registerAssociator = params => {
  return axios.post(urls.registerAssociator, qs.stringify(params)).then(res => {return res}).catch(err => {console.info(err)});
}

export const unRegister = (params) => {
  return axios.post(urls.unRegister, qs.stringify(params)).then(res => {
    return res;
  }).catch(err => {
    console.info(err);
  })
}

export const getUserRegister = (params) => {
  return axios.post(urls.getUserRegister, qs.stringify(params)).then(res => {
    return res;
  }).catch(err => {
    console.info(err);
  })
}
export const getRegister = (params) => {
  return axios.post(urls.getRegister, qs.stringify(params)).then(res => {
    return res;
  }).catch(err => {
    console.info(err);
  })
}

export const updateRegister = (params) => {
  return axios.post(urls.updateRegister, qs.stringify(params)).then(res => {
    return res;
  }).catch(err => {
    console.info(err);
  })
}


