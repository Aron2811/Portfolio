import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
 

  function ScrollToSection() {
  const location = useLocation()

  useEffect(() => {
    const sectionId = location.pathname === '/' ? 'home' : location.pathname.slice(1)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  return null
}

 return (
    <Router>
      <Header />
      <ScrollToSection />
      <main>
        <section id="home"><Home /></section>
        <Skills />
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
    </Router>
  )
}

export default App
