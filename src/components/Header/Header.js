import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'linear-gradient( transparent , transparent);',
      menu: false
    };
  }

  componentDidMount() {
    if (this.props.active) {
      window.addEventListener('scroll', this.listenScrollEvent);
    } else {
      this.setState({ color: 'linear-gradient( #7b4397 , #dc2430);' });
    }
  }

  listenScrollEvent = e => {
    if (window.scrollY > window.innerHeight) {
      this.setState({ color: 'linear-gradient( #7b4397 , #dc2430);' });
    } else {
      this.setState({ color: 'linear-gradient( transparent , transparent);' });
    }
  };

  closeMenu = () => this.setState({ menu: false });

  navBack = () => this.props.history.goBack();

  navTo = dest => this.props.history.push('/about');

  render() {
    const Background = styled.div`
          background-image:${props => props.color}
          opacity:0.8;
          transition: background-color 200ms linear;
          @media (max-width: 800px) {
          background-image:linear-gradient( #7b4397 , #dc2430);   
          }
        `;

    return (
      <React.Fragment>
        <Background className="fixed" color={this.state.color}>
          <div className="container-fluid ">
            <div className="row">
              <div className="col-md-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <h2 onClick={this.navBack} className="navbar-brand" href="">
                    {this.props.title}
                  </h2>

                  <button
                    onClick={() => this.setState({ menu: !this.state.menu })}
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <div>
                      <img
                        style={{ width: 40, height: 40 }}
                        src={require('../../images/menuIcon.svg')}
                      />
                    </div>
                  </button>

                  <div
                    style={{ display: this.state.menu ? 'visible' : 'hidden' }}
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNavDropdown"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <a
                          onClick={this.closeMenu}
                          className="nav-link"
                          href="#music"
                        >
                          Music
                        </a>
                      </li>
                      <li className="nav-item active">
                        <a
                          onClick={this.closeMenu}
                          className="nav-link"
                          href="#reviews"
                        >
                          Reviews
                        </a>
                      </li>

                      <li className="nav-item active">
                        <a
                          onClick={() => this.navTo('about')}
                          className="nav-link"
                          href="#"
                        >
                          About
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </Background>
      </React.Fragment>
    );
  }
}
export default withRouter(Header);
