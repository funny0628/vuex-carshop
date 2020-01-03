
import axios from 'axios'

const http = axios.create({
    baseURL : '/api',
    headers: {'content-type': 'application/x-www-form-urlencoded'}
});
 
 http.asyncdata =  ()=>{
     return http({
        method:'get',
        url:"/site/info.json",
       
    })
}
// window.console.log(http.asyncdata())
export default http;