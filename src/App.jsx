import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import AboutTab from './components/tabs/AboutTab';
import ResumeTab from './components/tabs/ResumeTab';
import PortfolioTab from './components/tabs/PortfolioTab';
import BlogTab from './components/tabs/BlogTab';
import ContactTab from './components/tabs/ContactTab';

function App() {
  const [activeTab, setActiveTab] = useState('About');
  const tabs = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'About': return <AboutTab key="about" />;
      case 'Resume': return <ResumeTab key="resume" />;
      case 'Portfolio': return <PortfolioTab key="portfolio" />;
      case 'Blog': return <BlogTab key="blog" />;
      case 'Contact': return <ContactTab key="contact" />;
      default: return <AboutTab key="about" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] font-sans selection:bg-[#0d9488] selection:text-white flex flex-col lg:flex-row relative">
      <Sidebar />
      
      {/* Main Content Area */}
      <main className="w-full lg:ml-[320px] p-8 md:p-16 lg:p-24 min-h-screen flex-grow">
        
        {/* Tab Navigation */}
        <nav className="flex items-center gap-8 mb-16 overflow-x-auto pb-4 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-lg md:text-xl font-bold tracking-tight whitespace-nowrap transition-colors relative pb-2 ${
                activeTab === tab ? 'text-[#0d9488]' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0d9488] rounded-full shadow-[0_0_10px_rgba(13,148,136,0.5)]"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Tab Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {renderTabContent()}
          </AnimatePresence>
        </div>

      </main>
    </div>
  );
}

export default App;
