import { createRoot } from 'react-dom/client'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Landing from './pages/landing'
import Main from './pages/main'
import Manage from './pages/manage'
import Supervision from './pages/supervision'
import After from './pages/after_school'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/main" element={<Main />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/supervision" element={<Supervision />} />
            <Route path="/after-school" element={<After />} />
        </Routes>
    </BrowserRouter>
)
