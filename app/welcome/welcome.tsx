import {Hero} from '../components/Hero';
import {About} from '../components/About';
import {Projects} from '../components/Projects';
import {Contact} from '../components/Contact';
import {Skills} from '../components/Skills';
import {Education} from '../components/Education';

export function Welcome() {
  return (
    <>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Education />
    <Contact />
    </>
    
  );
}
