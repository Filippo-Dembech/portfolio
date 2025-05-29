export default function ExternalLink({ href, ...props }) {
    return (
        <a {...props} href={href} target="_blank" rel="noopener noreferrer">{props.children}</a>
    )
}