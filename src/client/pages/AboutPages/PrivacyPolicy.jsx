import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import styles from './style.scss';
import stylesM from '../../components/NavBar/style.scss';
import classNames from 'classnames';

export default class PrivacyPolicy extends PureComponent {
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
                        <Link className={styles.aboutMainNavbarLinks} to="/about/terms">
                          Terms of use
                        </Link>
                      </li>
                      <li>
                        <Link className={_aActive} to="/about/privacy">
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
                <h1>Privacy & Policy</h1>
                <p>
                  <strong>Update: ......</strong>
                  <br />
                  This policy describes the principles of WentOut app collecting data.
                </p>
                <h2>WentOut app collect:</h2>
                <ol>
                  <li>
                    <strong>Information and content you provide.</strong> We collect the content, communications and
                    other information you provide when you use WentOut application, including when you sign up for an
                    account, create or share content, and message or communicate with others. This can include
                    information in or about the content you provide (like metadata), such as the location of a photo or
                    the date a file was created. It can also include what you see through features we provide, such as
                    our camera, so we can do things like suggest masks and filters that you might like, or give you tips
                    on using camera formats. Our systems automatically process content and communications you and others
                    provide to analyze context and what's in them for the purposes described below. Learn more about how
                    you can control who can see the things you share.{' '}
                  </li>
                  <li>
                    <strong>Networks and connections.</strong> We collect information about the people, event pages,
                    accounts, hashtags you are connected to and how you interact with them in WentOut application, such
                    as people you communicate with the most or groups you are part of. We also collect contact
                    information if you choose to upload, sync or import it from a device (such as an address book or
                    call log or SMS log history), which we use for things like helping you and others find people you
                    may know and for the other purposes listed below.
                  </li>
                  <li>
                    <strong>Your usage.</strong> We collect information about how you use WentOut application, such as
                    the types of content you view or engage with; the features you use; the actions you take; the people
                    or accounts you interact with; and the time, frequency and duration of your activities. For example,
                    we log when you're using and have last used our Products, and what posts, videos and other content
                    you view on WentOut application. We also collect information about how you use features like our
                    camera.
                  </li>
                  <li>
                    <strong>Things others do and information they provide about you.</strong> We also receive and
                    analyze content, communications and information that other people provide when they use our
                    Products. This can include information about you, such as when others share or comment on a photo of
                    you, send a message to you, or upload, sync or import your contact information.
                  </li>
                  <li>
                    <strong>Device attributes:</strong> information such as the operating system, hardware and software
                    versions, battery level, signal strength, available storage space, browser type, app and file names
                    and types, and plugins.
                  </li>
                  <li>
                    <strong>Identifiers:</strong> unique identifiers, device IDs, and other identifiers, such as from
                    games, apps or accounts you use.
                  </li>
                  <li>
                    <strong>Device signals:</strong> Cellural and Wi-Fi signals.
                  </li>
                  <li>
                    <strong>Data from device settings:</strong> information you allow us to receive through device
                    settings you turn on, such as access to your GPS location, camera or photos.
                  </li>
                  <li>
                    <strong>Network and connections:</strong> information such as the name of your mobile operator or
                    ISP, language, time zone, mobile phone number, IP address, connection speed.
                  </li>
                  <li>
                    <strong>Cookie data:</strong> data from cookies stored on your device, including cookie IDs and
                    settings.
                  </li>
                </ol>
                <h2>How do WentOut app use this information?</h2>
                <ol>
                  <li>
                    <strong>Communicate with you.</strong> We use the information we have to send you marketing
                    communications, communicate with you about our product, and let you know about our policies and
                    terms. We also use your information to respond to you when you contact us.
                  </li>
                  <li>
                    <strong>Research and innovate for social good.</strong> We use the information we have to conduct
                    and support research and innovation on topics of technological advancement, public interest, health
                    and well-being.
                  </li>
                  <li>
                    <strong>Promote safety, integrity and security.</strong> We use the information we have to verify
                    accounts and activity, combat harmful conduct, detect and prevent spam and other bad experiences,
                    maintain the integrity of WentOut, and promote safety and security on and off of WentOut
                    application.
                  </li>
                  <li>
                    <strong>Provide, personalize and improve our Products.</strong> We use the information we have to
                    deliver our Products, including to personalize features and content (including your News Feed,
                    Instagram Feed, Instagram Stories and ads) and make suggestions for you (such as groups or events
                    you may be interested in or topics you may want to follow) on and off our Products. To create
                    personalized Products that are unique and relevant to you, we use your connections, preferences,
                    interests and activities based on the data we collect and learn from you and others (including any
                    data with special protections you choose to provide); how you use and interact with our Products;
                    and the people, places, or things you're connected to and interested in on and off our Products.
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
                <h2>How is this information shared</h2>
                <p>We do not share information</p>
                <h2>How can I manage or delete information about me?</h2>
                <p />
                <h2>How do we respond to legal requests or prevent harm</h2>
                <p>
                  We access, preserve and share your information with regulators, law enforcement or others:
                  <br />
                  In response to a legal request (like a search warrant, court order or subpoena) if we have a good
                  faith belief that the law requires us to do so. This may include responding to legal requests from
                  jurisdictions outside of the United States when we have a good-faith belief that the response is
                  required by law in that jurisdiction, affects users in that jurisdiction, and is consistent with
                  internationally recognized standards.
                  <br />
                  When we have a good-faith belief it is necessary to: detect, prevent and address fraud, unauthorized
                  use of the Products, violations of our terms or policies, or other harmful or illegal activity; to
                  protect ourselves (including our rights, property or Products), you or others, including as part of
                  investigations or regulatory inquiries; or to prevent death or imminent bodily harm. For example, if
                  relevant, we provide information to and receive information from third-party partners about the
                  reliability of your account to prevent fraud, abuse and other harmful activity on and off our
                  Products.
                  <br />
                  Information we receive about you (including financial transaction data related to purchases made with
                  Facebook) can be accessed and preserved for an extended period when it is the subject of a legal
                  request or obligation, governmental investigation, or investigations of possible violations of our
                  terms or policies, or otherwise to prevent harm. We also retain information from accounts disabled for
                  terms violations for at least a year to prevent repeat abuse or other term violations.{' '}
                </p>
                <h2>How will we notify you of changes to this policy?</h2>
                <p />
                <h2>How to contact WentOut with questions</h2>
                <p />
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
