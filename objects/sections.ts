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
    title: string, component: () => ReactNode, class: string, icon: string
}

const SECTIONS: Array<sectionType> = [
    {title: "hero-section", component: HeroSection, class: "h-screen bg-red-100", icon: "home"},
    {title: "skills", component: Skills, class: "bg-red-200", icon: "toolbox"},
    {title: "statistics", component: Statistics, class: "bg-red-300", icon: "chart-line"},
    {title: "jobs", component: Jobs, class: "bg-red-400", icon: "briefcase"},
    {title: "education", component: Education, class: "bg-red-500", icon: "school"},
    {title: "projects", component: Projects, class: "bg-red-600", icon: "diagram-project"},
    {title: "downloads", component: Downloads, class: "bg-red-700", icon: "download"},
    {title: "contact", component: Contact, class: "bg-red-800", icon: "phone"},
    {title: "testimonials", component: Testimonials, class: "bg-red-900", icon: "message"},
    {title: "books-read", component: BooksRead, class: "bg-red-200", icon: "book"},
    {title: "articles", component: Articles, class: "bg-red-300", icon: "newspaper"},
    {title: "about-me", component: AboutMe, class: "bg-red-400", icon: "address-book"},
]

export default SECTIONS;