import { ReactNode } from "react";

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

type sectionType = {
    showTitle: boolean, title: string, component: () => ReactNode, class: string, icon: string
}

const SECTIONS: Array<sectionType> = [
    {showTitle: false, title: "hero-section", component: HeroSection, class: "h-dvh p-10 flex flex-col justify-evenly", icon: "home"},
    {showTitle: true, title: "skills", component: Skills, class: "flex flex-col", icon: "toolbox"},
    {showTitle: true, title: "statistics", component: Statistics, class: "bg-red-300", icon: "chart-line"},
    {showTitle: true, title: "jobs", component: Jobs, class: "bg-red-400", icon: "briefcase"},
    {showTitle: true, title: "education", component: Education, class: "bg-red-500", icon: "school"},
    {showTitle: true, title: "projects", component: Projects, class: "bg-red-600", icon: "diagram-project"},
    {showTitle: true, title: "downloads", component: Downloads, class: "bg-red-700", icon: "download"},
    {showTitle: true, title: "contact", component: Contact, class: "text-center", icon: "phone"},
    {showTitle: true, title: "testimonials", component: Testimonials, class: "bg-red-900", icon: "message"},
    {showTitle: true, title: "books-read", component: BooksRead, class: "bg-red-200", icon: "book"},
    {showTitle: true, title: "articles", component: Articles, class: "bg-red-300", icon: "newspaper"},
    {showTitle: true, title: "about-me", component: AboutMe, class: "flex flex-col gap-4", icon: "address-book"},
]

export default SECTIONS;