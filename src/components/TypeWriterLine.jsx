import { Typewriter } from 'react-simple-typewriter';

const TypewriterLine = () => {
  return (
    <div className="text-center text-lg pb-20 text-white gradient-title">
      <Typewriter
        words={[
          'Navigate yourself to success with ProjectPilot — plan smarter, collaborate better, and deliver faster.'
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={30}
        deleteSpeed={0}
        delaySpeed={100000}
      />
    </div>
  );
};

export default TypewriterLine;
