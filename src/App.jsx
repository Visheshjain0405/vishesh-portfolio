import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectsPage from './pages/ProjectsPage';
import './App.css';

const HomePage = () => (
    <>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </>
);

function App() {
    return (
        <BrowserRouter>
            {/* One place for smooth scrolling, #section links and scroll-to-top on route change */}
            <SmoothScroll>
                <ScrollProgress />
                <div className="min-h-screen bg-background text-textMain">
                    <Navbar />
                    <main>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/projects" element={<ProjectsPage />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </SmoothScroll>
        </BrowserRouter>
    );
}

export default App;