import React, { Component } from 'react';
/** 高阶函数 */
const Expandable = (ComposedCompoent, url) => 
    class Expandable extends Component {
        constructor(props) {
            super(props);
            const collapsed = (props.hidden && props.hidden === true) ? true: false;
            this.state={
                collapsed
            }
        }
        expandCollapse = () => {
            let collapsed = !this.state.collapsed;
            this.setState({collapsed});
        }
        
        render() {
            return (
             <ComposedCompoent expandCollapse={this.expandCollapse} {...this.state} {...this.props}/>   
            )
        }

    }
 export default Expandable;