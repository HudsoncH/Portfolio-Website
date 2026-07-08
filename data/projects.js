/**
 * ============================================================================
 * PROJECT DATA — the single place you edit to add/change/remove projects.
 * ============================================================================
 * Both the projects list page (app/projects/page.js) and each individual
 * project page (app/projects/[slug]/page.js) read from this array. You do
 * NOT need to touch any page files to add a new project — just add a new
 * object to this array.
 *
 * FIELD GUIDE:
 *   slug        - lowercase, hyphenated, unique. Becomes the URL:
 *                 slug "cool-robot" -> page at /projects/cool-robot
 *   title       - project name shown on the card and detail page
 *   summary     - one or two sentences shown on the card (project list page)
 *   description - the longer write-up shown on the individual project page.
 *                 It's an array of strings so you can write multiple
 *                 paragraphs — each array entry becomes its own <p>.
 *   image       - path to the cover image. Put real files in
 *                 public/images/ and reference them as "/images/filename.png"
 *                 (leave the placehold.co URL if you don't have an image yet)
 *   tags        - array of short strings (languages/tools) shown as pills
 *   github      - link to the repo, or null to hide the GitHub button
 *   demo        - link to a live demo/video, or null to hide that button
 *   demoLabel   - optional text for the demo button (defaults to "Project
 *                 Demo" if omitted)
 *   constraintsPdf - link to a PDF of the project's requirements/constraints,
 *                 or omit/null to hide this button. Put the PDF file in
 *                 public/files/ and reference it as "/files/filename.pdf"
 *   year        - when you worked on it (just for display)
 *
 * To add a project: copy one of the objects below, paste it before the
 * closing `];`, and edit every field (most importantly `slug` — it must be
 * unique or two projects will collide on the same URL).
 * ============================================================================
 */

export const projects = [
  {
    slug: "curling-robot",
    title: "Curling Robot",
    summary:
      "A robot designed to play an alternate version of the Olympic Sport Curling.",
    description: [
      "The curling robot is a project created by myself and a group of 3 other students to compete in the ME210 final project competition, which resulted in a second place against 20 other groups and their robots. Linked below is a guide containing the project requirements and tools available for the project. We were not allowed to control the robot, and were required to innovate our own solution to the project, including the snsor suite, power systems, structure, and puck delivery system.",
      "My role in the project saw me handling the motor control for the wheels along with the batteries and power system. Additionally, I helped laser cut the base of the robot and the ramp along with assiting in designing and constructing the structure. The Project Demo link below contains further depth of the project, including a video of the robot in action and a more detailed writeup of the project.",
    ],
    image: "/images/curling-robot.png",
    tags: ["CAD", "Arduino", "C++", "Power Systems", "Laser Cutting", "Design and Modeling"],
    demo: "https://sites.google.com/stanford.edu/me210w26phineas?usp=sharing",
    constraintsPdf: "/files/curling-robot-constraints.pdf",
    year: "2025",
  },
  {
    slug: "project-two",
    title: "Project Two Title",
    summary:
      "One or two sentences describing what this project does and the problem it solves.",
    description: [
      "Replace this with a full write-up of the project: what it is, why you built it, and how it works.",
    ],
    image: "https://placehold.co/1200x675/1a1f2b/5eead4?text=Project+2",
    tags: ["MATLAB", "SolidWorks"],
    github: "https://github.com/yourusername/project-two",
    demo: null,
    year: "2025",
  },
  {
    slug: "project-three",
    title: "Project Three Title",
    summary:
      "One or two sentences describing what this project does and the problem it solves.",
    description: [
      "Replace this with a full write-up of the project: what it is, why you built it, and how it works.",
    ],
    image: "https://placehold.co/1200x675/1a1f2b/5eead4?text=Project+3",
    tags: ["C++", "Embedded Systems"],
    github: "https://github.com/yourusername/project-three",
    demo: null,
    year: "2025",
  },
];

/** Looks up a single project by its slug. Returns undefined if not found. */
export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
