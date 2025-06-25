import { useRef } from "react";
import ExternalLink from "./ExternalLink";
import { motion, useInView } from "motion/react";
import Title from '../components/Title';

export default function ProjectSection({
    title,
    description,
    img,
    className,
    projectLink,
    codeLink,
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`flex flex-col p-7 gap-8 sm:p-15 ${className}`}
        >
            <div className="flex flex-col gap-5 md:flex-1/2">
                <Title h={2} size="2rem">{title}</Title>
                <p className="font-custom-tuffy">{description}</p>
                <div className="">
                    {projectLink && (
                        <ExternalLink
                            href={projectLink}
                        >
                            View Project
                        </ExternalLink>
                    )}
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
        </motion.section>
    );
}
