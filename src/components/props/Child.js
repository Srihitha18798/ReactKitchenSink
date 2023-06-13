import React from "react";

export default class Child extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <React.Fragment>
          <h2>In Child</h2>
          <p>Value received from Parent: {this.props.valuePassed}</p>
        </React.Fragment>
      );
    }
  }