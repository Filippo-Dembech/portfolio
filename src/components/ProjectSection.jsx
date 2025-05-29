import { useRef } from "react";
import ExternalLink from "./ExternalLink";
import { motion, useInView } from "motion/react";

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
                <h2 className="text-[2rem] text-orange-500 font-custom-tuffy">
                    {title}
                </h2>
                <p className="font-custom-lato font-light">{description}</p>
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
                        className="rounded-lg grayscale-100 mix-blend-hard-light sm:justify-self-center"
                        alt="project-img"
                    />
                    <div class="rounded-lg absolute inset-0 bg-orange-500 opacity-50 pointer-events-none"></div>
                </div>
            )}
        </motion.section>
    );
}
