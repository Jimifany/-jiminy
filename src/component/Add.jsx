import React from 'react'

const ChangeDialog = props=>{
  let {changeShow,handHide}=props;
  return (
    <div style={{display:changeShow?'block':'none'}} className="dialog">
    <div className="mask-change">
       <h2>新成绩 -- XX同学</h2>
       <div className='mask'>
       <div className="mask-change-inp"> 
          <input type="datetime-local" placeholder="默认当前日期"/><label className='labelAdd'>日期</label>
       </div>
       <div className="mask-change-inp"> 
         <label>理论:</label><input type="text" placeholder="0-100之间数字"/>
       </div>
       <div className="mask-change-inp">
         <label>技能:</label><input type="text" placeholder="0-100之间数字"/>
       </div>
       <div className="mask-change-btns"> 
         <button onClick={()=>handHide(false)}>取消</button>
         <button style={{backgroundColor:'#1890FF'}} onClick={()=>handHide(true)}>确定</button>
       </div> 
       </div>
 </div>
 </div>
  )
}

export default ChangeDialog