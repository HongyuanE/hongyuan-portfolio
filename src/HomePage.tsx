import { Link } from 'react-router-dom';
import useScrollToTop from './useScrollToTop';

const HomePage = () => {
  useScrollToTop();

  return (
    <div className="font-sans bg-white text-black w-screen overflow-x-hidden" style={{fontFamily: 'Rajdhani, sans-serif'}}>
      {/* Navigation */}
      <nav className="bg-white shadow-md w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-5xl font-bold mb-4">HONGYUAN E</h2>
            <p className="text-xl mb-6">Independent Game Developer and Producer crafting immersive experiences through various forms.</p>
            <Link to="/game-works" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">View My Work</Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="./assets/images/hongyuan-portrait.jpg" alt="Hongyuan E Portrait" className="w-64 h-64 rounded-full object-cover" />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">About Me</h3>
          <p className="mb-4">
            Film and Theatre Studies graduate from McMaster University with passion for storytelling through various mediums. 
            The exploration on more immersive storytelling led me from directing and screenwriting to the exciting world of game development.
          </p>
          <p>
            With a blend of creative vision and technical skills, I bring unique narratives to life in both film and interactive experiences.
          </p>
        </div>
      </section>

      {/* Preview Sections */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8">My Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Film Works Preview */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-16 bg-gray-200 flex items-center justify-center">
                <span className="text-4xl">🎬</span>
              </div>
              <img 
                src="./assets/images/film-works-preview.jpg" 
                alt="Film Works Preview" 
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">Film Works</h4>
                <p className="mb-4">Explore my collection of film projects, from individual short films to feature-length productions.</p>
                <Link to="/film-works" className="text-black font-semibold hover:underline">View Film Works</Link>
              </div>
            </div>
            {/* Game Works Preview */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-16 bg-gray-200 flex items-center justify-center">
                <span className="text-4xl">🎮</span>
              </div>
              <img 
                src="./assets/images/game-works-preview.jpg" 
                alt="Game Works Preview" 
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">Game Works</h4>
                <p className="mb-4">Discover my indie game projects, including completed games and works in progress.</p>
                <Link to="/game-works" className="text-black font-semibold hover:underline">View Game Works</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
          <p className="mb-6">Interested in collaboration or a coffee chat? Get in touch!</p>
          <Link to="/contact" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;