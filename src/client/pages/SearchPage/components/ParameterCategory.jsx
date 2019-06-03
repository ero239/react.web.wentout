import React, {PureComponent} from 'react';
import onClickOutside from 'react-onclickoutside';

import _ from 'lodash';

import classNames from 'classnames';
import style from '../style.scss';

import ParameterCategoryDropListItem from './ParameterCategoryDropListItem.jsx';

class ParameterCategory extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      _categoryDropListDisplay: false, // Выпадающий список
      _categoryListArray: [
        {
          category: 'Sport'
        },
        {
          category: 'Concert'
        },
        {
          category: 'Concert'
        },
        {
          category: 'Festival'
        },
        {
          category: 'Exhibition'
        },
        {
          category: 'Sport'
        },
        {
          category: 'Concert'
        },
        {
          category: 'Concert'
        },
        {
          category: 'Festival'
        },
        {
          category: 'Exhibition'
        }
      ],
      _categoryActiveMode: false, // Изменение состояние блока категорий
      _categoryActiveNumber: 0 // Количество выбранных категорий
    };

    this.categoryDropListDisplay = this.categoryDropListDisplay.bind(this);
    this.onCategoryisActivated = this.onCategoryisActivated.bind(this);
  }

  // Изменение состояния выпадающего списка
  categoryDropListDisplay = () => {
    this.setState({
      _categoryDropListDisplay: !this.state._categoryDropListDisplay
    });
  };
  handleClickOutside = (evt) => {
    this.setState({
      _categoryDropListDisplay: false
    });
  };

  // Вызывается при активации категории
  onCategoryisActivated = (category, index) => {
    if (!_.isNull(category)) {
      this.setState({
        _categoryActiveMode: true,
        _categoryActiveNumber: this.state._categoryActiveNumber + 1
      });
    } else {
      if (this.state._categoryActiveNumber == 1) {
        this.setState({
          _categoryActiveMode: false,
          _categoryActiveNumber: this.state._categoryActiveNumber - 1
        });
      } else {
        this.setState({
          _categoryActiveNumber: this.state._categoryActiveNumber - 1
        });
      }
    }
  };

  /* newCategoryisChosed = () => {
    this.props.
  }
 */
  render() {
    let _sSearchBarParametersLineItemWrapperActive = classNames(
      style.sSearchBarParametersLineItemWrapper,
      style.sSearchBarParametersLineItemWrapperActive
    );
    let _sSearchBarParametersLineItemImlineActive = classNames(
      style.sSearchBarParametersLineItemInline,
      style.sSearchBarParametersLineItemInlineActive
    );
    return (
      <div
        className={
          this.state._categoryActiveMode
            ? _sSearchBarParametersLineItemWrapperActive
            : style.sSearchBarParametersLineItemWrapper
        }
      >
        <div className={style.sSearchBarParametersLineItem}>
          <div
            className={
              this.state._categoryActiveMode
                ? _sSearchBarParametersLineItemImlineActive
                : style.sSearchBarParametersLineItemInline
            }
          >
            {this.state._categoryActiveNumber > 0 && <i>{this.state._categoryActiveNumber}</i>}
            <span onClick={() => this.categoryDropListDisplay()}>category</span>
            <button type="button" onClick={() => this.categoryDropListDisplay()}>
              {this.state._categoryActiveMode ? (
                <img
                  width="16"
                  height="16"
                  title=""
                  alt=""
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjAwcNOBiKWDYbAAAAaElEQVQoz2NgGATgv+T/Lf8FscoI/9/6X5SJ4QXDHYZ9/4UxpAUYdjDcYHzNwMDwn/H/hP/nUZX8F/h/+n8vgoumBE0aKtgBU/Jf4P8pDGmEEpzSUIvO/j/7vwu3lxn/t/1vHOiAxwQAuJs/ykrse+8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDMtMDdUMTI6NTY6MjQrMDE6MDAFca/gAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTAzLTA3VDEyOjU2OjI0KzAxOjAwdCwXXAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="
                />
              ) : (
                <img
                  width="15"
                  height="15"
                  title=""
                  alt=""
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAMAAAAMCGV4AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAPFBMVEUAAAAAYP8AbfAAbfAAavEAa/IAbfAAa+8AbPAAbfAAcPMAbvEAbO8AbfAAbfAAbPEAbfAAbu8AgP8AAAB5JJKQAAAAE3RSTlMACCPfJCbgH1PjKSVQ3lRJ9U8GXHMpDwAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfjAwcNNxVzcVZpAAAAQklEQVQI12NgIBUworKZmFngXFY2dgYGDk4uKJebmQdEwQSgXJgANy8PTB9IAInLwMDHzI/MBQoICKK6Qohkd0MAAKslAYB1g41YAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTAzLTA3VDEyOjU1OjIxKzAxOjAwvH47RAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMy0wN1QxMjo1NToyMSswMTowMM0jg/gAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"
                />
              )}
            </button>
          </div>
        </div>
        <div
          className={style.sSearchBarParametersLineItemDropDown}
          style={{display: this.state._categoryDropListDisplay ? 'block' : 'none'}}
        >
          <div className={style.sSearchBarParametersLineItemDropDownList}>
            {this.state._categoryListArray.map((value, index) => {
              return (
                <ParameterCategoryDropListItem
                  onCategoryActive={this.onCategoryisActivated}
                  category={value.category}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default onClickOutside(ParameterCategory);



