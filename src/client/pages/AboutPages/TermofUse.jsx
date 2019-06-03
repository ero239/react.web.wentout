import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import styles from './style.scss';
import stylesM from '../../components/NavBar/style.scss';
import classNames from 'classnames';

export default class TermsofUse extends PureComponent {
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
                        <Link className={styles.aboutMainNavbarLinks} to="/about/investors">
                          For Investors
                        </Link>
                      </li>
                    </ul>
                    <h2 style={{display: this.state.showAll ? 'none' : 'block'}}>Legal Information</h2>
                    <ul style={{display: this.state.showAll ? 'none' : 'block'}}>
                      <li>
                        <Link className={_aActive} to="/about/terms">
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
                <h1>Terms of Use</h1>
                <p>
                  <strong>Update: ......</strong>
                  <br />
                  By using the Wentout app and wentout.me service you are agreeing to be bound by the following terms
                  and conditions ('Terms of Use').
                </p>
                <h2>Basic Terms</h2>
                <ol>
                  <li>You must be 13 years or older to use this site and WentOut application.</li>
                  <li>You may not post nude, partially nude, or sexually suggestive photos.</li>
                  <li>You are responsible for any activity that occurs under your screen name.</li>
                  <li>You are responsible for keeping your password secure.</li>
                  <li>
                    You must not abuse, harass, threaten, impersonate or intimidate other Wentout application users.
                  </li>
                  <li>
                    You may not use the WentOut application for any illegal or unauthorized purpose. International users
                    agree to comply with all local laws regarding online conduct and acceptable content.
                  </li>
                  <li>
                    You are solely responsible for your conduct and any data, text, information, screen names, graphics,
                    photos, profiles, audio and video clips, links ('Content') that you submit, post, and display on the
                    WentOut application.
                  </li>
                  <li>
                    You must not modify, adapt or hack Wentout or modify another website so as to falsely imply that it
                    is associated with WentOut.
                  </li>
                  <li>
                    You must not access Wentout's private API by any other means other than the Wentout application
                    itself.
                  </li>
                  <li>
                    You must not crawl, scrape, or otherwise cache any content from Wentout including but not limited to
                    user profiles and photos.
                  </li>
                  <li>You must not create or submit unwanted email or comments to any Wentout members ('Spam').</li>
                  <li>You must not use web URLs in your name without prior written consent from Wentout.</li>
                  <li>You must not transmit any worms or viruses or any code of a destructive nature.</li>
                  <li>
                    You must not, in the use of Wentout application, violate any laws in your jurisdiction (including
                    but not limited to copyright laws).
                  </li>
                  <li>
                    Violation of any of these agreements will result in the termination of your WentOut account. While
                    WentOut prohibits such conduct and content on its site, you understand and agree that Instagram
                    cannot be responsible for the Content posted on its web site and you nonetheless may be exposed to
                    such materials and that you use the Instagram service at your own risk.
                  </li>
                </ol>
                <h2>General Conditions</h2>
                <ol>
                  <li>
                    We reserve the right to modify or terminate the WentOut application for any reason, without notice
                    at any time.
                  </li>
                  <li>
                    We reserve the right to alter these Terms of Use at any time. If the alterations constitute a
                    material change to the Terms of Use, we will notify you via internet mail according to the
                    preference expressed on your account. What constitutes a 'material change' will be determined at our
                    sole discretion, in good faith and using common sense and reasonable judgement.
                  </li>
                  <li>We reserve the right to refuse service to anyone for any reason at any time.</li>
                  <li>
                    We reserve the right to force forfeiture of any username that becomes inactive, violates trademark,
                    or may mislead other users.
                  </li>
                  <li>
                    We may, but have no obligation to, remove Content and accounts containing Content that we determine
                    in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, obscene or
                    otherwise objectionable or violates any party's intellectual property or these Terms of Use.
                  </li>
                  <li>
                    We reserve the right to reclaim usernames on behalf of businesses or individuals that hold legal
                    claim or trademark on those usernames.
                  </li>
                </ol>
                <h2>Proprietary Rights in Content on Instagram</h2>
                <ol>
                  <li>
                    WentOut does NOT claim ANY ownership rights in the text, files, images, photos, video, sounds,
                    musical works, works of authorship, applications, or any other materials (collectively, 'Content')
                    that you post on or through the WentOut application. By displaying or publishing ('posting') any
                    Content on or through the WentOut application, you hereby grant to Wentout a non-exclusive, fully
                    paid and royalty-free, worldwide, limited license to use, modify, delete from, add to, publicly
                    perform, publicly display, reproduce and translate such Content, including without limitation
                    distributing part or all of the Site in any media formats through any media channels, except Content
                    not shared publicly ('private') will not be distributed outside the WentOut application.
                  </li>
                  <li>
                    You represent and warrant that: (i) you own the Content posted by you on or through the WentOut
                    application or otherwise have the right to grant the license set forth in this section, (ii) the
                    posting and use of your Content on or through the WentOut application does not violate the privacy
                    rights, publicity rights, copyrights, contract rights, intellectual property rights or any other
                    rights of any person, and (iii) the posting of your Content on the Site does not result in a breach
                    of contract between you and a third party. You agree to pay for all royalties, fees, and any other
                    monies owing any person by reason of Content you post on or through the WentOut.
                  </li>
                  <li>
                    The WentOut application contain Content of WentOut ('WentOut Content'). WentOut Content is protected
                    by copyright, trademark, patent, trade secret and other laws, and Instagram owns and retains all
                    rights in the WentOut Content and the WentOut application. Wentout hereby grants you a limited,
                    revocable, nonsublicensable license to reproduce and display the Wentout Content (excluding any
                    software code) solely for your personal use in connection with viewing the Site and using the
                    Wentout application.
                  </li>
                  <li>
                    The wentOut application contain Content of Users and other WentOut licensors. Except as provided
                    within this Agreement, you may not copy, modify, translate, publish, broadcast, transmit,
                    distribute, perform, display, or sell any Content appearing on or through the WentOut Services.
                  </li>
                  <li>
                    WentOut performs technical functions necessary to offer the WentOut Services, including but not
                    limited to transcoding and/or reformatting Content to allow its use throughout the WentOut
                    application.
                  </li>
                  <li>
                    Although the WentOut site ('Site') and WentOut application are normally available, there will be
                    occasions when the Site or WentOut application will be interrupted for scheduled maintenance or
                    upgrades, for emergency repairs, or due to failure of telecommunications links and equipment that
                    are beyond the control of WentOut. Also, although WentOut application will normally only delete
                    Content that violates this Agreement, WentOut reserves the right to delete any Content for any
                    reason, without prior notice. Deleted content may be stored by WentOut in order to comply with
                    certain legal obligations and is not retrievable without a valid court order. Consequently, WentOut
                    encourages you to maintain your own backup of your Content. In other words, WentOut is not a backup
                    service. wentOut will not be liable to you for any modification, suspension, or discontinuation of
                    the WentOut application, or the loss of any Content.
                  </li>
                </ol>
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
