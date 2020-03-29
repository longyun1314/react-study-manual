import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
/** 高阶函数 */
const DataComponent = (ComposedCompoent, url) => 
    class DataComponent extends Component {
        constructor(props) {
            super(props);
            this.state={
                data: [],
                loading: false,
                loaded: false,
            }
        }
        componentWillMount() {
            this.setState({loading: true});
            fetch(url)
                 .then(response => response.json())
                 .then(data => this.setState({
                     loaded:true,
                     loading: false,
                     data
                 }));
        }
        render() {
            return (
               <div>
                   {this.state.loading? 
                   <div>loading</div>:
                   <ComposedCompoent {...this.state} {...this.props}/>}
               </div>
            )
        }

    }
 export default DataComponent;