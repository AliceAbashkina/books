import '../styles/globals.css'
import {detectDevice} from "@sberdevices/plasma-ui";

export var device= detectDevice();
function MyApp({ Component, pageProps }) {

  return <Component {...pageProps} />
}

export default MyApp
