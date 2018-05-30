import React, { Component } from 'react'

class ResetRating extends Component {
    constructor(props) {
      super(props);
      this.state = {value: 0};
    }
    render() {
      return (
        <div>
          <ResetRating {...this.props} initialRating={this.state.value} />
        </div>
      );
    }
  }
  
export default ResetRating