import axios from 'axios'

export var baseurl = '/api'
/**
 * Get请求
 */
export function get(url, callback){
    console.log('测试get请求')
    axios.get(baseurl+url)
    .then(function (response) {
        console.log(response)
        callback(response.data,true)
    })
    .catch(function (error) {
        console.log(error)
        callback(null,false)
    })
}


export default {
    get
}