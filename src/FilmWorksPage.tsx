import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollToTop from './useScrollToTop';

interface FilmProjectProps {
  title: string;
  description: string;
  role: string;
  image: string;
}

const FilmProject: React.FC<FilmProjectProps> = ({ title, description, role, image }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-96 object-cover" src={image} alt={title} />
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-600 mb-4">{expanded ? description : `${description.substring(0, 100)}...`}</p>
        <p className="mb-4"><strong>Role:</strong> {role}</p>
        <button 
          onClick={() => setExpanded(!expanded)} 
          className="text-black font-semibold hover:underline"
        >
          {expanded ? 'Show Less' : 'Learn More'}
        </button>
      </div>
    </div>
  );
};

const FilmWorksPage: React.FC = () => {
  useScrollToTop();
  
  const projects = [
    {
      title: "Welcome To My Life",
      description: "This stage play explores the intricate dynamics of conflict and reconciliation between parents and their children. Featuring a dedicated crew of around sixty members, this experimental production was meticulously planned and performed, garnering impressive attendance in most of its showings. The story centers on a teenager who, due to his parents' frequent relocations, is continually forced to adapt to new environments, resulting in conflicts with his parents and a deep sense of insecurity. As the narrative unfolds, the protagonist comes to understand, through the experiences of others, that complaints alone cannot resolve his issues. The play culminates in a poignant moment, where, after yet another heated argument, both parents and child open their hearts to one another, ultimately finding forgiveness and understanding.",
      role: "Set Manager & Assistance Stage Manager",
      image: "./assets/images/welcome-to-my-life-featured.jpg"
    },
    {
      title: "HIDDEN IN",
      description: "This fictional narrative is set in a German bunker during the final days of World War II. Created as a twenty-minute, low-budget film for a history class final project, it effectively conveys its story and anti-Nazi themes while encouraging self-awareness, earning high marks despite limited resources. The plot unfolds on the last day before Germany's surrender, inside the Führerbunker, where chaos reigns after Hitler's suicide. Many German officers, along with their families, choose to follow suit. In the midst of this turmoil, the protagonist, a spy imprisoned in the bunker, takes advantage of the chaos to escape. During his flight, he unexpectedly encounters the daughter of a German officer, just as they hear of her father’s plan to commit suicide with his family. The protagonist convinces her to escape with him, launching them on a dangerous journey. The two eventually manage to flee the bunker, only to be confronted by the pursuing officer. In a dramatic turn of events, the daughter ultimately decides to aid the protagonist, changing the course of their fate.",
      role: "Director & Editor",
      image: "./assets/images/hidden-in-main.jpg"
    },
    {
      title: "KAWAII ICE CREAM:The Commercial",
      description: "A commercial promotional video that won an inter-school competition. The video entered into a low-budget simulated commercial contest with around fifteen competing teams and successfully took first place.It centers around a fictional ice cream brand, with its unique selling point being its refreshing and energizing effect. Through three humorous stories, the video effectively reaches a diverse audience, leaving a lasting impression with its blend of simplicity and exaggeration in the storytelling. ",
      role: "Director & Editor",
      image: "./assets/images/kawaii-ice-cream-main.jpg"
    },
    {
      title: "Valuable",
      description: "A deeply meaningful short film conveying the value of filial piety. This project was created as a final assignment for a third-year creative filmmaking course, earned nearly perfect with extenrfect marks with the excellent storytelling. The narrative centers on a restless and selfish young protagonist who encounters a strange phenomenon: he wakes up repeatedly on the same day, with a message in his dreams warning him that he will lose 'the most valuable' in this day and must make amends on. The protagonist then attempts to identify and rectify what he is losing. He saves a friendship that was on the brink of collapse, rescues a relationship that was about to end, and even thwarts a robbery, saving his wallet. However, the time loop persists. One confused night, he considers seeking advice from his mother, as he used to do when he is a child, but discovers she is not at home. After contacting, he learns that she had an accident earlier that day. Upon seeing his deceased mother at the hospital, the protagonist realizes that the 'most valuable' had always been right in front of him, leading him to break down in tears. In the final loop, he decides to stay by his mother's side, helping her avoid the accident, and the time loop finally ends. The professor lauded the film, saying, 'This work beautifully conveys the Eestern cultural value of filial piety, with a narrative that is both subtle and deeply moving. It is a rare and profound piece.'",
      role: "Director & Editor",
      image: "./assets/images/valuable-main.jpg"
    },
    {
      title: "Youth Memorial",
      description: "This school-level documentary music video about graduates was brought to life by a team of around seventy people, including casts. Under the executive leadership of Hongyuan E, who coordinated the team and hired external professionals such as makeup artists, a second director, and cinematographers, the MV was produced with meticulous attention to detail. Set to the song 'Youth Memorial', the video chronicles the journey of the graduating class, beginning from their first days at school. It interweaves recreations of cherished memories and culminates in poignant graduation scenes, offering heartfelt wishes to future students. This project, the largest team Hongyuan E has ever led, took several months and numerous shoots to complete, highlighting his outstanding project management capabilities.lm that blends animation and live-action to create a surreal journey through a city's nightlife. The film explores themes of isolation and connection in the digital age.",
      role: "Executive Producer & Director",
      image: "./assets/images/youth-memorial-main.jpg"
    },

  ];

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

      {/* Page Content */}
      <div className="w-screen">
        {/* Page Header */}
        <header className="bg-gray-100 w-screen py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-2">Film Works</h2>
            <p className="text-xl">A collection of my cinematic projects and experiences</p>
          </div>
        </header>

        {/* Featured Project */}
        <section className="w-screen py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-semibold mb-8">Featured Project</h3>
            <FilmProject {...projects[0]} />
          </div>
        </section>

        {/* Film Projects Grid */}
        <section className="w-screen bg-gray-100 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-semibold mb-8">All Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.slice(1).map((project, index) => (
                <FilmProject key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-screen py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-semibold mb-8">What People Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4">"I greatly admire the extraordinary passion and energy you dedicate to your creative work. As you continue to master the necessary professional knowledge, your adept storytelling skills and creative mind will propel you to incredible heights."</p>
                <p className="font-semibold">- Actor & Professor, Peter Cockett </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4">"You have the unique advantage of drawing from both Eastern and Western creative perspectives, and you've utilized them effectively. This will be a significant strength for you in the field of creative work."</p>
                <p className="font-semibold">- Award shortlisted Playwright & Professor, Anna Chatterton </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};


export default FilmWorksPage;
