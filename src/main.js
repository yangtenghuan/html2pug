import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import config from './config'
import fly from 'flyio'
import {Toast} from 'vant'
import 'vant/lib/toast/style'

Vue.config.productionTip = false

Vue.prototype.$config = config
Vue.prototype.Toast = Toast

function request (url, form = {}, type) {
  let compleForm = form
  // let presetForm = {
  //   orgName: 123456
  // }
  // Object.assign(compleForm, presetForm)
  if (type === 'post' || type === 'delete' || type === 'put') {
    let formData = new FormData()
    for (let key in form) {
      formData.append(key, form[key])
    }
    compleForm = formData
  }
  return fly.request(url, compleForm, {
    method: type,
    timeout: 5000
  }).then((res) => {
    if (type === 'delete' || res.status === 204) {
      return res.text()
    } else if (res.data.state === 'T') {
      return res.data
    } else {
      Toast(JSON.parse(res.data).error.msg)
    }
  }).catch((err) => {
    const codeMessage = {
      200: '服务器成功返回请求的数据.',
      201: '新建或修改数据成功.',
      202: '一个请求已经进入后台排队（异步任务）.',
      204: '删除数据成功.',
      400: '发出的请求有错误，服务器没有进行新建或修改数据的操作.',
      401: '用户没有权限（令牌、用户名、密码错误）.',
      403: '用户得到授权，但是访问是被禁止的.',
      404: '发出的请求针对的是不存在的记录，服务器没有进行操作.',
      406: '请求的格式不可得',
      410: '请求的资源被永久删除，且不会再得到的.',
      422: '当创建一个对象时，发生一个验证错误.',
      500: '服务器发生错误，请检查服务器.',
      502: '网关错误',
      503: '服务不可用，服务器暂时过载或维护.',
      504: '网关超时'
    }
    if (err.status >= 300) {
      const errortext = codeMessage[err.status] || err.response.statusText
      Toast(errortext)
    }
  })
}

request.get = (url, form) => request(url, form, 'get')
request.post = (url, form) => request(url, form, 'post')
request.delete = (url, form) => request(url, form, 'delete')
request.put = (url, form) => request(url, form, 'put')

Vue.prototype.$http = request

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
