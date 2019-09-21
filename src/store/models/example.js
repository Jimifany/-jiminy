import { Login, Register } from '../../service/index'
import { message} from "antd"
export default {
  namespace: 'login',
  state: {
    sessionId: '',
    userInfo:{},
    UserReg:{}
  },
  effects: {
    // *login({ payload }, { call, put }) {
    //   const result = yield call(Login,payload)
    //   yield put({ type: '_login', payload: result.data})
    // },
    // *regristry({payload},{call,put}){
    //   const result = yield call(Register,payload)
    //   yield put({type:'_regristry',payload:result.data})

    // }
  },
  reducers: {
    // _login(state, payload) {
    //   return {...state,userInfo:{...payload}}
    // },
    // _regristry(state,payload){
    //   return {...state,userReg:{...payload}}
    // }
  }
}
