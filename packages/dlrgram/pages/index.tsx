import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import SessionTest from '@/src/components/SessionTest.component'
import ApiTest from '@/src/components/ApiTest'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadCry } from '@fortawesome/free-regular-svg-icons'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <>
    <h1>Testseite <FontAwesomeIcon icon={faSadCry} /></h1>
    <SessionTest />
    <ApiTest />
  </>
}
