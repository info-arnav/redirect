import '../styles/globals.css'
import {useEffect} from "react"
function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    window.location.href = "https://www.upes.ac.in/";
  },[])
  return  <div />
}

export default MyApp
