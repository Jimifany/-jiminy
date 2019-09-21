import React, { useState, useEffect } from "react";
import styles from "../index.css";
import {connect} from "dva"
import { Regristry } from "../../../service/index";
const ClassTable = props => {
  const [username, setUser] = useState('');
  const [password, setPwd] = useState('');


  let handleuser=(e)=>{
   const {value} = e.target;
   console.log(value)
   setUser(value)
  }
  let handlepwd=(e)=>{
    const {value} = e.target;
    setPwd(value)
  }
  let UserRegister= async ()=>{
     const params ={
      username,
      password
    }
   let result = await Regristry(params
   )
   console.log(result)
    props.history.push('/login')
  }
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <span>重点学生日周考成绩录入管理系统</span>
      </div>
      <div className={styles.wraper}>
        <div className={styles.text}>
          <span>网站工程</span>
        </div>
        <div className={styles.textDark}>
          <span className={styles.regristry}>登入</span>
          <span className={styles.login}>注册</span>
        </div>
        <div className={styles.hopper}>
          <input
            type="text"
            placeholder="球球花"
            value={username}
            className={styles.hopperInput}
            onChange={handleuser}
          />
        </div>
        <div className={styles.hopper}>
          <input
            type="text"
            placeholder="请输入你的密码"
            value={password}
            className={styles.hopperInput}
            onChange={handlepwd}
          />
        </div>
        <div className={styles.moveLogo}>
          <button
            className={styles.button}
           onClick={UserRegister}
          >
            注册
          </button>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps =(state)=>{
  // return state.regristry.payload
}
const mapDispatch2Props =(dispatch)=>{
  return {
    // getUserReg(params){
    //   dispatch({type:'regristry/_regristry',payload:params})
    // }
  }
}
export default connect(mapStateToProps,mapDispatch2Props)(ClassTable);
