import React from 'react';

// Use a self-contained component structure (App) for the single-file React app.
const AnimatedHero = () => {
  
  const line1 = "Transform Your Digital Presence.";
  const line2 = "Accelerate Your Growth.";
  const line1Length = line1.length;
  // Delay timing for staggering
  const LETTER_STAGGER_MS = 0.035; // 35ms delay per letter
  const LINE2_INITIAL_DELAY = 0.1 + (line1Length * LETTER_STAGGER_MS); // Start line 2 after line 1 finishes + a small break (0.1s)


  // Helper function to split text and apply staggered animation
  const renderStaggeredText = (text, initialDelay, isPrimary = false) => {
    const fragments = [];
    let currentDelay = initialDelay;
    const letterClass = isPrimary ? "text-primary-200" : "";

    text.split(' ').forEach((word, wordIndex, wordsArray) => {
      const letters = word.split('').map((char, charIndex) => {
        const delayForLetter = currentDelay;
        currentDelay += LETTER_STAGGER_MS;
        return (
          <span
            key={`letter-${wordIndex}-${charIndex}`}
            className={`inline-block animate-letter-drop ${letterClass}`}
            style={{
              animationDelay: `${delayForLetter}s`,
              opacity: 0, // Start invisible before animation
            }}
          >
            {char}
          </span>
        );
      });

      fragments.push(
        <span key={`word-${wordIndex}`} className="inline-flex">
          {letters}
        </span>
      );

      if (wordIndex < wordsArray.length - 1) {
        fragments.push(
          <React.Fragment key={`space-${wordIndex}`}>
            {' '}
          </React.Fragment>
        );
        currentDelay += LETTER_STAGGER_MS;
      }
    });

    return fragments;
  };

  return (
    // NOTE: Tailwind CSS configuration and animations are defined in the <style> block below.
    <div className="min-h-screen font-inter">
      {/* This style block is mandatory for defining custom colors and animations 
        used by Tailwind CSS in this single-file React application.
      */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
          
          @keyframes animatedGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes dropLetter {
            0% { transform: translateY(-100px); opacity: 0; }
            40% { transform: translateY(10px); opacity: 1; } /* Bounce Down */
            60% { transform: translateY(-5px); } /* Bounce Up */
            80% { transform: translateY(0); } /* Settle */
            100% { transform: translateY(0); opacity: 1; }
          }
          
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes pulseSubtle {
            0%, 100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.0); }
            50% { box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.4); }
          }

          /* New class for staggered letter animation */
          .animate-letter-drop {
            animation: dropLetter 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            color: #f5d0fe; /* Light pastel lavender for staggered letters */
          }

          /* Timings for the rest of the elements remain the same */
          .animate-slide-up-1 {
            animation: slideUp 0.8s ease-out 2.5s both; /* Delayed to start after headline */
          }
          .animate-slide-up-2 {
            animation: slideUp 0.8s ease-out 3.0s both;
          }
          .animate-slide-up-3 {
            animation: slideUp 0.8s ease-out 3.5s both;
          }

          .animate-pulse-subtle {
              animation: pulseSubtle 3s infinite ease-in-out;
          }

          .gradient-bg {
            background: linear-gradient(-45deg, #0046FF, #73C8D2, #0046FF, #FF9013);
            background-size: 400% 400%;
            animation: animatedGradient 18s ease infinite;
          }

          /* Custom utility classes */
          .heading-xl { font-size: 3.5rem; line-height: 1.1; font-weight: 800; }
          .container-custom { max-width: 1280px; margin-left: auto; margin-right: auto; padding-left: 1rem; padding-right: 1rem; }
          .text-primary-200 { color: #AED1FF; }
          .text-primary-600 { color: #0046FF; }
          .btn-primary { 
            display: inline-flex; justify-content: center; align-items: center; padding: 0.75rem 1.75rem; border-radius: 0.5rem; font-weight: 600; 
            transition: all 0.3s;
          }
          .btn-secondary { 
            display: inline-flex; justify-content: center; align-items: center; padding: 0.75rem 1.75rem; border-radius: 0.5rem; font-weight: 600; 
            border: 2px solid; 
            transition: all 0.3s;
          }

          /* Responsive adjustments */
          @media (min-width: 768px) {
            .heading-xl { font-size: 5rem; }
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="gradient-bg text-white pt-32 pb-20 relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        {/* Main Content Container */}
        <div className="container-custom relative z-10 w-full">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Headline - Letter-by-Letter Drop Animation */}
            <h1 className="heading-xl mb-6 [text-shadow:0_4px_10px_rgba(0,0,0,0.5)]">
              {renderStaggeredText(line1, 0.1, false)}
              <br />
              {renderStaggeredText(line2, LINE2_INITIAL_DELAY, true)} 
            </h1>
            
            {/* Sub-Headline - Staggered Slide Up 1 */}
            <p className="text-xl md:text-2xl mb-8 text-black leading-relaxed opacity-0 animate-slide-up-1 max-w-4xl mx-auto">
              Partner with experts who blend cutting-edge technology with data-driven marketing strategies to deliver measurable results for your business.
            </p>
            
            {/* Supporting Text - Staggered Slide Up 2 */}
            <p className="text-lg mb-10 text-gray-200 max-w-3xl mx-auto opacity-0 animate-slide-up-2">
              At Right Media Marketing, we don't just build websites and run campaigns—we architect digital ecosystems that drive revenue, engage audiences, and scale with your ambitions.
            </p>
            
            {/* Buttons - Staggered Slide Up 3 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-slide-up-3">
              {/* Primary CTA - Subtle Pulse Animation */}
              <a href="#" className="btn-primary bg-white text-primary-600 hover:bg-accent-400 hover:text-white animate-pulse-subtle">
                Get Your Free Strategy Session
              </a>
              {/* Secondary CTA */}
              <a href="#" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative Wave Element */}
        <div className="absolute bottom-0 left-0 right-0 z-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>
    </div>
  );
};

// Export the component as the default export
export default AnimatedHero;
