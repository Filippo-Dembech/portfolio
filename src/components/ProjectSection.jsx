import ExternalLink from "./ExternalLink";

export default function ProjectSection({
    title,
    description,
    img,
    projectLink,
    codeLink,
}) {
    return (
        <section className="bg-orange-200">
            <div>
                <h2 className="text-[2rem] text-orange-500 font-custom-tuffy">{title}</h2>
                <p className="font-custom-lato font-light">{description}</p>
                <div>
                    <ExternalLink href={projectLink}>View Project</ExternalLink>
                    <ExternalLink href={codeLink}>View Code</ExternalLink>
                </div>
            </div>
            <img
                src={img}
                alt="project-img"
            />
        </section>
    );
}
