import { Link } from "react-router-dom";

export default function ProjectSection({
    title,
    description,
    img,
    projectLink,
    codeLink
}) {
    return (
        <section>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <div>
                    <a href={projectLink} target="_blank" rel="noopener noreferrer">View Project</a>
                    <a href={codeLink}>View Code</a>
                </div>
            </div>
            <img src={img} alt="project-img" />
        </section>
    )
}