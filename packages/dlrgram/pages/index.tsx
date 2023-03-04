import SessionTest from '@/src/components/SessionTest.component'
import ApiTest from '@/src/components/ApiTest'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadCry } from '@fortawesome/free-regular-svg-icons'
import Frame from '@/src/components/core/Frame.component'

export default function Home() {
  return <Frame>
    <h1>Testseite <FontAwesomeIcon icon={faSadCry} /></h1>
    <SessionTest />
    <ApiTest />
  </Frame>
}
