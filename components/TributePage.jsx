'use client';

import React from 'react';

const TributePage = () => {
  const person = {
    name: "Amazing Person",
    tagline: "The Most Wonderful Human Ever",
    qualities: [
      {
        title: "💫 Simply Incredible",
        description: "Has the magical ability to brighten any room just by existing. Their smile could probably power a small city."
      },
      {
        title: "🌟 Kind Beyond Words",
        description: "The type of person who would give you their last cookie AND bake you a whole new batch just because."
      },
      {
        title: "🎨 Creativity Personified",
        description: "Could probably turn a paper clip and some string into a masterpiece. Their imagination knows no bounds!"
      }
    ],
    funFacts: [
      "Makes the best dad jokes in the known universe",
      "Can high-five with both hands simultaneously",
      "Has perfected the art of making everyone feel special"
    ]
  };

  return (
    <div className="min-h-screen bg-blue-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-blue-500 text-white p-8 rounded-lg mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">{person.name}</h1>
          <p className="text-xl">{person.tagline}</p>
        </div>

        <div className="grid gap-4 mb-8">
          {person.qualities.map((quality, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-2">{quality.title}</h2>
              <p>{quality.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 text-center">✨ Fun Facts ✨</h2>
          <ul className="space-y-2">
            {person.funFacts.map((fact, index) => (
              <li key={index} className="flex items-center">
                <span className="text-blue-500 mr-2">•</span>
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TributePage;