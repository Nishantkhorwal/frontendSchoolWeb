import React from 'react';

const QuotesGrid = ({ fadeColors, quotes, imageUrls }) => {
  return (
    <div className="container mx-auto p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-2 gap-y-2">
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            className="relative w-full h-40 bg-cover bg-center cursor-pointer font-semibold font-signika"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div className="absolute inset-0 flex items-center justify-center font-semibold font-signika"
                 style={{ backgroundColor: fadeColors[index % fadeColors.length], opacity: 0, transition: 'opacity 0.5s' }}
                 onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                 onMouseLeave={(e) => e.currentTarget.style.opacity = 0}>
              <p className="text-white text-center px-3 font-semibold font-signika">{quotes[index % quotes.length]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuotesGrid;

