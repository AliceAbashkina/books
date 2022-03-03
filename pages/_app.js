import '../styles/globals.css'
import {detectDevice} from "@sberdevices/plasma-ui";

console.log(detectDevice())
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
