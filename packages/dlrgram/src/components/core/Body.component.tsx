export interface BodyProps {
    children: any
}

export default function Body(props: BodyProps) {
    return <div id="body">{props.children}</div>
}