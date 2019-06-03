import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import styles from './style.scss';
import $ from 'jquery';

/** TODO
 *
 */
/** Notes
 *
 */

export default class NavBarEvent extends PureComponent {
  render() {
    return (
      <header id="eNavbar" className={styles.eNavbar}>
        <nav className={styles.eNavbarGrid}>
          <div className={styles.eNavbarBrandGrid}>
            <a className={styles.eNavbarBrand} href="http://wentout.me:3500" />
          </div>
          <div className={styles.eNavbarLinksGrid}>
            <Link className={styles.eNavbarLinks} to="/search">
              <div className={styles.eNavbarLinksButton}>
                Events
                <span role="img" aria-label="">
                  🎉
                </span>
              </div>
            </Link>
            <Link className={styles.eNavbarLinks} to="/search">
              <div className={styles.eNavbarLinksButton}>
                Users
                <span role="img" aria-label="">
                  😀
                </span>
              </div>
            </Link>
            <a className={styles.eNavbarLinks} href="#footer">
              <button type="button" className={styles.eNavbarLinksButton}>
                About
                <span role="img" aria-label="">
                  😎
                </span>
              </button>
            </a>
          </div>
        </nav>
      </header>
    );
  }
}

/* JQUERY */

/* var prevScrollpos = window.pageYOffset || document.documentElement.scrollTop;
$(window).on('scroll', function() {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 50) {
    if (prevScrollpos > currentScrollPos) {
      try {
        document.getElementById('eNavbar').style.top = '0';
      } catch (error) {}
    } else {
      try {
        document.getElementById('eNavbar').style.top = '-110px';
      } catch (error) {}
    }
  } else {
    try {
      document.getElementById('eNavbar').style.top = '0';
    } catch (error) {}
  }
  prevScrollpos = currentScrollPos;
}); */
