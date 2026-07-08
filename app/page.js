import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

/**
 * HOME PAGE — everything here renders at the site root "/".
 *
 * Sections (each is a <section id="..."> so the nav bar's "#about" /
 * "#skills" / "#contact" links can jump straight to them):
 *   #home     - hero/intro
 *   #about    - your bio + photo
 *   Featured Projects - a preview of a few projects, linking to /projects
 *   #skills   - skills grid
 *   #contact  - contact links
 *
 * QUICK-START CHECKLIST:
 *   [ ] Replace "Your Name" and the hero tagline below
 *   [ ] Write your real bio in the #about section
 *   [ ] Add a real profile photo (see the IMAGES comment below)
 *   [ ] Edit the skills lists
 *   [ ] Update contact links (email, GitHub, LinkedIn)
 *   [ ] Full project list/content lives in data/projects.js, not this file
 */
export default function HomePage() {
  // Only show the first 3 projects here as a "featured" preview.
  // The full list lives at /projects (app/projects/page.js).
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {/* ============================== HERO ============================== */}
      <section id="home">
        <div className="container">
          {/* EDIT ME: your name */}
          <h1>Hudson Hall</h1>
          {/* EDIT ME: your title/role */}
          <p className="subtitle">Engineering Physics - Stanford University</p>
          {/* EDIT ME: one or two sentence summary */}
          <p className="tagline">
            I am an Engineer aiming to use my talents in mechatronics to build innovative technology seen in the Sci-Fi books of my childhood. My goal is to contribute to a space where I can learn and constantly improve my capabilities for the next project.
          </p>
          <div className="btn-row">
            <Link className="btn btn-primary" href="/projects">
              Projects
            </Link>
            {/* EDIT ME: add a resume.pdf file to /public and this will link to it */}
            <a className="btn btn-secondary" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* ============================== ABOUT ============================== */}
      <section id="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-grid">
            {/*
              IMAGES: To add a profile photo —
              1. Put your photo in the public/images folder, e.g.
                 public/images/profile.jpg
              2. Change src below to "/images/profile.jpg"
                 (paths under public/ are served from the site root, so you
                 do NOT write "public" in the path)
            */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="about-photo"
              src="https://placehold.co/220x220/1a1f2b/5eead4?text=Photo"
              alt="Your Name"
            />
            <div>
              {/* EDIT ME: your bio */}
              <p>
                Hi, I&apos;m Hudson Hall. I&apos;m an engineering student
                studying Engineering Physics at Stanford University. I&apos;m interested
                in mechatronics and the hands on aspects of the topic
                Having the ability to work on many different parts of a project
                means a lot to me, and I specifically enjoy working on electrical
                and mechanical systems while also being capable of utilizing multiple
                softwares and coding languages. A lot of my projects reflect this as well,
                with the freedom to explore different approaches being what draws me in.
              </p>
              <p>
                Outside of coursework and projects, I enjoy sports, sci-fi books, and playing
                games with my friends. Reading about futuristic technology and magic, or playing
                games with similar aspects, was something I always enjoyed and continue to 
                enjoy even now. I also like traveling around the world with my favorite place I
                have been to so far was Slovenia. The mountains and views were probably some of the best
                I have ever seen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== FEATURED PROJECTS ============================== */}
      <section>
        <div className="container">
          <h2>Projects</h2>
          <p>
          </p>
          <div className="project-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================== SKILLS ============================== */}
      <section id="skills">
        <div className="container">
          <h2>Skills</h2>
          {/* EDIT ME: group your skills however makes sense; add/remove freely */}
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <ul>
                <li>Python</li>
                <li>C++</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Tools &amp; Software</h3>
              <ul>
                <li>Fusion360 / CAD</li>
                <li>ROS2</li>
                <li>Git &amp; GitHub</li>
                <li>Arduino</li>
                <li>ANSYS Fluent</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Engineering</h3>
              <ul>
                <li>Circuit Design / Power Systems</li>
                <li>Control Systems</li>
                <li>Structural Analysis</li>
                <li>Prototyping</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== CONTACT ============================== */}
      <section id="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>
            Connect with me to discuss potential collaborations, job opportunities, or just to say hi! I&apos;m always open to new ideas and projects.
          </p>
          <div className="contact-links">
            {/* EDIT ME: replace with your real email, GitHub, and LinkedIn */}
            <a href="mailto:hudsonchall@gmail.com">Email</a>
            <a href="https://linkedin.com/in/hudson-hall-24b187332" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
