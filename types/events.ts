export type tEvent = {
    icon: string,
    text: string,
    year: number,
}

export type tEvents = Array<tEvent>

export const events: tEvents = [
    {icon: "baby", text: "nascimento", year: 2002},
    {icon: "gamepad", text: "Primeiro contato com tecnologia: ps2", year: 2010},
    {icon: "computer", text: "primeiro computador", year: 2012},
    {icon: "mobile", text: "Primeiro contato com tecnologia movel: ps2", year: 2013},
    {icon: "burger", text: "primeiro emprego", year: 2017},
    {icon: "laptop", text: "primeiro notebook", year: 2017},
    {icon: "school", text: "ensino médio", year: 2021},
    {icon: "school", text: "ensino técnico", year: 2021},
    {icon: "graduation-cap", text: "Faculdade", year: 2021},
    {icon: "computer", text: "Segundo computador", year: 2022},
    {icon: "code", text: "First JOb Dev", year: 2023},
]