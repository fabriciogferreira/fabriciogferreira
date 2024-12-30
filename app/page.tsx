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

import { SOCIAL_MEDIAS } from "@/objects/contact";

export default function Home() {
  return (
    <>
      <Header />
      <aside className="hidden sm:flex fixed top-0 right-0 h-full flex-col justify-center">
        <Nav listClass="flex-col"/>
        <SwitchTheme />
      </aside>
      <main className="mx-14 flex flex-col gap-20">
        {/* <HeroSection /> */}
        {/* <Skills /> */}
        {/* <Statistics /> */}
        <Jobs />
        {/* <Education /> */}
        <Projects />
        {/* <Downloads /> */}
        {/* <Contact /> */}
        <Testimonials />
        {/* <BooksRead /> */}
        {/* <Articles /> */}
        <AboutMe />
      </main>
      <footer className="flex justify-around p-4 gap-4 flex-wrap">
        <p className="flex items-center text-center">
            ©{new Date().getFullYear()} CodeTree. Todos os direitos reservados.
        </p>
        <div className="flex justify-center gap-2 flex-col sm:flex-row items-center">
          <h1>
            Develop by <span className="font-bold">Fabrício Ferreira</span>
          </h1>
          <div className="flex">
            {SOCIAL_MEDIAS.map((socialMedia) => {
              return (
                <div className="w-14" key={socialMedia.link}>
                  {socialMedia.icon}
                </div>
              )
            })}
          </div>
        </div>
      </footer>
    </>
  );
}
