import Nav from "@/components/Nav";

import HeroSection from "@/app/_components/HeroSection";
import Skills from "@/app/_components/Skills";
import Jobs from "@/app/_components/Jobs";
import Contact from "@/app/_components/Contact";
import Articles from "@/app/_components/Articles";
import BooksRead from "@/app/_components/BooksRead";
import Testimonials from "@/app/_components/Testimonials";
import SwitchTheme from "@/components/SwitchTheme";
import AboutMe from "@/app/_components/AboutMe";
import Downloads from "@/app/_components/Donwloads";
import Projects from "@/app/_components/Projects";
import Education from "@/app/_components/Education";
import Statistics from "@/app/_components/Statistics";

export default function Home() {
  return (
    <>
      <header className="sm:hidden fixed w-full h-screen justify-between">
        <Nav listClass="flex-col" itemClass="text-[4.5vh]"/>
        <div className="flex justify-around items-center">
          <SwitchTheme/>
          <div>
            Change Language
          </div>
        </div>
        <i className="fa-solid fa-bars absolute top-0 right-0"></i>
      </header>
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
