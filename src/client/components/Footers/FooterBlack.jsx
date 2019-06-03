import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import styles from './style.scss';

/** TODO
 *
 */
/** Notes
 *
 */

export default class FooterBlack extends PureComponent {
  render() {
    return (
      <footer className={styles.footer} style={{backgroundColor: 'black', color: 'white'}} id="footer">
        {/* <div className={styles.footerBrandFlex}>
          <div className={styles.footerBrand}>WentOut Project</div>
        </div> */}
        <nav className={styles.footerLinksFlex}>
          <ul className={styles.footerLinks}>
            <Link to="/about/terms" className={styles.footerLink} style={{color: 'white'}}>
              Terms of use
            </Link>
          </ul>
          <ul className={styles.footerLinks}>
            <Link to="/about/privacy" className={styles.footerLink} style={{color: 'white'}}>
              Privacy & Policy
            </Link>
          </ul>
          <ul className={styles.footerLinks}>
            <Link to="/about/us" className={styles.footerLink} style={{color: 'white'}}>
              About us
            </Link>
          </ul>
        </nav>
        <div className={styles.footerAppstoreImgFlex}>
          <div className={styles.footerAppstoreImgContainer}>
            <ul className={styles.footerAppstoreImgList}>
              <li className={styles.footerAppstoreImgListObject}>
                <a target={'_blank'} href="https://itunes.apple.com">
                  <img
                    alt="Скачать в App Store"
                    width="130px"
                    height="39px"
                    src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats/static/images/components/app-badge-app-store/Download_on_the_App_Store_Badge_RU_135x40-fac54184e6.svg"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerSocialLinksFlex}>
          <div className={styles.footerSocialLinksContainer}>
            <ul className={styles.footerSocialLinksList} style={{color: 'white'}}>
              <li className={styles.footerSocialLinksObject}>
                <a
                  target={'_blank'}
                  href="https://facebook.com"
                  className="btn-floating btn-fb footer-social-links-object-link"
                >
                  <i className="fa fa-facebook" style={{color: 'white'}} />
                </a>
              </li>
              <li className={styles.footerSocialLinksObject}>
                <a
                  target={'_blank'}
                  href="https://twitter.com"
                  className="btn-floating btn-tw footer-social-links-object-link"
                >
                  <i className="fa fa-twitter" style={{color: 'white'}} />
                </a>
              </li>
              <li className={styles.footerSocialLinksObject}>
                <a
                  target={'_blank'}
                  href="https://google.com"
                  className="btn-floating btn-gplus footer-social-links-object-link"
                >
                  <i className="fa fa-google-plus" style={{color: 'white'}} />
                </a>
              </li>
              <li className={styles.footerSocialLinksObject}>
                <a
                  target={'_blank'}
                  href="https://www.linkedin.com"
                  className="btn-floating btn-li footer-social-links-object-link"
                >
                  <i className="fa fa-linkedin" style={{color: 'white'}} />
                </a>
              </li>
              <li className={styles.footerSocialLinksObject}>
                <a
                  target={'_blank'}
                  href="https://www.instagram.com"
                  className="btn-floating btn-instagram footer-social-links-object-link"
                >
                  <i className="fa fa-instagram" style={{color: 'white'}} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerCopyrightFlex}>
          <div className={styles.footerCopyrightContainer}>
            <div className={styles.footerCopyright}>© 2018 WentOut LTD.</div>
          </div>
        </div>
      </footer>
    );
  }
}
