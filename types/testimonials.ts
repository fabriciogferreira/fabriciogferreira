export type tTestimonial = {
    quote: string,
    name: string,
    position: string,
    enterprise: string,
    profile: string
    siteLink: string
    createdAt: string
}

export type tTestimonials = Array<tTestimonial>

export const testimonials: tTestimonials = []