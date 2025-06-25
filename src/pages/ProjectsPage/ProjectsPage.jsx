import Header from "../../components/Header";
import HomepageButton from "../../components/HomepageButton";
import ProjectSection from "./ProjectSection";
import projectsData from './projectsData';


export default function ProjectsPage() {
    return (
        <HomepageButton>
            <div className=" bg-orange-50 min-h-[100dvh]">
                <Header>My Projects</Header>
                <div className="flex flex-col">
                    {projectsData.map((project, i) => (
                        <ProjectSection
                            key={`${project.title}-${i}`}
                            title={project.title}
                            description={project.description}
                            img={project.img}
                            projectLink={project.projectLink}
                            codeLink={project.codeLink}
                        />
                    ))}
                </div>
            </div>
        </HomepageButton>
    );
}
