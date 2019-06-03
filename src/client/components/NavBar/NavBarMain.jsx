import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import styles from './style.scss';
import $ from 'jquery';

export default class NavBarMain extends PureComponent {
  render() {
    return (
      <header id="mNavbar" className={styles.mNavbar}>
        <nav className={styles.mNavbarGrid}>
          <div className={styles.mNavbarBrandGrid}>
            <Link className={styles.mNavbarBrand} to="/" />
          </div>
          <div className={styles.mNavbarLinksGrid}>
            <a className={styles.mNavbarLinks} href="#map-container">
              <button type="button" className={styles.mNavbarLinksButton}>
                App
                <span role="img" aria-label="">
                  🕹️
                </span>
              </button>
            </a>
            <a className={styles.mNavbarLinks} href="#topevents-container">
              <button type="button" className={styles.mNavbarLinksButton}>
                Events
                <span role="img" aria-label="">
                  🎉
                </span>
              </button>
            </a>
            <a className={styles.mNavbarLinks} href="#footer">
              <button type="button" className={styles.mNavbarLinksButton}>
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
$(window).on('scroll', function() {
  if ($(window).scrollTop() && window.pageYOffset > 0) {
    $('#mNavbar').addClass('navbarScrolldown');
  } else {
    $('#mNavbar').removeClass('navbarScrolldown');
  }
});

/* var prevScrollpos = window.pageYOffset || document.documentElement.scrollTop;
$(window).on('scroll', function() {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 300) {
    if (prevScrollpos > currentScrollPos) {
      try {
        document.getElementById('mNavbar').style.top = '0';
      } catch (error) {}
    } else {
      try {
        document.getElementById('mNavbar').style.top = '-110px';
      } catch (error) {}
    }
  } else {
    try {
      document.getElementById('mNavbar').style.top = '0';
    } catch (error) {}
  }
  prevScrollpos = currentScrollPos;
}); */
