export interface FrameProps {
    children: any
}

export default function Frame(props: FrameProps) {
    return <div id="frame">
        <div id="head">Head</div>
        <div id="body">{props.children}</div>
        <div id="footer">Footer</div>
    </div>
}