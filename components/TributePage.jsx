import React from 'react';

const TributePage = () => {
  // Customize these values
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
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      {/* Banner Section */}
      <div className="relative h-64 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative text-center">
          <h1 className="text-4xl font-bold mb-4">{person.name}</h1>
          <p className="text-xl italic">{person.tagline}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-8">
        {/* Qualities Section */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {person.qualities.map((quality, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-bold mb-3">{quality.title}</h2>
              <p className="text-gray-700">{quality.description}</p>
            </div>
          ))}
        </div>

        {/* Fun Facts Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">✨ Fun Facts ✨</h2>
          <ul className="space-y-4">
            {person.funFacts.map((fact, index) => (
              <li key={index} className="flex items-center">
                <span className="text-purple-500 mr-2">•</span>
                <span className="text-gray-700">{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TributePage;