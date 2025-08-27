import ExternalLink from "../../components/ExternalLink";
import Title from "../../components/Title";
import InViewSlider from "../../components/InViewSlider";
import { classes } from "../../utils/classes";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function ProjectSection({
    project,
}) {
    const renderProjectLink = () => (
        <ExternalLink href={project.projectLink}>View Project</ExternalLink>
    );

    const renderImg = () => (
        <div className="relative mb-3 sm:self-center md:flex-1">
            <img
                src={`${process.env.PUBLIC_URL}/${project.img}`}
                className="rounded-xl"
                alt={`${project.title.toLowerCase().split(" ").join("-")}-img`}
            />
        </div>
    );

    const sliderClassName = classes(
        "flex",
        "flex-col",
        "p-7",
        "gap-8",
        "overflow-hidden",
        "relative",
        "sm:p-15",
        "odd:bg-orange-200",
        "even:bg-orange-50",
        "md:odd:flex-row",
        "md:even:flex-row-reverse",
        "md:items-center",
        "md:gap-20",
        "group"
    );

    const contentRef = useRef();
    const isInView = useInView(contentRef, { once: true, margin: "-100px" });

    return (
        <InViewSlider className={sliderClassName}>
            <motion.div
                ref={contentRef}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 h-full flex flex-col md:flex-1"
            >
                <Title
                    h={2}
                    size="2rem"
                >
                    {project.title}
                </Title>
                <div >
                    <span className="text-xs flex gap-3">Tech Stack: {project.techStack.map(tech => (<span className="text-orange-400 font-bold">{tech}</span>))}</span>
                </div>
                <p className="font-custom-tuffy my-5">{project.description}</p>
                <div>
                    {project.projectLink && renderProjectLink()}
                    <ExternalLink href={project.codeLink}>View Code</ExternalLink>
                </div>
            </motion.div>
            {project.img && renderImg()}
        </InViewSlider>
    );
}
