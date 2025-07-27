import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const AnimatedText = () => {
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold gradient-title min-h-[3.5rem] sm:min-h-[4rem] flex flex-col items-center justify-center text-center px-2 leading-snug">
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
