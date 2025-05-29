import Header from "../components/Header";
import HomepageButton from '../components/HomepageButton';
import ProjectSection from "../components/ProjectSection";

const projects = [
    {
        title: "Red Cross Crammer",
        description: "A simple webpage designed to help Red Cross students memorizing procedures.",
        img: "./cri-crammer-img.png",
        projectLink: "https://filippo-dembech.github.io/cri-trainer/",
        codeLink: "https://github.com/Filippo-Dembech/cri-trainer",
    },
    {
        title: "Tic Tac Toe",
        description: "Play tic-tac-toe with a friend of yours.",
        img: "./tic-tac-toe-img.png",
        projectLink: "https://filippo-dembech.github.io/tic-tac-toe/",
        codeLink: "https://github.com/Filippo-Dembech/tic-tac-toe",
    },
    {
        title: "Spanflex",
        description: "A memorization game I have created to improve memory span.",
        img: "spanflex-img.png",
        projectLink: "https://filippo-dembech.github.io/Spanflex/",
        codeLink: "https://github.com/Filippo-Dembech/Spanflex"
    },
    {
        title: "Powershell Prompt Profile",
        description: "A Powershell profile that handles navigation and programs executions I made to make OS operations faster.",
        codeLink: "https://github.com/Filippo-Dembech/MyProfile"
    },
    {
        title: "Usefiltex",
        description: "An npm React library created to filter list of objects with a declarative approach.",
        projectLink: "https://www.npmjs.com/package/usefiltex",
        codeLink: "https://github.com/Filippo-Dembech/useFilter",
    }
]

export default function ProjectsPage() {
    return (
        <HomepageButton>
            <div className=" bg-orange-50 min-h-[100dvh]">
                <Header>My Projects</Header>
                <div className="flex flex-col odd:bg-orange-200 even:bg-orange-50">
                    {projects.map((project) => (
                        <ProjectSection
                            className="odd:bg-orange-200 even:bg-orange-50 md:odd:flex-row md:even:flex-row-reverse md:items-center md:gap-20"
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
    )
}