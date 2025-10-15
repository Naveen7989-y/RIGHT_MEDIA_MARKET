import React from 'react';

const AutoScrollCarousel = ({
  items,
  renderItem,
  speed = 'medium',
  gap = 'gap-6',
  className = '',
  duplicate = 2,
  direction = 'left',
}) => {
  const speedClassMap = {
    slow: 'animate-carousel-slow',
    medium: 'animate-carousel',
    fast: 'animate-carousel-fast',
  };

  const baseAnimation = speedClassMap[speed] ?? speedClassMap.medium;
  const animationDirection = direction === 'right' ? 'reverse' : 'normal';

  const repeats = Math.max(duplicate, 2);
  const duplicatedItems = Array.from({ length: repeats }, (_, repeatIndex) =>
    items.map((item, itemIndex) => ({
      item,
      key: `${repeatIndex}-${item.id ?? itemIndex}`,
      index: itemIndex,
    }))
  ).flat();

  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface via-[rgba(245,243,255,0.75)] to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface via-[rgba(245,243,255,0.75)] to-transparent"
        aria-hidden="true"
      />
      <div
        className={`carousel-track flex ${gap} w-max ${baseAnimation} group-hover:[animation-play-state:paused] will-change-[transform]`}
        style={{
          animationDirection,
        }}
      >
        {duplicatedItems.map(({ item, key, index }) => (
          <div key={key} className="shrink-0">
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoScrollCarousel;