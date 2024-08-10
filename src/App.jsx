import { Suspense, lazy } from "react"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Count from "./Components/Count";
const Contextapi = lazy(() => import("../src/Components/Contextapi"))
const Landing = lazy(() => import("./Components/Landing"));

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar></AppBar>

        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Contextapi /> </Suspense>} />
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />

          <Route path="/count" element={<Count />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

function AppBar() {
  const navigate = useNavigate()

  return (
    <div style={{ backgroundColor: "blue", color: "white", padding: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h3>This is my Top Bar</h3>
      <div >
        <button onClick={() => {
          navigate("/dashboard");
        }} style={{ margin: 5 }}>
          Dashboard
        </button>
        <button onClick={() => {
          navigate("/")
        }}>
          Landing
        </button></div>
    </div>
  )
}


export default App;