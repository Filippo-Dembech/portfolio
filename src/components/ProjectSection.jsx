import ExternalLink from "./ExternalLink";
import Title from "../components/Title";
import InViewSlider from "../components/InViewSlider";

export default function ProjectSection({
    title,
    description,
    img,
    className,
    projectLink,
    codeLink,
}) {
    const renderProjectLink = () => (
        <ExternalLink href={projectLink}>View Project</ExternalLink>
    );
    return (
        <InViewSlider
            className={`flex flex-col p-7 gap-8 sm:p-15 ${className}`}
        >
            <div className="flex flex-col gap-5 md:flex-1/2">
                <Title
                    h={2}
                    size="2rem"
                >
                    {title}
                </Title>
                <p className="font-custom-tuffy">{description}</p>
                <div className="">
                    {projectLink && renderProjectLink()}
                    <ExternalLink
                        className="rounded-lg bg-orange-500 text-orange-50 font-bold p-3 hover:bg-orange-400"
                        href={codeLink}
                    >
                        View Code
                    </ExternalLink>
                </div>
            </div>
            {img && (
                <div className="relative mb-3 sm:self-center md:flex-1/2">
                    <img
                        src={img}
                        className="rounded-xl"
                        alt="project-img"
                    />
                </div>
            )}
        </InViewSlider>
    );
}
