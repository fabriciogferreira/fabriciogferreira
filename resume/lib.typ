// U.S.-style chronological resume layout (MyPerfectResume / standard US format).
// EN → U.S. Letter; BR → A4 with the same section order and conventions.
// Max 2 pages. No photo / age / marital status / SSN.
// Rebuild: npm run resume:build

#let portfolio-url = "https://fabriciogferreira.vercel.app/"
#let github-profile-url = "https://github.com/fabriciogferreira"
#let contact-url = "https://fabriciogferreira.vercel.app/#contact"
#let linkedin-url = "https://www.linkedin.com/in/fabriciogferreira/"
#let email = "fabriciof481@gmail.com"
#let phone = "+55 17 99236-2150"

#let resume(
  paper: "us-letter",
  name: "",
  role: "",
  location: "",
  summary: "",
  labels: (:),
  experience: (),
  skills: (),
  education: (),
  projects: (),
) = {
  set page(
    paper: paper,
    margin: (x: 0.75in, y: 0.7in),
  )
  set text(
    font: "Liberation Sans",
    size: 10.5pt,
    lang: labels.at("lang", default: "en"),
  )
  set par(leading: 0.55em, spacing: 0.55em)
  set list(indent: 0.7em, body-indent: 0.4em)

  let section(title) = {
    v(0.55em)
    text(size: 12pt, weight: 700, tracking: 0.04em)[#upper(title)]
    v(0.12em)
    line(length: 100%, stroke: 0.7pt + rgb("#222"))
    v(0.28em)
  }

  // Header — name + contact line (city/state, no street address)
  align(center)[
    #text(size: 16pt, weight: 700)[#name]
    #v(0.18em)
    #text(size: 11pt, weight: 600)[#role]
    #v(0.2em)
    #text(size: 9pt)[
      #phone
      \| #link("mailto:" + email)[#email]
      \| #location
      \| #link(portfolio-url)[#labels.portfolio]
      \| #link(linkedin-url)[LinkedIn]
      \| #link(github-profile-url)[GitHub]
    ]
  ]

  // Professional summary (no first-person pronouns)
  section(labels.summary)
  summary

  // Work experience (reverse-chronological) — primary US focus
  section(labels.experience)
  for job in experience {
    grid(
      columns: (1fr, auto),
      gutter: 0.5em,
      [
        #text(weight: 700)[#job.title] \
        #text(weight: 600)[#job.company]
        #if job.at("place", default: none) != none [
          \| #job.place
        ]
      ],
      align(right)[
        #text(size: 9.5pt)[#job.period]
      ],
    )
    v(0.12em)
    for bullet in job.bullets {
      [- #bullet]
    }
    v(0.35em)
  }

  // Skills
  section(labels.skills)
  for group in skills {
    [*#group.name:* #group.items]
    v(0.12em)
  }

  // Education
  section(labels.education)
  for edu in education {
    grid(
      columns: (1fr, auto),
      gutter: 0.5em,
      [
        #text(weight: 700)[#edu.course] \
        #edu.school
        #if edu.at("place", default: none) != none [
          \| #edu.place
        ]
      ],
      align(right)[
        #text(size: 9.5pt)[#edu.period]
      ],
    )
    v(0.28em)
  }

  // Optional: projects (job-relevant)
  if projects.len() > 0 {
    section(labels.projects)
    for project in projects {
      grid(
        columns: (1fr, auto),
        gutter: 0.5em,
        [#text(weight: 700)[#project.name]],
        text(size: 9.5pt)[#project.status],
      )
      v(0.08em)
      for bullet in project.bullets {
        [- #bullet]
      }
      if project.at("url", default: none) != none {
        text(size: 9pt)[#link(project.url)[#project.url]]
        v(0.08em)
      }
      v(0.28em)
    }
  }

  // Cross-links (portfolio ↔ GitHub profile ↔ contact)
  v(0.45em)
  line(length: 100%, stroke: 0.4pt + rgb("#999"))
  v(0.2em)
  align(center)[
    #text(size: 8.5pt, fill: rgb("#444"))[
      #labels.see-more
      #link(portfolio-url)[#labels.portfolio]
      ·
      #link(github-profile-url)[#labels.github-profile]
      ·
      #link(contact-url)[#labels.contact]
    ]
  ]
}
