import React, { useEffect, useState } from "react";
import styles from "./index.css";
import Delete from '../../../component/delete'
import Complier from '../../../component/compiler'
import './index.css'
import {connect} from 'dva'
import {Userinfo} from '../../../service/index'
import {getToken} from '../../../utils/index'
const list = [
  {
    id: 1,
    date: "日期",
    theory: "理论",
    skill: "技能",
    analysis: "分析和解决",
    judge: "是否周考",
    operation: "操作"
  },
  {
    id: 2,
    date: "11-03-201",
    theory: "56",
    skill: "Success",
    analysis:
      "对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看见割发代首撒的风格和减肥的撒的风格和",
    judge: "是",
    operation: "编辑",
    delete:'删除'
  },
  {
    id: 3,
    date: "11-03-201",
    theory: "56",
    skill: "Success",
    analysis:
      "对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看见割发代首撒的风格和减肥的撒的风格和",
    judge: "是",
    operation: "编辑",
    delete:'删除'
  },
  {
    id: 4,
    date: "11-03-201",
    theory: "56",
    skill: "Success",
    analysis:
      "对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看见割发代首撒的风格和减肥的撒的风格和",
    judge: "是",
    operation: "编辑",
    delete:'删除'
  }
];
const HomePage = props => {
  //获取学生列表
  useEffect( ()=>{
      
  })
   //删除弹框的显示
 let [deleteShow,setDeleteShow]=useState(false)
 //编辑弹框的显示
 let [changeShow,setChangeShow]=useState(false)
 let handClick =async ()=>{
  const result = await Userinfo({
    "cid":"1234"
  })
  console.log(result)
      setChangeShow(true)
  }

  let handDelete=()=>{
    setDeleteShow(true)
  }
  //设置回调函数用来控制弹出框的显示隐藏
  let handHide =(flag)=>{
    setChangeShow(flag)
  }
  let handDeleteHide =(flag)=>{
    setDeleteShow(flag)
  }
  console.log(getToken())
  return (
    <div className={styles.con}>
      {/* this is homepage */}
      <div className={styles.head}>
        <p>xx学生日周考试成绩统计表</p>
      </div>
      <div className={styles.center}>
        <div className={styles.top}>
          <p className={styles.tea}>讲师：XXX</p>
          <p className={styles.tea}>学生：XXX</p>
          <input type="text" placeholder="快速选择其他学生" />
        </div>
        <table border="1">
          <tbody>
             {list.map((item,index)=><tr key={index}>
                 <td>{item.id}</td>
                 <td>{item.date}</td>
                 <td>{item.theory}</td>
                 <td>{item.skill}</td>
                 <td>{item.analysis}</td>
                 <td>{item.judge}</td>
                 <td><span onClick={handClick}>{item.operation}</span> | <span onClick={handDelete}>{item.delete}</span></td>
             </tr>)}
          </tbody>
        </table>
      </div>
      <Delete deleteShow={deleteShow} handDeleteHide={handDeleteHide}/>
      <Complier changeShow={changeShow} handHide={handHide}/>
    </div>
  );
};
const mapStateToprops = (state)=>{
  // console.log(state.userInfo)
  // return state.userInfo
}
const mapDispatch2props = (dispatch)=>{
  return {
    // getUserinfo(){
    //   dispatch({type:'/userInfo/userinfo',})
    // }
  }
}
export default connect(mapStateToprops,mapDispatch2props)(HomePage)
