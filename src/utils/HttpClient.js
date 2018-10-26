import axios from 'axios'
import config from '../config/index'


const HttpClient = axios.create({
    baseURL: config.serverUrl, // api 的 base_url
    timeout: 5000 // request timeout
  })


//请求拦截 request interceptor(设置token，jwt格式)
HttpClient.interceptors.request.use(
    config => {
      
      let token=tokenAuth.getToken();
      if(token!=null){
        config.headers['Authorization'] ='Bearer ' + token  //也可以通过配置自定义格式
      }
      return config
    },
    error => {
      // Do something with request error
      console.error(error) // for debug
      Promise.reject(error)
    }
  )


  
  // response interceptor
  HttpClient.interceptors.response.use(
    /**
     * 下面的注释为通过在response里，自定义code来标示请求状态
     * 当code返回如下情况则说明权限有问题，登出并返回到登录页
     * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
     * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
     */
    response => {
      console.log(response)             //401 未授权登出   //500 内部错误 转到错误页   //200  判断业务code 进行相应处理，比如处理多端登陆等
      return response.data
    },
    error => {
      console.log('err' + error) // for debug
      return Promise.reject(error)
    }
  )








export default HttpClient