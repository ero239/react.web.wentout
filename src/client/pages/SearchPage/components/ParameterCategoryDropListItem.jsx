import React, {PureComponent} from 'react';

import style from '../style.scss';

export default class DropListItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      _active: false
    };
    this.activateCurrentCategory = this.activateCurrentCategory.bind(this);
  }

  //  Активирование категории и передача в Parent (ParameterCategory) данных
  activateCurrentCategory = (category, index) => {
    if (!this.state._active) {
      this.props.onCategoryActive(category, index);
    } else {
      this.props.onCategoryActive(null, null);
    }
    this.setState({
      _active: !this.state._active
    });
  };

  render() {
    return (
      <div
        className={style.sSearchBarParametersLineItemDropDownListItem}
        onClick={() => {
          this.activateCurrentCategory(this.props.category, this.props.index);
        }}
      >
        {this.state._active ? <i /> : ''}
        <span>{this.props.category}</span>
      </div>
    );
  }
}
