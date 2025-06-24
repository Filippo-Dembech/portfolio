import { Link } from "react-router-dom";

export default function Navlink({
    to,
    external,
    className,
    textClassName,
    linkClassName,
    sideElement,
    ...props
}) {

    if (external)
        return (
            <a
                href={external}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
                {...props}
            >
                <span className={textClassName}>
                    {props.children}
                </span>
                <span>{sideElement}</span>
            </a>
        );
    return (
        <Link
            to={to}
            className={linkClassName}
            {...props}
        >
            <span className={textClassName}>
                {props.children}
            </span>
            <span>{sideElement}</span>
        </Link>
    );
}
