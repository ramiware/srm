// import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { App } from "./App"


////////////////////////////////////////////////////
/// START: GOOGLE TAG MANAGER
////////////////////////////////////////////////////
// @ts-ignore
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'G-HWSTN8PYQP',
  // dataLayer: {
  //     userId: '001',
  //     userProject: 'project'
  // }
}

TagManager.initialize(tagManagerArgs)

////////////////////////////////////////////////////
/// END: GOOGLE TAG MANAGER
////////////////////////////////////////////////////


const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  // <React.StrictMode>
  // <ColorModeScript />
  <App />
  // </React.StrictMode> 
)
