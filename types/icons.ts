//Flags
import {
    BR,
    US
} from 'country-flag-icons/react/3x2'

//Technologies and social medias
import { 
    BootstrapOriginal,
    Css3Original,
    DockerOriginal,
    GithubOriginal,
    GitOriginal,
    Html5Original,
    JavascriptOriginal,
    LaravelOriginal,
    MysqlOriginal,
    PhpOriginal,
    PostgresqlOriginal,
    VuejsOriginal,
    LinkedinOriginal,
    ReactOriginal,
    NextjsOriginal,
    TailwindcssOriginal,

} from 'devicons-react';
import InstagramOriginal from '@/components/icons/InstagramOriginal';
import GmailOriginal from '@/components/icons/GmailOriginal';
//Icons
import {
    House,
    Drill,
    ChartArea,
    BriefcaseBusiness,
    University,
    FolderGit2,
    Download,
    Contact,
    MessageCircle,
    BookCopy,
    Newspaper,
    FileUser,
    IdCard,
    Mail,
    ThumbsUp,
    GraduationCap,
    CalendarCheck,
    Map,
    BookA,
    Eye,
    ChevronLeft,
    ChevronRight,
    Star,
    GitFork,
    ExternalLink,
    Copyright,
    LucideProps
} from 'lucide-react'

interface SVGProps extends React.SVGProps<SVGElement> {
    size?: number | string;
    color?: string;
}

export type tIcon =
    React.ComponentType<SVGProps> |
    React.ComponentType<LucideProps>

export type tIcons = {
    [key: string]: tIcon
}

export const icons = {
    br: BR,
    us: US,
    heroSection: House,
    skills: Drill,
    statistics: ChartArea,
    jobs: BriefcaseBusiness,
    educations: University,
    projects: FolderGit2,
    downloads: Download,
    contact: Contact,
    testimonials: MessageCircle,
    booksRead: BookCopy,
    articles: Newspaper,
    aboutMe: FileUser,
    idCard: IdCard,
    mail: Mail,
    likes: ThumbsUp,
    graduationCap: GraduationCap,
    calendarCheck: CalendarCheck,
    map: Map,
    course: BookA,
    eye: Eye,
    chevronLeft: ChevronLeft,
    chevronRight: ChevronRight,
    star: Star,
    gitFork: GitFork,
    externalLink: ExternalLink,
    bootstrap: BootstrapOriginal,
    css3: Css3Original,
    docker: DockerOriginal,
    github: GithubOriginal,
    git: GitOriginal,
    html5: Html5Original,
    javascript: JavascriptOriginal,
    laravel: LaravelOriginal,
    mysql: MysqlOriginal,
    php: PhpOriginal,
    postgresql: PostgresqlOriginal,
    vuejs: VuejsOriginal,
    linkedin: LinkedinOriginal,
    instagram: InstagramOriginal,
    react: ReactOriginal,
    nextJS: NextjsOriginal,
    tailwindCSS: TailwindcssOriginal,
    credits: Copyright,
    gmail: GmailOriginal
} as const satisfies tIcons