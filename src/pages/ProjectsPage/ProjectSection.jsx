import ExternalLink from "../../components/ExternalLink";
import Title from "../../components/Title";
import InViewSlider from "../../components/InViewSlider";
import { classes } from "../../utils/classes";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

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
                className="relative z-10 h-full flex flex-col gap-5 md:flex-1/2"
            >
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
            </motion.div>
            {img && renderImg()}
        </InViewSlider>
    );
}
