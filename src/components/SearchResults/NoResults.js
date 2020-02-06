import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  text-align: center;
  max-width: 500px;
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

function NoResults(props) {
  return (
    <Div>
      <div>
        <h3 style={{ textAlign: 'center', color: '#fff' }}>
          404 Nothing was found
        </h3>
        <Ul>
          <Li className="no-results-ul">
            try to search for a similar activity in your town
          </Li>
          <Li className="no-results-ul">
            try to search for an activity in another day or period
          </Li>
          <Li className="no-results-ul">
            if you know your connection was unstable, try again{' '}
          </Li>
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
      </div>
    </Div>
  );
}

export default withRouter(NoResults);
