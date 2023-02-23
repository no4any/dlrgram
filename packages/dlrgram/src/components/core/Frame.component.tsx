import Body from "./Body.component"
import Footer from "./Footer.component"
import Header from "./Header.component"

export interface FrameProps {
    children: any
}

export default function Frame(props: FrameProps) {
    return <div id="frame">
        <Header />
        <Body>{props.children}</Body>
        <Footer />
    </div>
}