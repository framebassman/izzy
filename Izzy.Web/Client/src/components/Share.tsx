import React, { Component } from 'react';

interface ShareProps {
  data: URLSearchParams
}

export class Share extends Component<ShareProps, any> {
  render() {
    const {data} = this.props;
    return (
      <div>
        Hi from Share
      </div>
    )
  }
}
