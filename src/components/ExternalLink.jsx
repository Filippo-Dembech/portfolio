export default function ExternalLink({ href, ...props }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">{props.children}</a>
    )
}