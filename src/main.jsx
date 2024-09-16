import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App.jsx"
import "./index.css"
import "/css/responsive.css"
import "/css/linearicons.css"
import "/css/fontawesome-all.min.css"
import "/css/bootstrap.min.css"
import "/css/owl.carousel.css"
import { Notifications } from "react-push-notification"

createRoot(document.getElementById("root")).render(
  <Router>
    <StrictMode>
      <Notifications />
      <App />
    </StrictMode>,
  </Router>
)
