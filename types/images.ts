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

import adrianoVeiculosJalesBrands from "@/public/projects/adrianoveiculosjales/brands.png"
import adrianoVeiculosJalesHome from "@/public/projects/adrianoveiculosjales/home.png"
import adrianoVeiculosJalesLocalization from "@/public/projects/adrianoveiculosjales/localization.png"
import adrianoVeiculosJalesLogin from "@/public/projects/adrianoveiculosjales/login.png"
import adrianoVeiculosJalesStock from "@/public/projects/adrianoveiculosjales/stock.png"

import { StaticImageData } from "next/image"

export type tImage = StaticImageData

export type tImages = Array<tImage>

export type rImages = {
    [key: string]: tImage | rImages
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
    },
    projects: {
        adrianoveiculosjales: {
            brands: adrianoVeiculosJalesBrands,
            home: adrianoVeiculosJalesHome,
            localization: adrianoVeiculosJalesLocalization,
            login: adrianoVeiculosJalesLogin,
            stock: adrianoVeiculosJalesStock
        }
    }
} as const satisfies rImages