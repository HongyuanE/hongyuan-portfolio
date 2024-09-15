import React, { useEffect,useState } from 'react';
import { PlayCircle, Calendar, Users, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

const GameWorksPage: React.FC = () => {
  const [activeGame, setActiveGame] = useState('spaceSmasher');


    // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Effect to scroll to top when activeGame changes
  useEffect(() => {
    scrollToTop();
  }, [activeGame]);
  
  const games = {
    spaceSmasher: {
      title: "Space Smasher",
      content: () => (
        <div className="w-screen min-h-screen pt-20 pb-12 px-4">
          <div className="fixed inset-0 z-0">
            <img 
              src="/assets/images/space-smasher-wallpaper.jpg" 
              alt="Space Smasher Wallpaper" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-white">Space Smasher</h2>
            <div className="mb-8">
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/vxtrfS40fYc"
                  title="Space Smasher Gameplay"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-xl font-semibold mt-2 ml-2 text-white">
                Gameplay (sound alert)
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1 space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-video">
                    <img 
                      src={`/assets/videos/space-smasher-${i}.gif`} 
                      alt={`Space Smasher Gameplay ${i}`} 
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                ))}
              </div>
              <div className="md:col-span-2">
            <p className="text-xl mb-6 leading-relaxed text-white">
              "Space Smasher" is an arcade-style space shooter game that combines nostalgic charm with modern innovation. Created as a final project for a programming course, the game draws heavily on classic arcade elements while introducing new mechanics to keep players engaged.
            </p>
            <p className="text-xl mb-8 leading-relaxed text-white">
              Set on a physics-driven battlefield, players must defeat incoming enemies while managing the wreckage they leave behind. As enemy numbers grow, strategic use of the wreckage becomes crucial to advancing through increasingly intense waves.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-white">Key Features:</h3>
            <ul className="list-disc list-inside text-xl space-y-2 text-white mb-6">
              <li>Classic visual and audio design</li>
              <li>Physics-based mechanics and wreckage system</li>
              <li>10 types of enemy with unique mechanics</li>
              <li>Playstyle changing player upgrades</li>
              <li>Semi-randomized level with progression and local scoring system</li>
            </ul>
            <p className="text-xl text-white">This game is downloadable at:</p>
            <a 
              href="https://github.com/harrye0505/Space_Smasher/releases/tag/V1.0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xl text-blue-300 hover:text-blue-100 underline"
            >
              https://github.com/harrye0505/Space_Smasher/releases/tag/V1.0
            </a>
          </div>
        </div>
      </div>
    </div>
  )
},
    laVilleDuSouvenir: {
      title: "La Ville Du Souvenir",
      content: () => (
        <div className="w-screen min-h-screen pt-20 pb-12 px-4"> {/* Added pt-20 for nav bar space */}
          <div className="fixed inset-0 z-0"> {/* Changed to fixed positioning */}
            <img 
              src="/assets/images/la-ville-du-souvenir-wallpaper.jpg" 
              alt="La Ville Du Souvenir Wallpaper" 
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="relative z-10 w-full max-w-[80vw] mx-auto">
            <img 
              src="/assets/images/lvds-title.png" 
              alt="La Ville Du Souvenir Title" 
              className="mx-auto mb-8 max-w-3xl w-full"
            />
            <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg mb-12">
              <p className="text-lg mb-4">
                <strong>Le Ville Du Souvenir</strong> is a non-commercial visual novel created with educational intent, where players can make friends and experience a heartfelt story in a seemingly tranquil town, all while working together to unravel a larger conspiracy. The game offers around ten hours of narrative-driven gameplay and blends detective mechanics, romance simulation, and RPG-style adventure. Players take on the role of Little Deer, a young woman who arrives in a mystical town seeking refuge from her controlling yet deeply loving boyfriend. As she navigates life in this new environment, she gradually forms connections with its unique inhabitants. However, as the story progresses, Little Deer is forced to confront her own unresolved issues—especially the possessive nature of her boyfriend.
              </p>
              <p className="text-lg">
                <strong>LVDS</strong>, with its charming art style and engaging narrative, tackles profound life questions such as love, marriage, and self-awareness, offering players both entertainment and thoughtful reflection on these themes.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                { title: "Detective Game", icon: Calendar, color: "bg-blue-100" },
                { title: "Date Simulation", icon: Users, color: "bg-pink-100" },
                { title: "RPG Adventure", icon: Map, color: "bg-purple-100" }
              ].map((section, index) => (
                <div key={index} className={`${section.color} p-6 rounded-lg shadow-md`}>
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <section.icon className="mr-2" size={28} />
                    {section.title}
                  </h3>
                  <div className="space-y-4">
                    {[1, section.title === "Date Simulation" ? 4 : 2, 3].map((i) => (
                      <div key={i} className="aspect-video">
                        <img 
                          src={`/assets/images/lvds-${section.title.toLowerCase().split(' ')[0]}-${i}.jpg`} 
                          alt={`${section.title} Screenshot ${i}`} 
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-lg mt-4">
                    {section.title === "Detective Game" && "Partner with a cheerful local detective to crack a mysterious theft case in a small town. Hone your investigation and deduction skills, and eventually take the reins to lead the inquiry as the story unfolds."}
                    {section.title === "Date Simulation" && "Assist a newfound friend in practicing relationship skills and help her build a strong value system. Support her as she gathers the courage to confess her feelings... or makes another life-changing decision."}
                    {section.title === "RPG Adventure" && "When things take a bizarre turn, gear up for an RPG-style adventure. Battle various monsters and bosses in a semi-scripted, turn-based combat system with visual novel elements, and join forces with companions to unmask the mastermind behind it all."}
                  </p>
                </div>
              ))}
            </div>
            {/* The story only began */}
            <div className="mt-12 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">The story only began</h3>
              <p className="text-lg mb-6">
                Just when Little Deer thinks her troubles have ended, the real story begins. The once-friendly town takes a dark and unfamiliar turn. Little Deer must find the truth before the situation worsens, and in doing so, she will have to learn to rely on her own strength.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-video">
                    <img 
                      src={`/assets/images/lvds-more-${i}.jpg`} 
                      alt={`Further Screenshot ${i}`} 
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    ourCafe: {
      title: "Our Café",
      content: () => (
        <div className="bg-amber-100 text-gray-800 w-screen min-h-screen py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Café</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg mb-4">
                "Our Café" is a 3D simulation game currently in development, designed to feature semi-realistic customer interactions and an ever-present NPC employee who accompanies player throughout your journey. This game seeks to create an unparalleled interactive experience by blending semi-scripted content with LLM-driven dialogue, offering players a heartwarming and motivational second-life experience. It is especially crafted to help those with social difficulties build confidence in real-world communication. 
              </p>
              <p className="text-lg mb-4">
                Players step into the shoes of a recent college graduate who starts working at a charming, yet unfamiliar, café in a bustling city. As they gradually get to know the owner and local regulars, players will manage orders, run the café, and assist customers with various life or psychological challenges, forging deep bonds in the process. Together with the café owner and newfound friends, players will tackle challenges inspired by real-life situations.
              </p>
              <p className="text-lg font-semibold">
                Key features (planned):
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>A refined yet accessible coffee-making process and business simulation</li>
                <li>A cast of unique and friendly characters, each with their own personality</li>
                <li>Realistic social interactions and meaningful conversations</li>
                <li>Seasonal changes, holidays, and evolving customers that reflect the passage of time</li>
                <li>Simple, yet valuable, psychological insights to aid in personal growth</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600 italic">
                For more information please check dev logs at ........
              </p>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="font-sans" style={{fontFamily: 'Rajdhani, sans-serif'}}>
      {/* Navigation */}
      <nav className="bg-white shadow-md w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <Link to="/" className="text-xl font-bold">HONGYUAN E</Link>
            <div className="hidden md:flex space-x-4">
              <Link to="/" className="hover:text-gray-600">Home</Link>
              <Link to="/experience" className="hover:text-gray-600">Experience</Link>
              <Link to="/film-works" className="hover:text-gray-600">Film Works</Link>
              <Link to="/game-works" className="hover:text-gray-600">Game Works</Link>
              <Link to="/contact" className="hover:text-gray-600">Contact</Link>
            </div>
            <button className="md:hidden">Menu</button>
          </div>
        </div>
      </nav>

      {/* Game Content */}
      <div className="pt-16 pb-20">
        {games[activeGame as keyof typeof games].content()}
      </div>

      {/* Game Selection Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md z-50 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4 py-3">
            {Object.entries(games).map(([key, game]) => (
              <button
                key={key}
                onClick={() => setActiveGame(key)}
                className={`px-4 py-2 rounded ${activeGame === key ? 'bg-black text-white' : 'bg-gray-200'}`}
              >
                {game.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameWorksPage;