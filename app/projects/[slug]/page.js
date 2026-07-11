import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";

/**
 * INDIVIDUAL PROJECT PAGE — this one file handles EVERY project's detail
 * page. The [slug] folder name is Next.js's dynamic route syntax: a request
 * to /projects/project-one renders this file with params.slug = "project-one".
 *
 * You should never need to edit this file to add a new project — add it to
 * data/projects.js instead. Only edit this file if you want to change the
 * LAYOUT that every project detail page shares (e.g. add a "next/previous
 * project" navigation, or change what fields are displayed).
 */

// Tells Next.js which slugs exist at build time, so every project page is
// pre-rendered (fast, SEO-friendly) instead of built on every request.
// This runs automatically off whatever is in data/projects.js — no edits
// needed when you add a project there.
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// Sets the browser tab title per-project, e.g. "Project One Title | Hudson Hall".
export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

// Video file extensions that should play inline (via a <video> element)
// instead of just linking out. Anything else (e.g. a YouTube/Google Sites
// URL) still renders as a plain "Project Demo" link.
const VIDEO_EXTENSIONS = [".mp4", ".mov", ".webm", ".ogg"];
function isVideoFile(url) {
  return VIDEO_EXTENSIONS.some((ext) => url.toLowerCase().endsWith(ext));
}

export default function ProjectDetailPage({ params }) {
  const project = getProjectBySlug(params.slug);

  // If someone visits a URL with a slug that doesn't exist in
  // data/projects.js, show Next.js's built-in 404 page instead of crashing.
  if (!project) {
    notFound();
  }

  const demoIsVideo = project.demo && isVideoFile(project.demo);

  return (
    <section className="page-header">
      <div className="container">
        <Link href="/projects" className="back-link">
          &larr; Back to all projects
        </Link>

        <div className="project-detail-header">
          <h1>{project.title}</h1>
          <p className="project-detail-meta">{project.year}</p>
          <div className="tag-row">
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.image} alt={`${project.title} screenshot`} />

        {demoIsVideo && (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <video controls style={{ width: "100%", marginTop: 24 }}>
            <source src={project.demo} />
          </video>
        )}

        <div style={{ marginTop: 32 }}>
          {project.description.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub &rarr;
            </a>
          )}
          {project.demo && !demoIsVideo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              {project.demoLabel || "Project Demo"} &rarr;
            </a>
          )}
          {project.constraintsPdf && (
            <a href={project.constraintsPdf} target="_blank" rel="noopener noreferrer">
              Project Constraints &rarr;
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
