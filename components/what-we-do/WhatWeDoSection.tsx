// components/WhatWeDoSection.tsx
import React from 'react';
import WhatWeDoMobile from './WhatWeDoMobile';
import WhatWeDoHeader from './WhatWeDoHeader';

const WhatWeDoSection: React.FC = () => {
  return (
    <>
      <div className="md:hidden">
        <WhatWeDoMobile />
      </div>
      <div className="hidden md:block">
        <WhatWeDoHeader />
      </div>
    </>
  );
};

export default WhatWeDoSection;