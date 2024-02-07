import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
const [isRendered, setIsRendered]=useState(false)

useEffect(() => {
  setIsRendered(true) 
}, [])

if(!isRendered){
  return;
}



  return <Component {...pageProps} />;
}
