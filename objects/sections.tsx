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
    hide: boolean,
    showTitle: boolean,
    title: string,
    component: React.FC,
    class: string,
    icon: string
}

const SECTIONS: Array<sectionType> = [
    {hide: false, showTitle: false, title: "hero-section", component: HeroSection, class: "h-screen p-10 flex flex-col justify-center", icon: "home"},
    {hide: false, showTitle: true, title: "skills", component: Skills, class: "", icon: "toolbox"},
    {hide: false, showTitle: true, title: "statistics", component: Statistics, class: "", icon: "chart-line"},
    {hide: true, showTitle: true, title: "jobs", component: Jobs, class: "", icon: "briefcase"},
    {hide: true, showTitle: true, title: "education", component: Education, class: "", icon: "school"},
    {hide: true, showTitle: true, title: "projects", component: Projects, class: "", icon: "diagram-project"},
    {hide: true, showTitle: true, title: "downloads", component: Downloads, class: "", icon: "download"},
    {hide: true, showTitle: true, title: "contact", component: Contact, class: "", icon: "phone"},
    {hide: true, showTitle: true, title: "testimonials", component: Testimonials, class: "", icon: "message"},
    {hide: true, showTitle: true, title: "books-read", component: BooksRead, class: "", icon: "book"},
    {hide: true, showTitle: true, title: "articles", component: Articles, class: "", icon: "newspaper"},
    {hide: true, showTitle: true, title: "about-me", component: AboutMe, class: "flex flex-col gap-4", icon: "address-book"},
]

export default SECTIONS;