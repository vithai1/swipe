import React, { useState } from 'react';
import { MinimizedCard } from '../components/MinimizedCard';
import { ExpandedCard } from '../components/ExpandedCard';
const PopUp: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return isExpanded ? (
    <ExpandedCard />
  ) : (
    <MinimizedCard onExpand={() => setIsExpanded(true)} />
  );  
};

export default PopUp;
