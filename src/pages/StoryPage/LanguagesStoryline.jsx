import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import languagesData from './languagesData';


export default function LanguagesStoryline() {
    return (
        <VerticalTimeline>
            {languagesData.map((language, i) => (
                <VerticalTimelineElement
                    class
                    className="vertical-timeline-element--work"
                    dateClassName="mx-2"
                    date={language.date}
                    iconClassName={language.iconClassName}
                >
                    <h3 className="text-[2rem]">{language.name}</h3>
                    <p className="font-light">{language.description}</p>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    );
}