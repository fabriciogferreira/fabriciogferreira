import Nav from "@/components/Nav";
import Header from "@/app/_components/Header";

import HeroSection from "@/app/_components/HeroSection";
import Skills from "@/app/_components/Skills";
import Jobs from "@/app/_components/Jobs";
import Contact from "@/app/_components/Contact";
import Articles from "@/app/_components/Articles";
import BooksRead from "@/app/_components/BooksRead";
import Testimonials from "@/app/_components/Testimonials";
import AboutMe from "@/app/_components/AboutMe";
import Downloads from "@/app/_components/Donwloads";
import Projects from "@/app/_components/Projects";
import Education from "@/app/_components/Education";
import Statistics from "@/app/_components/Statistics";

import SwitchTheme from "@/components/SwitchTheme";

export default function Home() {
  return (
    <>
      <Header />
      <aside className="hidden sm:flex fixed top-0 right-0 h-full flex-col justify-center">
        <Nav listClass="flex-col"/>
        <SwitchTheme />
      </aside>
      <main>
        <HeroSection />
        <Skills />
        <Statistics />
        <Jobs />
        <Education />
        <Projects />
        <Downloads />
        <Contact />
        <Testimonials />
        <BooksRead />
        <Articles />
        <AboutMe />
      </main>
      <footer className="flex justify-around">
        <div className="flex gap-2">
          <p>
            Nome/Marca
          </p>
          <p>
            Direito autorais
          </p>
        </div>

        <div>
          <p>
            Develop by
          </p>
          <ul className="flex">
            <li>Social </li>
            <li>Social </li>
            <li>Social </li>
            <li>Social </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
