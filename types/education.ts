export type tEducation = {
    isCourse: boolean
    name: string
    logoSrc: string
    certificateSrc: string
    siteLink: string
    address: string
    course: string
    started_at: string
    finished_at: string
}

export type tEducations = Array<tEducation>

export const educations: tEducations = [
    {
        isCourse: false,
        name: 'UNIFUNEC - Centro Universitário de Santa Fé do Sul',
        logoSrc: 'https://unifunec.edu.br/_next/static/media/unifunec-logo-white.48f8a543.png',
        certificateSrc: "",
        siteLink: 'https://unifunec.edu.br/',
        address: 'Av. Mangara, 477 - Jd. Mangará, Santa Fé do Sul - SP, 15775-000',
        course: 'ADS - Análise e Desenvolvimento de Sistemas',
        started_at: '??/02/2021',
        finished_at: '??/12/2023',
    },
    {
        isCourse: false,
        name: 'ETEC - Escolas Técnicas Estaduais',
        logoSrc: "education/logo/logo-etec-sfs.png",
        certificateSrc: "",
        siteLink: 'https://etecsantafedosul.cps.sp.gov.br/',
        address: 'Av. Conselheiro Antônio Prado, s/n - São Francisco, Santa Fé do Sul - SP, 15775-000',
        course: 'INFONET - Informática para internet',
        started_at: '18/02/2018',
        finished_at: '03/07/2019',
    },
]