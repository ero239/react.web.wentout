import React, {PureComponent} from 'react';

import style from '../style.scss';

import ParameterCategory from '../components/ParameterCategory.jsx';
import ParameterDate from '../components/ParameterDate.jsx';
import ParameterGeo from '../components/ParameterGeo.jsx';
import HashTag from '../components/HashTag.jsx';

export default class SearchBar extends PureComponent {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.state = {
      _queryString: null,
      _queryCategories: null,
      _queryDate: null,
      _queryLocation: null,
      hashtags: this.props.hashtags,
      HashTagArray: [
        {
          hashtag: 'Москва'
        },
        {
          hashtag: 'ASAP'
        },
        {
          hashtag: 'Парк Горького'
        },
        {
          hashtag: 'хоккей'
        },
        {
          hashtag: 'music'
        },
        {
          hashtag: 'festival'
        },
        {
          hashtag: 'Drake'
        },
        {
          hashtag: 'Nike'
        },
        {
          hashtag: 'Полумарафон'
        },
        {
          hashtag: 'SkyGarden'
        },
        {
          hashtag: 'друзья'
        }
      ],
      HashTagArray2: [
        {
          hashtag: 'NewYork'
        },
        {
          hashtag: 'BurningMan'
        },
        {
          hashtag: 'IronMan'
        },
        {
          hashtag: 'скейтпарк'
        },
        {
          hashtag: 'Couchella'
        },
        {
          hashtag: 'TomorrowLand'
        },
        {
          hashtag: 'runningclub'
        },
        {
          hashtag: 'выставка'
        },
        {
          hashtag: 'ВанГог'
        },
        {
          hashtag: 'встреча'
        },
        {
          hashtag: 'прогулка'
        }
      ]
    };
    this.onHashtagActive = this.onHashtagActive.bind(this);
    this.handleQueryStringChanged = this.handleQueryStringChanged.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleQueryStringChanged = (event) => {
    this.setState({_queryString: event.target.value});
  };
  handleKeyPress = (event) => {
    if (event.key == 'Enter') {
      console.log('enter press here! ');
    }
  };
  onHashtagActive = (hashtag, index) => {};

  render() {
    return (
      <section className={style.sSearchBarLayout}>
        <form className={style.sSearchBarGrid}>
          <div className={style.sSearchBarGridInner}>
            <div className={style.sSearchBarInputField}>
              <div
                className={style.sSearchBarInputChoices}
                data-type="text"
                aria-haspopup="true"
                aria-expanded="false"
                dir="ltr"
              >
                <div className={style.sSearchBarInputChoicesInner}>
                  {/*  <input
                    type="text"
                    placeholder="Search"
                    tabIndex="-1"
                    style={{display: 'none'}}
                    aria-hidden="true"
                    data-choice="active"
                    value={'wef'}
                  /> */}
                  {/*  <div className={style.sSearchBarInputChoicesList}>
                    <div
                      className={style.sSearchBarInputChoicesInputItem}
                      data-item=""
                      data-id=""
                      data-value=""
                      data-deletable=""
                      aria-selected="true"
                    >
                      sdsdf
                      <button
                        className={style.sSearchBarInputChoicesInputButton}
                        type="button"
                        data-button=""
                        aria-label=""
                      >
                        Remove item
                      </button>
                    </div>
                    <div
                      className={style.sSearchBarInputChoicesInputItem}
                      data-item=""
                      data-id=""
                      data-value=""
                      data-deletable=""
                      aria-selected="true"
                    >
                      sdsdf
                      <button
                        className={style.sSearchBarInputChoicesInputButton}
                        type="button"
                        data-button=""
                        aria-label=""
                      >
                        Remove item
                      </button>
                    </div>
                    <div
                      className={style.sSearchBarInputChoicesInputItem}
                      data-item=""
                      data-id=""
                      data-value=""
                      data-deletable=""
                      aria-selected="true"
                    >
                      sdsdf
                      <button
                        className={style.sSearchBarInputChoicesInputButton}
                        type="button"
                        data-button=""
                        aria-label=""
                      >
                        Remove item
                      </button>
                    </div>
                    <div
                      className={style.sSearchBarInputChoicesInputItem}
                      data-item=""
                      data-id=""
                      data-value=""
                      data-deletable=""
                      aria-selected="true"
                    >
                      sdsdf
                      <button
                        className={style.sSearchBarInputChoicesInputButton}
                        type="button"
                        data-button=""
                        aria-label=""
                      >
                        Remove item
                      </button>
                    </div>
                    <div
                      className={style.sSearchBarInputChoicesInputItem}
                      data-item=""
                      data-id=""
                      data-value=""
                      data-deletable=""
                      aria-selected="true"
                    >
                      sdsdf
                      <button
                        className={style.sSearchBarInputChoicesInputButton}
                        type="button"
                        data-button=""
                        aria-label=""
                      >
                        Remove item
                      </button>
                    </div>
                    <div
                      className={style.sSearchBarInputChoicesInputItem}
                      data-item=""
                      data-id=""
                      data-value=""
                      data-deletable=""
                      aria-selected="true"
                    >
                      sdsdf
                      <button
                        className={style.sSearchBarInputChoicesInputButton}
                        type="button"
                        data-button=""
                        aria-label=""
                      >
                        Remove item
                      </button>
                    </div>
                    <div
                      className={style.sSearchBarInputChoicesInputItem}
                      data-item=""
                      data-id=""
                      data-value=""
                      data-deletable=""
                      aria-selected="true"
                    >
                      sdsdf
                      <button
                        className={style.sSearchBarInputChoicesInputButton}
                        type="button"
                        data-button=""
                        aria-label=""
                      >
                        Remove item
                      </button>
                    </div>
                  </div>
 */}
                  <input
                    className={style.sSearchBarInputChoicesInput}
                    type="text"
                    autocomplete="off"
                    autocapitalize="off"
                    spellcheck="false"
                    role="textbox"
                    placeholder="Search"
                    onChange={this.handleQueryStringChanged}
                    onKeyPress={this.handleKeyPress}
                    value={this.state._queryString}
                  />
                  {/* <input id="age" type="date" min="1920-01-01" max="2000-01-01" /> */}
                </div>
                <button className={style.sSearchBarInputButton} type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className={style.sSearchBarParameters}>
              <div className={style.sSearchBarParametersLine}>
                <ParameterCategory />
                <ParameterDate />
                <ParameterGeo />
              </div>
            </div>
            <div className={style.sSearchBarHashtags}>
              <div className={style.sSearchBarHashtagsLine}>
                {this.state.HashTagArray.map((item, i) => {
                  return <HashTag onHashtagActive={this.onHashtagActive} hashtag={item.hashtag} index={i} />;
                })}
              </div>
              <div className={style.sSearchBarHashtagsLine}>
                {this.state.HashTagArray2.map((item, i) => {
                  return <HashTag hashtag={item.hashtag} />;
                })}
              </div>
            </div>
          </div>
        </form>
      </section>
    );
  }
}
