import React, { useEffect, useState } from "react";
import { Login } from "../../../service/user";
import styles from "../index.css";
import { connect } from "dva";
import { message } from "antd";
import { getToken ,setToken,removeToken} from "../../../utils";
const ClassTable = props => {
  const [username, setUser] = useState("");
  const [password, setPwd] = useState("");
  console.log(document.querySelector('.pas'))
  let handleuser = e => {
    const { value } = e.target;
    console.log(value);
    setUser(value);
  };
  let handlepwd = e => {
    const { value } = e.target;
    setPwd(value);
  };
  let UserLogin = async () => {
    let result = await Login({
      username: username,
      password: password
    });
    if (result.data.code === 1) {
      message.success(result.data.msg);
      props.history.replace("/allachievements");
    }
    // const params ={
    //   username,
    //   password
    // }
    // let result = await props.getUserLogin(params)
    // console.log(result)
  };

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
          <span className={styles.login}>登入</span>
          <span
            className={styles.regristry}
            onClick={() => {
              props.history.replace("/regristry");
            }}
          >
            注册
          </span>
        </div>
        <div className={styles.hopper}>
          <input
            type="text"
            placeholder="球球花"
            value={username}
            className={styles.hopperInput}
            onChange={handleuser}
            id="dx"
          />
        </div>
        <div className={styles.hopper}>
          <input
            type="text"
            placeholder="请输入你的密码"
            value={password}
            className={styles.hopperInput}
            onChange={handlepwd}
            id="pas"
          />
        </div>
        <div className={styles.Noentry}>
          <input type="checkbox" className={styles.checket} id="mdl" />
          七天免登入
        </div>
        <div className={styles.moveLogo}>
          <button className={styles.button} onClick={UserLogin}>
            登入
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  // return state.login.payload
};
const mapDispatch2Props = dispatch => {
  // return {
  //   getUserLogin(params){
  //     dispatch({type:'login/login',params})
  //   }
  // }
};
export default connect(
  mapStateToProps,
  mapDispatch2Props
)(ClassTable);
