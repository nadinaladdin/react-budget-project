import React from 'react';
import PropTypes from 'prop-types';
import { TabType } from '../../propTypes';

const TabElement = ({
  name, value, groupName, checked, changed,
}) => (
  <div className="tab">
    <input
      className="tab__button"
      type="radio"
      id={`tab-${name}`}
      value={value}
      name={groupName}
      checked={checked}
      onChange={changed}
    />
    <label className="tab__label" htmlFor={`tab-${name}`}>{name}</label>
  </div>
);

TabElement.propTypes = {
  name: PropTypes.string.isRequired,
  groupName: PropTypes.string,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  changed: PropTypes.func.isRequired,
};

TabElement.defaultProps = {
  groupName: 'tab-group',
};

const Tabs = ({
  tabs, groupName, changed, checkedValue,
}) => {
  const tabElements = tabs.map((tab) => (
    <TabElement
      name={tab.name}
      value={tab.value}
      groupName={groupName}
      checked={checkedValue === tab.value}
      changed={changed}
    />
  ));
  return (
    <div className="tabs">
      {tabElements}
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(TabType).isRequired,
  groupName: PropTypes.string,
  changed: PropTypes.func.isRequired,
  checkedValue: PropTypes.string,
};

Tabs.defaultProps = {
  groupName: 'tab-group',
  checkedValue: null,
};

export default Tabs;
