import React, { useState } from "react";
import { motion } from "framer-motion";

interface Tab {
  label: String;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="flex border-b relative">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`relative px-4 py-2 text-sm font-medium cursor-pointer transition-colors ${
              activeTab === index
                ? "text-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            {tab.label}
            {activeTab === index && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 -bottom-[1px] bg-blue-600 rounded-full"
              />
            )}
          </button>
        ))}
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="mt-4 p-4 bg-white border rounded-xl shadow-md text-gray-700"
      >
        {tabs[activeTab].content}
      </motion.div>
    </div>
  );
};

export default Tabs;
