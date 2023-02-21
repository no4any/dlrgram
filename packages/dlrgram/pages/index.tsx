import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import SessionTest from '@/components/SessionTest.component'
import ApiTest from '@/components/ApiTest'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <>
    <SessionTest />
    <ApiTest />
  </>
}
