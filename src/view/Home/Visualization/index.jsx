import React, { Component,useEffect,useState} from "react";
import Discount from "../../../component/Discount";
import styles from "./index.css";
import { Switch } from "antd";
import Add from '../../../component/Add'
import Edit from '../../../component/Edit'
const EchartsTest = props => {
  let onChange = checked => {
    console.log(`switch to ${checked}`);
  };
  let [changeShow,setChangeShow]=useState(false)
  let [changeEdit,setChangeEdit]=useState(false)
  let handHide =(flag)=>{
    setChangeShow(flag)
  }
  let handAdd=()=>{
    setChangeShow(true)
  }
  let handEdit =(flag)=>{
    setChangeEdit(flag)
  }
  let programme=()=>{
    setChangeEdit(true)
  }
  return (
    <div>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.dataCid}>待批班级:</div>
          <div className={styles.grade}>1703C</div>
          <div className={styles.grade}>1704E</div>
          <div className={styles.grade}>1705F</div>
          <button className={styles.Create}>创建班级+</button>
          <div className={styles.switch}>
            <Switch defaultChecked onChange={onChange} />
          </div>
        </div>
        <div className={styles.Addto}>
          <div className={styles.addSubmit}>添加学生+:</div>
          <input type="text" placeholder="输入姓名" className={styles.ipt} />
          <input type="text" placeholder="末班次数" className={styles.ipt} />
          <input type="text" placeholder="帮扶对象" className={styles.ipt} />
          <div className={styles.addBtn}>添加</div>
        </div>
        <Discount />
        <div className={styles.bottom}>
          <span className={styles.achievement} onClick={handAdd}>添加成绩+</span>
          <span className={styles.achievement}  onClick={programme}>添加分析和解决方案</span>
        </div>
      </div>
      <Add changeShow={changeShow} handHide={handHide}></Add>
      <Edit changeEdit={changeEdit} handEdit={handEdit}></Edit>
    </div>
  );
};
export default EchartsTest;
