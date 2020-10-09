import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sprite from '../../../assets/sprite.svg';
import { firstLetterUppercaseFormatter } from '../../../utils/stringUtils';

export default class IconInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  render() {
    const {
      defaultValue, value, placeholder, changed, iconName,
    } = this.props;

    return (
      <div className="icon-input">
        <input
          className="input"
          type="text"
          ref={this.inputRef}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          onChange={(e) => changed(e.target.value)}
        />
        <div className="icon-input__button">
          <svg className="icon-input__icon"><use xlinkHref={`${sprite}#${firstLetterUppercaseFormatter(iconName)}`} /></svg>
        </div>
      </div>
    );
  }
}

IconInput.propTypes = {
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  changed: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
};

IconInput.defaultProps = {
  defaultValue: '',
  placeholder: '',
  value: '',
};
