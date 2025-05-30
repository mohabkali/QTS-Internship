import React from 'react';
import { HashRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function Home() { return <h2>Home</h2>; }
function About() { return <h2>About</h2>; }
function TopicDetail() {
  let { topicId } = useParams(); // Typed useParams
  return <h3>Requested topic ID: {topicId}</h3>;
}
function ContactUs() { return <h2>Contact Us</h2>; }

function AppRouterExample() {
  return (
    <HashRouter>
      <div>
        <nav>
          <ul className="flex space-x-4 p-2 bg-gray-200">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics/react">React Topic</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
          </ul>
        </nav>

        <div className="p-4">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/topics/:topicId" element={<TopicDetail />} /> {/* Dynamic segment */}
            <Route path="/" element={<Home />} />
            <Route path="/contactus" element={<ContactUs />}/>
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

// To use this, render <AppRouterExample /> in your main app.

   export default AppRouterExample;