"use strict";
import React from 'react';

class HelloHeader extends React.Component {

  render() {
    return <h1>{this.props.header}</h1>;
  } 
  
}
export default HelloHeader;
