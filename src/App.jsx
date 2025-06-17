import Footer from "./components/Footer"
import Header from "./components/Header"
import Message from "./components/Message"

function App() {
  return (
    <>
    <main className="w-full min-h-dvh flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="header-container w-full">
        <Header />
      </div>
      <div className="main-content flex-1">
      </div>
      <div className="footer-container w-full">
        <Footer />
      </div>
    </main>
    </>
  )
}

export default App