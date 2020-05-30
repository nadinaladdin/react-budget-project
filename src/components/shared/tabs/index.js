import React from 'react';

const TabElement = ({name}) => {
    return (
        <div className="tab">
            <input className="tab__button" type="radio" id="tab-1" name="tab-group-1" checked/>
            <label className="tab__label" for="tab-1">{name}</label>
        </div>
    )
};

const Tabs = ({tabs}) => {
    const tabElements = tabs.map(tab => <TabElement name={tab.name}/>);
    return (
        <div className="tabs">
            {tabElements}
        </div>
    )
};

export default Tabs;