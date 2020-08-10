import React from 'react';
import PropTypes from 'prop-types';

const TabElement = ({ name }) => (
  <div className="tab">
    <input className="tab__button" type="radio" id="tab-1" name="tab-group-1" checked />
    <label className="tab__label" htmlFor="tab-1">{name}</label>
  </div>
);

const Tabs = ({ tabs }) => {
  const tabElements = tabs.map((tab) => <TabElement name={tab.name} />);
  return (
    <div className="tabs">
      {tabElements}
    </div>
  );
};

export default Tabs;
