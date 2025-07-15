import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const AnimatedText = () => {
  return (
    <div className="text-2xl font-extrabold gradient-title h-16 flex flex-col items-center justify-center leading-tight">
      <Typewriter
        words={[
          'Streamline Your Workflow',
          'Manage all Your Projects here',
        ]}
        loop={1}
        cursor
        cursorStyle="|"
        typeSpeed={50}
        deleteSpeed={0}
        delaySpeed={1000}
      />
    </div>
  );
};

export default AnimatedText;
