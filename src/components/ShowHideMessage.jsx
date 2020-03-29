import DataComponent from "../HOC/Expandable";
// children.replace(/[a-zA-Z0-9]/g,"X")
import React from 'react';
// ** 无状态函数组件：只获取data的属性
const ShowHideMessage = ({children, collapsed, expandCollapse}) =>
    
    <p onClick={expandCollapse}>
       {(collapsed) ? children.replace(/[a-zA-Z0-9]/g,"X"):
       children}
    </p>
    
  const HideMessage = DataComponent(ShowHideMessage);
  export default HideMessage;