import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

const Div = styled.div`
  position: fixed;
  left: 50%;
  top: 20%;
  min-width: 350px;
  transform: translate(-50%, 0);
`;

const Ul = styled.ul`
  color: #fff;
  margin-top: 50px;
  margin-bottom: 50px;
  display: inline-block;
  text-align: left;
`;

const Li = styled.li`
  text-align: left;
  color: #fff;
`;

const ErrorResults = props => {
  return (
    <Div>
      <h3 style={{ textAlign: 'center', color: '#fff' }}>
        500 Something went wrong
      </h3>
      <Ul>
        <Li className="no-results-ul">
          If you know your connection was unstable, try again
        </Li>
        <Li className="no-results-ul">Our Api might didn't work properly</Li>
      </Ul>
      <button
        type="submit"
        className="btn-form center-button"
        onClick={props.goBack}
      >
        <span
          style={{ textAlign: 'center' }}
          className="icon-magnifier search-icon"
        />
        GO BACK
        <i className="pe-7s-angle-right" />
      </button>
    </Div>
  );
};

export default withRouter(ErrorResults);
