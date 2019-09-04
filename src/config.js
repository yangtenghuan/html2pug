export default {
  api_url: process.env.NODE_ENV !== 'production'
  ? '/api'
  : 'https://baidu.com'
}
