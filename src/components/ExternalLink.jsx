export default function ExternalLink({ href, className, ...props }) {
    return (
        <a
            className={`rounded-lg bg-orange-500 text-orange-50 font-bold p-3 mr-3 transition-colors duration-300 hover:bg-orange-600 ${className}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {props.children}
        </a>
    );
}
