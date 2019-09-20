import React, { Component } from 'react'
import styles from "./home.css"

class HomePage extends Component {
    render() {
        return <div className={styles.con}>
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
                <tr>
                    <td>序号</td>
                    <td>日期</td>
                    <td>理论</td>
                    <td>技能</td>
                    <td>分析和解决</td>
                    <td>是否周考</td>
                    <td>操作</td>
                    {/* <td>row 1, cell 2</td> */}
                </tr>
                <tr>
                    <td> 1</td>
                    <td>11-03-2017</td>
                    <td>56</td>
                    <td>Success</td>
                    <td>对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看见割发代首撒的风格和减肥的撒的风格和</td>
                    <td>是</td>
                    <td>编辑,删除</td>
                </tr>
                <tr>
                <td> 1</td>
                    <td>11-03-2017</td>
                    <td>56</td>
                    <td>Success</td>
                    <td>对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看见割发代首撒的风格和减肥的撒的风格和</td>
                    <td>是</td>
                    <td>编辑,删除</td>
                </tr>
                <tr>
                <td> 1</td>
                    <td>11-03-2017</td>
                    <td>56</td>
                    <td>Success</td>
                    <td>对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看见割发代首撒的风格和减肥的撒的风格和</td>
                    <td>是</td>
                    <td>编辑,删除</td>
                </tr>
                <tr>
                <td> 1</td>
                    <td>11-03-2017</td>
                    <td>56</td>
                    <td>Success</td>
                    <td>对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看见割发代首撒的风格和减肥的撒的风格和</td>
                    <td>是</td>
                    <td>编辑,删除</td>
                </tr>
                </tbody>
            </table>
            {/* <div className={styles.edtor}>
<div className={styles.left}>
    <p style={{margin:'10px 25px',display:'flex'}}><span style={{fontWeight:'bolder'}}>编辑内容</span><span style={{marginLeft:'210px'}}>X</span></p>
    <ul>
        <li><span style={{padding:'0 10px'}}>理论：</span><input type="text" placeholder="0-100之间数字" style={{border:'1px solid #cccc',textAlign:'center'}}/></li>
        <li><span style={{padding:'0 10px'}}>技能：</span><input type="text" placeholder="0-100之间数字" style={{border:'1px solid #cccc',textAlign:'center'}}/></li>
        <li><button style={{border:'rgb(0, 118, 255) 1px solid',marginLeft:'65px'}}><input type="checkbox"/>日考</button><button style={{border:'rgb(0, 118, 255) 1px solid',margin:'0 20px'}}><input type="checkbox"/>周考</button></li>
        <li></li>
    </ul>
</div>
<div className={styles.right}></div>
            </div> */}
            </div>
        </div>
    }
}

export default HomePage;