const cookieTokenKey = 'p_token'

const sessionUserKey = 'p_user'

const sessionWechatCodeKey = 'wechat_code'

const wechatRefreshToken = 'refresh_token';

const wechatAccessToken = 'access_token';

const wechatUser = "w_user";

function setWechatUser(user) {
  localStorage.setItem(wechatUser, JSON.stringify(user))
  // addCookie(wechatUser, user, 2);
}

function getWechatUser(){
  return JSON.parse(localStorage.getItem(wechatUser))
  // return getCookie(wechatUser);
}

function removeWechatUser(){
  localStorage.removeItem(wechatUser)
  // deleteCookie(wechatUser)
}

export {setWechatUser, getWechatUser, removeWechatUser}

function setWechatAccessToken(code) {
  addCookie(wechatAccessToken, code);
}

function getWechatAccessToken() {
  return getCookie(wechatAccessToken);
}

function removeWechatAccessToken() {
  deleteCookie(wechatAccessToken)
}
export {setWechatAccessToken, getWechatAccessToken, removeWechatAccessToken}

function setWechatRefreshToken(code) {

  addCookie(wechatRefreshToken, code, 72)
}

function getWechatRefreshToken() {
  return getCookie(wechatRefreshToken);
}

function removeWechatRefreshToken() {
  deleteCookie(wechatRefreshToken);
}
export {setWechatRefreshToken, getWechatRefreshToken, removeWechatRefreshToken}

function setWechatCode (code) {
  //localStorage.setItem(sessionWechatCodeKey, code);
  var old_code = getWechatCode();
  if(old_code != code) {
    addCookie(sessionWechatCodeKey, code, 2);
  }
}
export {setWechatCode}
function getWechatCode () {
  //localStorage.getItem(sessionWechatCodeKey)
  return getCookie(sessionWechatCodeKey);
}
export {getWechatCode}

function removeWechatWechat() {
  //localStorage.removeItem(sessionWechatCodeKey)
  deleteCookie(sessionWechatCodeKey)
}
export {removeWechatWechat}
/**
 * 将登录用户放到sessionStorage中
 * @param user
 */
function setLoginUser (user) {
  localStorage.setItem(sessionUserKey, JSON.stringify(user))
  addCookie(cookieTokenKey, user.token, 24)
}
export {setLoginUser}
/**
 * 移除sessionStorage中的登录用户
 */
function removeLoginUser () {
  localStorage.removeItem(sessionUserKey)
  deleteCookie(cookieTokenKey)
}
export {removeLoginUser}
/**
 * 获取登录用户信息
 */
function getLoginUser () {
  return JSON.parse(localStorage.getItem(sessionUserKey))
}
export {getLoginUser}

function checkLoginUser () {
  var user = getLoginUser()
  if(user == null || user == undefined){
    return false;
  }
}
export {checkLoginUser}

/**
 * 获取登录用户页面元素权限信息
 */
function getPageAuth () {
  return JSON.parse(localStorage.getItem(sessionUserKey)).pageIdsObj
}
export {getPageAuth}

/**
 * 添加cookie
 * @param name
 * @param value
 * @param expireHours 有效时间,单位小时,为0
 */
function addCookie (name, value, expireHours) {
  let cookieString = name + '=' + value
  // 判断是否设置过期时间
  if (expireHours > 0) {
    let date = new Date()
    date.setTime(date.getTime + expireHours * 3600 * 1000)
    cookieString = cookieString + '; expires=' + date.toGMTString()
  }
  document.cookie = cookieString
}

export {addCookie}

/**
 * 获取cookie
 * @param name
 * @returns {*}
 */
function getCookie (name) {
  let strCookie = document.cookie
  let arrCookie = strCookie.split('; ')
  for (let i = 0; i < arrCookie.length; i++) {
    let arr = arrCookie[i].split('=')
    if (arr[0] === name) return arr[1]
  }
  return ''
}

export {getCookie}

/**
 * 删除cookie, 即把value设置为空
 * @param name
 */
function deleteCookie (name) {
  let date = new Date()
  date.setTime(date.getTime() - 10000)
  document.cookie = name + '=v; expires=' + date.toGMTString()
}

export {deleteCookie}

/**
 * 获取cookie中的token
 * @returns {*}
 */
function getTokenCookie () {
  return getCookie(cookieTokenKey)
}

export {getTokenCookie}

/**
 * 删除cookie中的token
 */
function removeTokenCookie () {
  deleteCookie(cookieTokenKey)
}

export {removeTokenCookie}

const defaultDatePattern = 'yyyy-MM-dd'

/**
 * 解析日期字符串为日期Date对象
 * @param dateStr 字符串日期
 * @param pattern 日期格式
 * @returns {Date}
 */
function parseStrToDate (dateStr, pattern) {
  if (!pattern || pattern === '') pattern = defaultDatePattern
  let date = new Date()
  if (pattern.includes('yyyy')) { // 年份
    date.setFullYear(Number(dateStr.substr(pattern.indexOf('yyyy'), 4)))
  }
  if (pattern.includes('MM')) { // 月份
    date.setMonth(Number(dateStr.substr(pattern.indexOf('MM'), 2)) - 1)
  }
  if (pattern.includes('dd')) { // 天
    date.setDate(Number(dateStr.substr(pattern.indexOf('dd'), 2)))
  }
  if (pattern.includes('HH')) { // 小时
    date.setHours(Number(dateStr.substr(pattern.indexOf('HH'), 2)))
  }
  if (pattern.includes('mm')) { // 分钟
    date.setMinutes(Number(dateStr.substr(pattern.indexOf('mm'), 2)))
  }
  if (pattern.includes('ss')) { // 秒
    date.setSeconds(Number(dateStr.substr(pattern.indexOf('ss'), 2)))
  }
  if (pattern.includes('SSS')) { // 毫秒
    date.setMilliseconds(Number(dateStr.substr(pattern.indexOf('SSS'), 3)))
  }
  return date
}

export {parseStrToDate}

/**
 * 格式化日期
 * @param dat 日期对象
 * @param parttern 格式
 * @returns {*}
 */
function formatDate (dat, parttern) {
  if (!parttern || parttern === '') parttern = defaultDatePattern
  let o = {
    'M+': dat.getMonth() + 1, // 月份
    'd+': dat.getDate(), // 日
    'h+': dat.getHours() % 12 === 0 ? 12 : dat.getHours() % 12, // 小时
    'H+': dat.getHours(), // 小时
    'm+': dat.getMinutes(), // 分
    's+': dat.getSeconds(), // 秒
    'q+': Math.floor((dat.getMonth() + 3) / 3), // 季度
    'S': dat.getMilliseconds() // 毫秒
  };
  let week = {
    '0': '/u65e5',
    '1': '/u4e00',
    '2': '/u4e8c',
    '3': '/u4e09',
    '4': '/u56db',
    '5': '/u4e94',
    '6': '/u516d'
  };
  if (/(y+)/.test(parttern)) {
    parttern = parttern.replace(RegExp.$1, (dat.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  if (/(E+)/.test(parttern)) {
    parttern = parttern.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '/u661f/u671f' : '/u5468') : '') + week[dat.getDay() + '']);
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(parttern)) {
      parttern = parttern.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
  }
  return parttern;
}

export {formatDate}

/**
 * 获取某个日期范围内的所有日期
 * @param startDate
 * @param stopDate
 * @returns {Array}
 */
function getDates (startDate, stopDate, parttern) {
  if (!parttern || parttern === '') parttern = defaultDatePattern
  let dateArray = []
  let currentDate = startDate
  while (currentDate <= stopDate) {
    dateArray.push(formatDate(currentDate, parttern))
    currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1))
  }
  return dateArray;
}

export {getDates}

/**
 * 获取两个时间区间的天数
 * @param startDate
 * @param stopDate
 * @param parttern
 * @returns {Number}
 */
function getDays (startDate, stopDate, parttern) {
  if (!parttern || parttern === '') parttern = defaultDatePattern
  return getDates(parseStrToDate(startDate, parttern), parseStrToDate(stopDate, parttern)).length
}

export {getDays}

// const ak = 'DD279b2a90afdf0ae7a3796787a0742e'
const ak = 'C442db13ee343023e84546b6765dfcff'
/**
 * 异步加载百度地图
 * @returns {Promise}
 * @constructor
 */
function loadBaiDuMap () {
  return new Promise(function (resolve, reject) {
    window.init = function () {
      resolve(BMap)
    }
    let script1 = document.createElement('script')
    script1.type = 'text/javascript'
    script1.src = 'https://api.map.baidu.com/api?v=2.0&ak=' + ak + '&callback=init'
    script1.onerror = reject
    document.head.appendChild(script1)
  })
}

export {loadBaiDuMap}

/**
 * 异步加载百度地图,以及热力图插件
 * @returns {Promise}
 * @constructor
 */
function loadBaiDuHeatMap () {
  return new Promise(function (resolve, reject) {
    window.init = function () {
      resolve(BMap)
      let script2 = document.createElement('script')
      script2.type = 'text/javascript'
      script2.src = 'https://api.map.baidu.com/library/Heatmap/2.0/src/Heatmap_min.js'
      script2.onerror = reject
      document.body.appendChild(script2)
    }
    let script1 = document.createElement('script')
    script1.type = 'text/javascript'
    script1.src = 'https://api.map.baidu.com/api?v=2.0&ak=' + ak + '&callback=init'
    script1.onerror = reject
    document.body.appendChild(script1)
  })
}

export {loadBaiDuHeatMap}

function randomString(len) {
  len = len || 32;
  var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  var maxPos = $chars.length;
  var pwd = '';
  for (var i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}

export {randomString}

function checkIdentity(identity){
  var reg = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/;
  if(reg.test(identity)){
    return true;
  }else{
    return false;
  }
}
export {checkIdentity}


function isPhoneAvailable(phonevalue){
  var phoneReg = /^1[23-56789]\d{9}$/;
  if(phoneReg.test(phonevalue)){
    return true;
  }else{
    return false;
  }
}
export {isPhoneAvailable}
