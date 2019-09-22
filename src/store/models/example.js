import {Userinfo} from '../../service/index'
export default {
  namespace: 'userInfo',
  state: {
    userInfo:{},
  },
  effects: {
    *userInfo({ payload }, { call, put }) {
      console.log(payload)
      const result = yield call(Userinfo,payload)
      console.log(result)
      yield put({ type: 'userinfo', payload: result.data.result})
    },
    // *regristry({payload},{call,put}){
    //   const result = yield call(Register,payload)
    //   yield put({type:'_regristry',payload:result.data})

    // }
  },
  reducers: {
    userinfo(state,action) {
      return {...state,userInfo:{...action.payload}}
    },
    // _regristry(state,payload){
    //   return {...state,userReg:{...payload}}
    // }
  }
}
