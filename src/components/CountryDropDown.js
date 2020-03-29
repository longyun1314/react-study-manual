import DataComponent from "../HOC/DataComponet";
import React from 'react';
// ** 无状态函数组件：只获取data的属性
const CountryNames = ({data, selected=''}) =>
    <select defaultValue={selected}>
       {data.map(({name}, i) =>
            <option key={i} value={name}>{name} </option>
       )}
   </select>
  const WrappedCountryNames = DataComponent(CountryNames, "https://restcountries.eu/rest/v1/all/");
  export default WrappedCountryNames;