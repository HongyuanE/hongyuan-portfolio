import React from 'react';
import { Link } from 'react-router-dom';

const ExperiencePage = () => {
  return (
    <div className="font-sans bg-white text-black w-screen overflow-x-hidden" style={{fontFamily: 'Rajdhani, sans-serif'}}>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold mb-12">Experience & Skills</h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Timeline Section */}
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-8">Professional Timeline</h3>
            <div className="space-y-12">
              {/* Timeline Item: Our Café */}
              <div className="flex">
                <div className="w-24 text-right mr-4">
                  <span className="font-semibold">2024 - 2025</span>
                </div>
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-2">Indie Game Developer</h4>
                  <p>Developing "Our Café" (working title), an indie game for commercial purposes (Work in Progress)</p>
                </div>
              </div>
              {/* Timeline Item: Le Ville Du Souvenir */}
              <div className="flex">
                <div className="w-24 text-right mr-4">
                  <span className="font-semibold">2023 - 2024</span>
                </div>
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-2">Individual Game Developer</h4>
                  <p>Developed "Le Ville Du Souvenir", a game project focused on skill training and development</p>
                </div>
              </div>
              {/* Timeline Item: Welcome to My Life */}
              <div className="flex">
                <div className="w-24 text-right mr-4">
                  <span className="font-semibold">Jan - Jun 2023</span>
                </div>
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-2">Project Management - "Welcome to My Life"</h4>
                  <p>Responsible for department liaison, logistics, and props team management</p>
                </div>
              </div>
              {/* Timeline Item: McMaster University */}
              <div className="flex">
                <div className="w-24 text-right mr-4">
                  <span className="font-semibold">2019 - 2023</span>
                </div>
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-2">McMaster University</h4>
                  <p>Major in Theatre and Film Studies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="md:w-1/3">
            <h3 className="text-2xl font-semibold mb-8">My Skills</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-4">
                <li>
                  <span className="font-semibold">Python:</span> 5+ years
                </li>
                <li>
                  <span className="font-semibold">Game Development:</span> 2+ years
                </li>
                <li>
                  <span className="font-semibold">Music Composing:</span> 5+ years
                </li>
                <li>
                  <span className="font-semibold">Scriptwriting</span>
                </li>
                <li>
                  <span className="font-semibold">Stage Production</span>
                </li>
                <li>
                  <span className="font-semibold">Film Production</span>
                </li>
                <li>
                  <span className="font-semibold">Leadership and Project Management</span>
                </li>
                <li>
                  <span className="font-semibold">Bilingual:</span> English and Mandarin
                </li>
                <li>
                  <span className="font-semibold">Creativity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;