import {
    BR,
    US
} from 'country-flag-icons/react/3x2'

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
} as const satisfies tIcons