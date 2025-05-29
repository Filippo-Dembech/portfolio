export default function ExternalLink({ href, className, ...props }) {
    return (
        <a className={className} href={href} target="_blank" rel="noopener noreferrer">{props.children}</a>
    )
}