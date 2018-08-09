import axios from 'axios'
import qs from 'qs'

export const get = (url, params) => { return axios.get(url, params).then(res => res.data) }
export const post = (url, params) => { return axios.post(url, params).then(res => res.data) }
export const put = (url, params) => { return axios.put(url, params).then(res => res.data) }
export const del = (url, params) => { return axios.delete(url, params).then(res => res.data) }

export const get_head = (url, params,headers) => {
    return axios.get(url,
      {
        headers: headers,
        params: params
      }
    ).then(res => {
        //对返回的数据res进行处理的逻辑
        return res
    }).catch(e => {
        console.info("error")
    })
}

export const post_head = (url, params,headers) => {
  return axios.post(url,
    qs.stringify(params),
    {
      headers: headers
    }
  ).then(res => {
    //对返回的数据res进行处理的逻辑
      return res
  }).catch(e => {
      console.info("error")
  })
}

export const put_head = (url, params,headers) => {
  return axios.put(url,
    qs.stringify(params),
    {
      headers: headers
    }
  ).then(res => {
    //对返回的数据res进行处理的逻辑
    return res
  }).catch(e => {
    console.info("error")
  })
}

export const put_head_upload = (url, params,headers) => {
  return axios.put(url,
    params,
    {
      headers: headers
    }
  ).then(res => {
    //对返回的数据res进行处理的逻辑
    return res
  }).catch(e => {
    console.info("error")
  })
}

export const delete_head = (url, params,headers) => {
  return axios.delete(url,
    {
      headers: headers,
      params: params
    }
  ).then(res => {
    //对返回的数据res进行处理的逻辑
    return res
  }).catch(e => {
    console.info("error")
  })
}
