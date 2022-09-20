import '../styles/globals.css'
import {useEffect} from "react"
function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    window.location.href = "https://www.itsdope.in/";
  },[])
  return  <div />
}

export default MyApp
