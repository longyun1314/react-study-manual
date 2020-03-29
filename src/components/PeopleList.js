import DataComponent from "../HOC/DataComponet";
import React, { Component } from 'react';
// 类形式
// class PeopleList extends Component {
//     render() {
//         let {data} = this.props;
//         return (
//         <ol>
//             {data.results.map((person, i) => {
//             const {first, last} =person.name;
//             return <li key={i}>{first} {last} </li>
//             })}
//         </ol>
//         );
//     }
// }
// ** 无状态函数组件：只获取data的属性
const PeopleList = ({data}) =>
    <ol>
       {data.results.map((person, i) => {
           const {first, last} =person.name;
           return <li key={i}>{first} {last} </li>
       })}
   </ol>
// 无状态函数组件： 获取全部属性，箭头函数写{}要有return
// const PeopleList = (props) => {
//     let {data, loaded, loading} =props;
//     return (
//             <ol>
//                {data.results.map((person, i) => {
//                    const {first, last} =person.name;
//                    return <li key={i}>{first} {last} </li>
//                })}
//            </ol>
//             )
// }

  const RondomMeUsers = DataComponent(PeopleList, "https://randomuser.me/api/");
  export default RondomMeUsers;