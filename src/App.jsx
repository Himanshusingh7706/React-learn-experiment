import { Suspense, lazy } from "react"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Contextapi = lazy(() => import("../src/Components/Contextapi"))
const Landing = lazy(() => import("./Components/Landing"));

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar></AppBar>
        <Suspense fallback={<div>Londing</div>}>
          <Routes>
            <Route path="/dashboard" element={<Contextapi />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

function AppBar() {
  const navigate = useNavigate()

  return (
    <div style={{ backgroundColor: "black  ", color: "white", padding: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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