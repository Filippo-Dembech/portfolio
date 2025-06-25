import Header from "../../components/Header";
import { classes } from "../../utils/classes";
import HomepageLink from "./HomepageLink";
import linksData from "./linksData";


export default function Homepage() {
    
    const pageClassName = classes(
        "p-3",
        "pb-8",
        "bg-orange-50",
        "min-h-[100dvh]",
        "flex",
        "flex-col",
        "overflow-hidden"       
    )
    
    const containerClassName = classes(
        "sm:max-w-[650px]",
        "sm:m-auto",
        "flex",
        "flex-col",
        "sm:flex-row",
        "justify-center",
        "items-stretch",
        "flex-1",
        "gap-8",       
    )

    return (
        <div className={pageClassName}>
            <Header>My Portfolio</Header>
            <div className={containerClassName}>
                {linksData.map((link, i) => (
                    <HomepageLink
                        to={link.to}
                        iconSrc={link.iconSrc}
                        external={link.external}
                        lottiClassName={link.lottiClassName}
                    >
                        {link.title}
                    </HomepageLink>
                ))}
            </div>
        </div>
    );
}
