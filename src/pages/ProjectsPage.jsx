import Header from "../components/Header";
import HomepageButton from "../components/HomepageButton";
import ProjectSection from "../components/ProjectSection";

const projects = [
    {
        title: "Red Cross Crammer",
        description:
            "An interactive study aid designed for Red Cross volunteers. It helps quickly memorizing emergency procedures through a clean, focused interface. Perfect for brushing up on protocols.",
        img: "./cri-crammer-img.png",
        projectLink: "https://filippo-dembech.github.io/cri-trainer/",
        codeLink: "https://github.com/Filippo-Dembech/cri-trainer",
    },
    {
        title: "Tic Tac Toe",
        description:
            "A classic game of tic-tac-toe you can play in the browser with a friend. it's a fun little project that showcases basic game logic and player interactions.",
        img: "./tic-tac-toe-img.png",
        projectLink: "https://filippo-dembech.github.io/tic-tac-toe/",
        codeLink: "https://github.com/Filippo-Dembech/tic-tac-toe",
    },
    {
        title: "Spanflex",
        description:
            "A brain-training game designed to challenge and expand your short-term memory. Spanflex presents an increasingly difficult sequence of numbers, testing how far you can stretch your memory span.",
        img: "spanflex-img.png",
        projectLink: "https://filippo-dembech.github.io/Spanflex/",
        codeLink: "https://github.com/Filippo-Dembech/Spanflex",
    },
    {
        title: "Powershell Prompt Profile",
        description:
            "A custom PowerShell profile I built to streamline terminal navigation, automate repetitive tasks, and speed up everyday OS operations.",
        codeLink: "https://github.com/Filippo-Dembech/MyProfile",
    },
    {
        title: "Usefiltex",
        description:
            "A lightweight and flexible React hook for filtering object lists in a declarative way. Available as an npm package it helps the client code to filter records, cutting down on all the filter() and map() methods.",
        projectLink: "https://www.npmjs.com/package/usefiltex",
        codeLink: "https://github.com/Filippo-Dembech/useFilter",
    },
];

export default function ProjectsPage() {
    return (
        <HomepageButton>
            <div className=" bg-orange-50 min-h-[100dvh]">
                <Header>My Projects</Header>
                <div className="flex flex-col odd:bg-orange-200 even:bg-orange-50">
                    {projects.map((project, i) => (
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
