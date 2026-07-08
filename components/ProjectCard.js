import Link from "next/link";

/**
 * Renders one project preview card. Used on both the home page (featured
 * projects) and the full /projects list page — so if you want to change how
 * a project card looks, this is the only file you need to edit.
 *
 * Clicking the card links to /projects/<slug>, which is handled by the
 * dynamic route at app/projects/[slug]/page.js.
 */
export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="project-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={project.image} alt={`${project.title} screenshot`} />
      <div className="project-card-body">
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
