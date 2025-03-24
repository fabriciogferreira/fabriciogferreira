import HeroSection from "@/app/_components/HeroSection";
import Skills from "@/app/_components/Skills";
import Statistics from "@/app/_components/Statistics";
import Jobs from "@/app/_components/Jobs";
import Education from "@/app/_components/Education";
import Projects from "@/app/_components/Projects";
import Downloads from "@/app/_components/Donwloads";
import Contact from "@/app/_components/Contact";
import Testimonials from "@/app/_components/Testimonials";
import BooksRead from "@/app/_components/BooksRead";
import Articles from "@/app/_components/Articles";
import AboutMe from "@/app/_components/AboutMe";

import { icons, tIcon } from "@/types/icons";

type sectionType = {
    hide: boolean,
    showTitle: boolean,
    title: string,
    component: React.FC,
    class: string,
    icon: tIcon
}

const SECTIONS: Array<sectionType> = [
    {hide: false, showTitle: false, title: "hero-section", component: HeroSection, class: "h-screen p-10 flex flex-col justify-center", icon: icons.heroSection},
    {hide: false, showTitle: true, title: "skills", component: Skills, class: "", icon: icons.skills},
    {hide: false, showTitle: true, title: "statistics", component: Statistics, class: "", icon: icons.statistics},
    {hide: false, showTitle: true, title: "jobs", component: Jobs, class: "", icon: icons.jobs},
    {hide: false, showTitle: true, title: "education", component: Education, class: "", icon: icons.educations},
    {hide: false, showTitle: true, title: "projects", component: Projects, class: "", icon: icons.projects},
    {hide: false, showTitle: true, title: "downloads", component: Downloads, class: "", icon: icons.downloads},
    {hide: false, showTitle: true, title: "contact", component: Contact, class: "", icon: icons.contact},
    {hide: false, showTitle: true, title: "testimonials", component: Testimonials, class: "", icon: icons.testimonials},
    {hide: false, showTitle: true, title: "books-read", component: BooksRead, class: "", icon: icons.booksRead},
    {hide: false, showTitle: true, title: "articles", component: Articles, class: "", icon: icons.articles},
    {hide: false, showTitle: true, title: "about-me", component: AboutMe, class: "flex flex-col gap-4", icon: icons.aboutMe},
]

export default SECTIONS;