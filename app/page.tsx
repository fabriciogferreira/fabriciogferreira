import { EnumSectionsIds } from "@/enums/EnumSectionsId";
import Nav from "@/components/Nav";
import HeroSection from "@/app/_components/HeroSection";
import Skills from "@/app/_components/Skills";
import Jobs from "@/app/_components/Jobs";
import Contact from "@/app/_components/Contact";
import BooksRead from "@/app/_components/BooksRead";
import Testimonials from "@/app/_components/Testimonials";
import SwitchTheme from "@/components/SwitchTheme";

export default function Home() {
  return (
    <>
      <header className="sm:hidden">
        <Nav />
        <SwitchTheme />
      </header>
      <aside className="hidden sm:flex fixed top-0 right-0 h-full flex-col justify-center">
        <Nav listClass="flex-col"/>
        <SwitchTheme />
      </aside>
      <main>
        <HeroSection />
        <Skills />
        <section id={EnumSectionsIds.Statistics} className="bg-red-300 h-96"></section>
        <Jobs />
         <section id={EnumSectionsIds.Education} className="bg-red-700 h-96"></section>
        <section id={EnumSectionsIds.Activities} className="bg-red-900 h-96"></section>
        <section id={EnumSectionsIds.Downloads} className="bg-red-100 h-96"></section>
        <Contact />
        <Testimonials />
        <BooksRead />
        <section id={EnumSectionsIds.Articles} className="bg-red-900 h-96"></section>
        <section id={EnumSectionsIds.AbouteMe} className="bg-red-100 h-96"></section>
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
