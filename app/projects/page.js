import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

// Overrides just the <title> for this page (root layout's "%s | Your Name"
// template wraps this, so the tab title becomes "Projects | Your Name").
export const metadata = {
  title: "Projects",
};

/**
 * PROJECTS LIST PAGE — renders at "/projects".
 *
 * This page has no hardcoded project content — it just maps over the
 * `projects` array from data/projects.js. To add/remove/edit a project,
 * edit that file, not this one.
 */
export default function ProjectsPage() {
  return (
    <section className="page-header">
      <div className="container">
        <h2>Projects</h2>
        <p>Click any project below for the full write-up.</p>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
