import request from '../utils/request'
export const Login = (params)=>{
    return request.post('/emstu/teacher/login',params)
  

}
export const Regristry = (params)=>{
    return request.post('/emstu/teacher/register',params)

}
export const Userinfo = (params)=>{
    return request.get('/emstu/student/recordlists',{params})
}