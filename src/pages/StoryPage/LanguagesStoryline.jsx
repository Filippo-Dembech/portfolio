import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import languagesData from "./languagesData";

export default function LanguagesStoryline() {
    return (
        <VerticalTimeline>
            {languagesData.map((language, i) => (
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    dateClassName="mx-2"
                    icon={
                        <div className="flex justify-center items-center">
                            <img
                                src={`${process.env.PUBLIC_URL}/${language.imgPath}`}
                                alt="icon-img"
                                width="80%"
                            />
                        </div>
                    }
                    date={language.date}
                    iconClassName={`bg-white flex ${language.iconClassName}`}
                    //iconClassName={`flex ${language.iconClassName}`}
                >
                    <h3 className="text-[2rem]">{language.name}</h3>
                    <p className="font-light">{language.description}</p>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    );
}
