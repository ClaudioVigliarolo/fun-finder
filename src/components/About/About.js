import React, { Component } from 'react';

class MainSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-left">
              <div className="section-title mb-5"></div>
            </div>
          </div>
          <section>
            <div className="row">
              <div className="col-lg-6">
                {/*disco photo */}
                <img
                  src={require('../../images/disco.jpg')}
                  alt="Image"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-6 pl-md-5">
                <div className="text-about">
                  <h3 className="header-about">Who am I?</h3>
                </div>
                <p className="text-p-about">
                  I am a developer,
                  <br />
                  with a passion for languages,
                  <br />
                  who also loves coding,
                  <br />
                  and, last but not the least,{' '}
                </p>

                <p
                  className="header-animate-about"
                  style={{
                    fontWeight: 'bold',
                    fontSize: 30,
                    marginTop: -10,
                    textAlign: 'center'
                  }}
                >
                  loves joining crazy events!
                </p>
              </div>
            </div>
          </section>

          {/*second */}

          <section className="section-about">
            <div className="row">
              <div className="col-lg-6 pl-md-5">
                <div className="text-about">
                  <h3 className="header-about">Follow me</h3>
                </div>
                <p
                  className="text-p-about"
                  style={{ margin: 20, marginTop: 0 }}
                >
                  {' '}
                  I always have cool projects going on! If you don't want to
                  miss any of these, better follow me on Instagram to really be
                  the first to know about it !
                </p>
                <img
                  src={require('../../images/instagram.svg')}
                  style={{
                    width: 50,
                    height: 50,
                    cursor: 'pointer',
                    marginBottom: 30
                  }}
                  onClick={() =>
                    window.open(
                      'http://Instagram.com/claudio.vigliarolo',
                      '_blank'
                    )
                  }
                />
              </div>
              <div className="col-lg-6">
                {/*disco photo */}
                <img
                  src={require('../../images/disco.jpg')}
                  alt="Image"
                  className="img-fluid"
                />
              </div>
            </div>
          </section>

          <section className="section-about">
            <h3 className="header-about">Contact me</h3>

            <p className="text-p-about">
              {' '}
              You like this site, you noticed some issues or maybe you have some
              suggestions? Send me an email at
            </p>
            <p className="text-p-about" style={{ fontStyle: 'italic' }}>
              {' '}
              claudio.vigliarolo.dev@gmail.com
            </p>
            <p className="text-p-about">
              I will be happy to respond to any of your questions or ideas!
            </p>
          </section>
        </div>
      </div>
    );
  }
}

export default MainSearch;
