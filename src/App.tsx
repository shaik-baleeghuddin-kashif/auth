import { BrowserRouter as Router } from "react-router-dom"
import AppRouter from "./Routes"

const App = () => {
  return (
    <Router>
      <div
      className="flex h-screen max-h-screen w-full max-w-full overflow-hidden bg-fixed bg-cover bg-no-repeat bg-center transition-colors duration-500 bg-[url('/stack/bg.webp')] items-center justify-center"
      >
        <AppRouter />
      </div>
    </Router>
  )
}

export default App