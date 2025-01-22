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
import Record from './pages/manage/record'
import Location from "./pages/manage/location";
import Login from "./pages/login"
import SupervisionDetail from "./pages/supervision/detail";
import SupervisionChange from "./pages/supervision/change";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path={"/login"} element={<Login />} />
            <Route path="/main" element={<Main />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/manage/record" element={<Record />} />
            <Route path={"/manage/location"} element={<Location />} />
            <Route path="/supervision" element={<Supervision />} />
            <Route path="/supervision/detail" element={<SupervisionDetail />} />
            <Route path="/supervision/change" element={<SupervisionChange />} />
            <Route path="/after-school" element={<After />} />
        </Routes>
    </BrowserRouter>
)
