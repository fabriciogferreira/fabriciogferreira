import moto from "@/public/about-me/moto.jpg"
import aniversario from "@/public/about-me/aniversario.jpg"
import bravo from "@/public/about-me/bravo.jpg"
import rei from "@/public/about-me/rei.jpg"
import fantasia from "@/public/about-me/fantasia.jpg"
import tccEtec from "@/public/about-me/tcc-etec.jpg"
import serio from "@/public/about-me/serio.jpg"
import davizao from "@/public/about-me/davizao.jpg"
import tccUnifunec from "@/public/about-me/tcc-unifunec.jpg"
import unifunecTurma from "@/public/about-me/unifunec-turma.jpg"
import formado from "@/public/about-me/formado.jpg"

import etecCertificate from "@/public/education/etec/certificate.jpg"
import etecLogo from "@/public/education/etec/logo.png"
import highSchoolCertificate from "@/public/education/high-school/certificate.jpg"

import profile from "@/public/hero-section/profile.jpeg"

import { StaticImageData } from "next/image"

export type tImage = StaticImageData

export type tImages = {
    [key: string]: tImage | tImages
}

export const images = {
    heroSection: {
        profile: profile
    },
    aboutMe: {
        moto: moto,
        aniversario: aniversario,
        bravo: bravo,
        fantasia: fantasia,
        rei: rei,
        tccEtec: tccEtec,
        serio: serio,
        davizao: davizao,
        tccUnifunec: tccUnifunec,
        unifunecTurma: unifunecTurma,
        formado: formado,
    },
    education: {
        highSchool:{
            certificate: highSchoolCertificate
        },
        etec: {
            logo: etecLogo,
            certificate: etecCertificate
        },
    }
} as const satisfies tImages