import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter