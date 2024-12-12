// components/Tabs.tsx
import { useState } from 'react';

interface Tab {
  label: string;
  content: JSX.Element;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full">
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 text-sm font-medium ${
              activeIndex === index
                ? 'border-b-2 border-green-500 text-green-600'
                : 'text-gray-500 hover:text-green-600'
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};

export default Tabs;