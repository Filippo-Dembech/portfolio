import Header from "../components/Header";
import ProjectSection from "../components/ProjectSection";

export default function ProjectsPage() {
    return (
        <div className="bg-orange-50 min-h-[100dvh]">
            <Header>My Projects</Header>
            <div>
                <ProjectSection
                    title="Red Cross Crammer"
                    description="A simple webpage designed to help Red Cross students memorizing procedures."
                    img="./cri-crammer-img.png"
                    projectLink="https://filippo-dembech.github.io/cri-trainer/"
                    codeLink="https://github.com/Filippo-Dembech/cri-trainer"
                />
            </div>
        </div>
    )
}