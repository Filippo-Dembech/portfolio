import ExternalLink from "./ExternalLink";
import Title from "../components/Title";
import InViewSlider from "../components/InViewSlider";
import { classes } from "../utils/classes";

export default function ProjectSection({
    title,
    description,
    img,
    projectLink,
    codeLink,
}) {

    const renderProjectLink = () => (
        <ExternalLink href={projectLink}>View Project</ExternalLink>
    );
    

    const renderImg = () => (
        <div className="relative mb-3 sm:self-center md:flex-1/2">
            <img
                src={img}
                className="rounded-xl"
                alt="project-img"
            />
        </div>
    );

    const sliderClassName = classes(
        "flex",
        "flex-col",
        "p-7",
        "gap-8",
        "sm:p-15",
        "odd:bg-orange-200",
        "even:bg-orange-50",
        "md:odd:flex-row",
        "md:even:flex-row-reverse",
        "md:items-center",
        "md:gap-20"
    );

    return (
        <InViewSlider className={sliderClassName}>
            <div className="flex flex-col gap-5 md:flex-1/2">
                <Title
                    h={2}
                    size="2rem"
                >
                    {title}
                </Title>
                <p className="font-custom-tuffy">{description}</p>
                <div>
                    {projectLink && renderProjectLink()}
                    <ExternalLink href={codeLink}>View Code</ExternalLink>
                </div>
            </div>
            {img && renderImg()}
        </InViewSlider>
    );
}
