import React, { createContext, useContext, useState } from 'react';

const TabContext = createContext();

export const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <TabContext.Provider value={{ activeTab, setActiveTab }}>
            <nav className="tabs-container">{children}</nav>
        </TabContext.Provider>
    );
};

export const Tab = ({ index, children }) => {
    const { activeTab, setActiveTab } = useContext(TabContext);
    const isActive = index === activeTab;
    return (
        <div onClick={() => setActiveTab(index)} className={isActive ? 'tab active-tab' : 'tab'}>
             {children}
        </div>
    );
};

export const TabContent = ({ index, children }) => {
    const { activeTab } = useContext(TabContext);
    return activeTab === index ? <section className="tab-content">{children}</section> : null;
};

