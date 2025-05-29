import Header from "../components/Header";
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
        title: "Tic Tac Toe",
        description: "Play tic-tac-toe with a friend of yours.",
        img: "./tic-tac-toe-img.png",
        projectLink: "https://filippo-dembech.github.io/tic-tac-toe/",
        codeLink: "https://github.com/Filippo-Dembech/tic-tac-toe",
    },
    {
        title: "Tic Tac Toe",
        description: "Play tic-tac-toe with a friend of yours.",
        img: "./tic-tac-toe-img.png",
        projectLink: "https://filippo-dembech.github.io/tic-tac-toe/",
        codeLink: "https://github.com/Filippo-Dembech/tic-tac-toe",
    },
    {
        title: "Tic Tac Toe",
        description: "Play tic-tac-toe with a friend of yours.",
        img: "./tic-tac-toe-img.png",
        projectLink: "https://filippo-dembech.github.io/tic-tac-toe/",
        codeLink: "https://github.com/Filippo-Dembech/tic-tac-toe",
    },
    {
        title: "Tic Tac Toe",
        description: "Play tic-tac-toe with a friend of yours.",
        img: "./tic-tac-toe-img.png",
        projectLink: "https://filippo-dembech.github.io/tic-tac-toe/",
        codeLink: "https://github.com/Filippo-Dembech/tic-tac-toe",
    },
    
]

export default function ProjectsPage() {
    return (
        <div className=" bg-orange-50 min-h-[100dvh]">
            <Header>My Projects</Header>
            <div className="flex flex-col odd:bg-orange-200 even:bg-orange-50">
                {projects.map((project) => (
                    <ProjectSection
                        className="odd:bg-orange-200 even:bg-orange-50"
                        title={project.title}
                        description={project.description}
                        img={project.img}
                        projectLink={project.projectLink}
                        codeLink={project.codeLink}
                    />
                ))}
            </div>
        </div>
    )
}