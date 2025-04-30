import React from 'react';

export default function Players() {
  const players = [
    {
      name: 'Virat Kohli',
      role: 'Batsman',
      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202408/rohit-sharma-131403815-1x1_0.jpg?VersionId=HqiqXF3v93KyhiUD4JWFfFsmqvBLhSo8',
      description: 'Virat Kohli is an Indian cricketer and former captain of the Indian national team. He is regarded as one of the best batsmen in the world.',
      statistics: {
        runs: 2500,
        sixes: 45,
        fours: 150,
        wickets: 0
      }
    },
    {
      name: 'Rohit Sharma',
      role: 'Batsman',
      image: 'https://im.rediff.com/cricket/2022/sep/08vk.gif',
      description: 'Rohit Sharma is known for his destructive batting style. He has made numerous records, including the highest score in a one-day international match.',
      statistics: {
        runs: 3500,
        sixes: 60,
        fours: 200,
        wickets: 0
      }
    },
    {
      name: 'Jasprit Bumrah',
      role: 'Bowler',
      image: 'https://images.augustman.com/wp-content/uploads/sites/6/2024/03/01160931/401507128_844950213991268_5311943212388641599_n.jpg',
      description: 'Jasprit Bumrah is an Indian cricketer known for his deadly yorkers and is one of the best fast bowlers in modern cricket.',
      statistics: {
        runs: 500,
        sixes: 10,
        fours: 30,
        wickets: 250
      }
    }
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Star Players</h2>
      <ul className="grid md:grid-cols-3 gap-6">
        {players.map((player, i) => (
          <li key={i} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={player.image} alt={player.name} className="w-full h-56 object-contain size-auto"/>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{player.name}</h3>
              <p className="text-gray-600 mb-2">{player.role}</p>
              <p className="text-gray-700 mb-4">{player.description}</p>
              <div className="text-sm text-gray-500">
                <p><strong>Runs:</strong> {player.statistics.runs}</p>
                <p><strong>Sixes:</strong> {player.statistics.sixes}</p>
                <p><strong>Fours:</strong> {player.statistics.fours}</p>
                <p><strong>Wickets:</strong> {player.statistics.wickets}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
