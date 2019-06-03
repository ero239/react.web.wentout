import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import styles from './style.scss';
import stylesM from '../../components/NavBar/style.scss';
import classNames from 'classnames';

export default class Investors extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showAll: true
    };
    this.showAll = this.showAll.bind(this);
  }
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  showAll() {
    if (window.innerWidth < 768) {
      console.log('<');
      this.setState({showAll: !this.state.showAll});
    }
  }
  render() {
    var _aActive = classNames(styles.aboutMainNavbarLinks, styles.aboutMainNavbarLinksActive);
    return (
      <section id="company" className={styles.aboutContainer}>
        <div className={styles.aboutContainerFlex}>
          <header className={styles.aboutHeader}>
            <nav className={stylesM.mNavbarGrid}>
              <div className={stylesM.mNavbarBrandGrid}>
                <Link className={stylesM.mNavbarBrand} to="/" />
              </div>
            </nav>
          </header>
          <main className={styles.aboutMain}>
            <div className={styles.aboutMainSideFlex}>
              <div className={styles.aboutMainNavbarWrapper}>
                <nav className={styles.aboutMainNavbar}>
                  <div className={styles.aboutMainNavbarFlex} onClick={this.showAll}>
                    <h2>
                      <i className={this.state.showAll ? '' : styles.aboutMainNavbarFlexI} />
                      Information
                    </h2>
                    <ul style={{display: this.state.showAll ? 'none' : 'block'}}>
                      <li>
                        <Link className={styles.aboutMainNavbarLinks} to="/about/us">
                          Company
                        </Link>
                      </li>
                      <li>
                        <Link className={_aActive} to="/about/investors">
                          For Investors
                        </Link>
                      </li>
                    </ul>
                    <h2 style={{display: this.state.showAll ? 'none' : 'block'}}>Legal Information</h2>
                    <ul style={{display: this.state.showAll ? 'none' : 'block'}}>
                      <li>
                        <Link className={styles.aboutMainNavbarLinks} to="/about/terms">
                          Terms of use
                        </Link>
                      </li>
                      <li>
                        <Link className={styles.aboutMainNavbarLinks} to="/about/privacy">
                          Privacy & Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <div className={styles.aboutMainContentFlex}>
              <section className={styles.aboutMainContentSection}>
                <h1>For Investors</h1>
              </section>
            </div>
          </main>
          <footer className={styles.aboutFooter}>
            <p className={styles.aboutFooterCopyright}>© 2018 WentOut</p>
          </footer>
        </div>
      </section>
    );
  }
}
