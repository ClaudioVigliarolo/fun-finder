import React from 'react';
import { css } from '@emotion/core';

// Another way to import. This is recommended to reduce bundle size
import ClipLoader from 'react-spinners/ClipLoader';

// Can be a string as well. Need to ensure each key-value pair ends with ;

export default class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  render() {
    return (
      <div className="fixed-center">
        <div className="flex-center">
          <div className="sweet-loading">
            <ClipLoader
              css={{ borderColor: 'red' }}
              sizeUnit={'px'}
              size={150}
              color={'#123abc'}
              loading={this.state.loading}
            />
          </div>
        </div>
      </div>
    );
  }
}
