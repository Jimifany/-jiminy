import React from "react";

const ChangeDialog = props => {
  let { changeEdit, handEdit } = props;
  return (
    <div style={{ display: changeEdit ? "block" : "none" }} className="dialog">
      <div className="mask-change">
        <h2>新成绩 -- XX同学</h2>
        <div className="mask">
          <div className="mask-change-inp">
            <input type="datetime-local" placeholder="默认当前日期" />
            <label className="labelAdd">日期</label>
          </div>
          <div className="mask-change-inp">
            <label>分析:</label>
            <textarea name="" id="" cols="30" rows="4"></textarea>
          </div>
          <div className="mask-change-inp">
            <label>解决方案:</label>
            <textarea name="" id="" cols="30" rows="4"></textarea>
          </div>
          <div className="mask-change-btns">
            <button onClick={() => handEdit(false)}>取消</button>
            <button
              style={{ backgroundColor: "#1890FF" }}
              onClick={() => handEdit(true)}
            >
              确定
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeDialog;
