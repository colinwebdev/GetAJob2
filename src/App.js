import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Panel from './components/Panel'
import Dashboard from './pages/Dashboard'

function App() {
    return (
        <>
            <Router>
                <Panel />
                <Routes>
                    <Route exact path='/' element={<Dashboard />} />
                </Routes>
            </Router>
            <ToastContainer
                position='top-right'
                autoClose={false}
                hideProgressBar={true}
                transition={Slide}
                draggable
                draggablePercent={60}
            />
        </>
    )
}

export default App
