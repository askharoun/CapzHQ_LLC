import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from './site';
import {ScrollReveal} from './components/ScrollReveal';
export const metadata: Metadata = {title:'Capz HQ',description:'Your chapter\u2019s chats and events, in one place.'};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><Header/><ScrollReveal/><main>{children}</main><Footer/></body></html>; }
