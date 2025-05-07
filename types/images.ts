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

import unifunecCertificate from "@/public/education/unifunec/diploma.jpeg"

import profile from "@/public/hero-section/profile.jpeg"

import adrianoVeiculosJalesBrands from "@/public/projects/adrianoveiculosjales/brands.png"
import adrianoVeiculosJalesHome from "@/public/projects/adrianoveiculosjales/home.png"
import adrianoVeiculosJalesLocalization from "@/public/projects/adrianoveiculosjales/localization.png"
import adrianoVeiculosJalesLogin from "@/public/projects/adrianoveiculosjales/login.png"
import adrianoVeiculosJalesStock from "@/public/projects/adrianoveiculosjales/stock.png"

import opbedAdmin from "@/public/projects/opbed/admin.png"
import opbedForgotPassword from "@/public/projects/opbed/forgot-password.png"
import opbedMobile from "@/public/projects/opbed/mobile.png"
import opbedProgram from "@/public/projects/opbed/program.png"
import opbedSigin from "@/public/projects/opbed/signin.png"

import statisticsGithubContribuions from "@/public/statistics/github/contribuitions.png"

import { StaticImageData } from "next/image"

export type tImage = StaticImageData | string

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
        unifunec: {
            certificate: unifunecCertificate
        }
    },
    projects: {
        adrianoveiculosjales: {
            brands: adrianoVeiculosJalesBrands,
            home: adrianoVeiculosJalesHome,
            localization: adrianoVeiculosJalesLocalization,
            login: adrianoVeiculosJalesLogin,
            stock: adrianoVeiculosJalesStock
        },
        opbed: {
            admin: opbedAdmin,
            forgotPassword: opbedForgotPassword,
            mobile: opbedMobile,
            program: opbedProgram,
            signin: opbedSigin
        }
    },
    statistics: {
        github: {
            contributions: statisticsGithubContribuions
        }
    },
    testimonials: {
        daviTorelli: {
            profile: "/testimonials/davi-torelli/davi-torelli.jpeg",
        },
        viniciusCruz: {
            profile: "https://media.licdn.com/dms/image/v2/D4D03AQHQudJvNednGw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1667403204862?e=1748476800&v=beta&t=_EUPJxYcv5XHDiyI8lD-1Aib5b2wsaGDDXA_-coTP8w",
        }
    }
} as const satisfies rImages