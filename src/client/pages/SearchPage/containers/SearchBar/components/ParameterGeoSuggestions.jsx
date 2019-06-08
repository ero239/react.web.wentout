import React, {PureComponent} from 'react';
import Geosuggest from 'react-geosuggest';
import onClickOutside from 'react-onclickoutside';

import style from '../style.scss';

class ParameterGeoSuggestions extends PureComponent {
  constructor(props) {
    super(props);

    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.onSuggestSelect = this.onSuggestSelect.bind(this);
  }
  handleClickOutside = (evt) => {
    this.props.onClickOut();
  };

  onSuggestSelect = (suggest) => {
    this.props.onClickOut(suggest);
  };

  render() {
    return (
      <Geosuggest
        className={style.sSearchBarParametersLineItemPortalBar}
        minLength={'2'}
        onSuggestSelect={this.onSuggestSelect}
        suggestsClassName={style.sSearchBarParametersLineItemPortalDownList}
      />
    );
  }
}

export default onClickOutside(ParameterGeoSuggestions);
