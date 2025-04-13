
import React from 'react';

const PortfolioNav = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) => {
  const tabs = [
    { id: 'mobile', label: 'Mobile App' },
    { id: 'website', label: 'Website' },
    { id: 'desktop', label: 'Desktop' },
    { id: 'other', label: 'Other Projects' }
  ];
  
  return (
    <div className="flex justify-center gap-6 mb-16 mt-4">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`py-2 px-4 font-medium transition-colors ${
            activeTab === tab.id ? 'text-white border-b-2 border-theme-highlight' : 'text-white/60 hover:text-white'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default PortfolioNav;
