/*
 * @Author: caomt 
 * @Date: 2018-12-19 20:26:43 
 * @Last Modified by: caomt
 * @Last Modified time: 2019-01-03 14:15:41
 */

const http = 'http://192.168.7.5:8081';
export default class HttpUtils {
    //  headers = {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Authorization':'',
    // }
     
    //基于 fetch 封装的 GET请求
    static get(url,data) {

        let headers = {
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json',
            'Authorization':'',
        }
        
        //获取本地的token
        let token = localStorage.getItem('myTaoAuthorization');
        headers.Authorization=token;

        return new Promise((resolve, reject) => {
            fetch(http+url,{
                method:'GET',
                headers:headers
            }).then((response) => {
                return response.json();
            }).then((result) => {
                return resolve(result)
            }).catch((error) => {
                return reject(error)
            })
    })
    }
    //基于 fetch 封装的 POST请求
    static post(url, data) {
        let headers = {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'',
        }
        //获取本地的token
        let token = localStorage.getItem('myTaoAuthorization');
        headers.Authorization=token;

        return new Promise((resolve, reject) => {
            //118.25.110.85:8098
            fetch(http+url, {
                method: 'POST',
                headers:headers,
                body: JSON.stringify(data)
            }).then((response) => {
                return response.json();
            }).then((result) => {
                return resolve(result)
            }).catch((error) => {
                return  reject(error)
            })
    })
    }
}

