import { createRoot } from 'react-dom/client'
import React, { Suspense, lazy } from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';

import Landing from './pages/landing'
import Main from './pages/main'
import Manage from './pages/manage'
import Supervision from './pages/supervision'
import After from './pages/after_school'
import Record from './pages/manage/record'
import Location from "./pages/manage/location";
import Login from "./pages/login"
import SupervisionChange from "./pages/supervision/change";
import SupervisionCreate from './pages/admin/teacher/prohibition';
import LoginLoading from './components/login';
import Certification from "./components/check/certification.jsx";
import NotCertification from "./components/check/notCertification.jsx";
import Authorize from './components/check/authorize.jsx'
import Error from './pages/error';
import Loading from "./components/loading/index.jsx";
import SeatAssignment from './pages/after_school/seat-assignment/index.jsx';
import Admin from './pages/admin/index.jsx'
import AdminAfterSchool from './pages/admin/after-school/index.jsx'
import AdminSelfStudy from './pages/admin/self-study/index.jsx'
import AdminStudent from './pages/admin/student/index.jsx'
import AdminSupervision from './pages/admin/supervision/index.jsx'
import AdminTeacher from './pages/admin/teacher/index.jsx'
const AccessLimits = lazy(()=>import("./pages/accessLimits/index.jsx"))

const client = new QueryClient();

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={client} >
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route element={<NotCertification />}> {/* 로그인된 사용자인지 확인 */}
                    <Route path={"/login"} element={<Login />} />
                    <Route path={'/oauth'} element={<LoginLoading />} />
                </Route>
                <Route element={<Certification />} >  {/* 로그인된 사용자인지 확인 */}
                    <Route path="/main" element={<Main />} />
                    <Route path="/manage" element={<Manage />} />
                    <Route path="/manage/record" element={<Record />} />
                    <Route path={"/manage/location"} element={<Location />} />
                    <Route path="/supervision" element={<Supervision />} />
                    <Route path="/supervision/change" element={<SupervisionChange />} />
                    <Route path="/after-school" element={<After />} />
                    <Route path={"/limit"} element={
                        <Suspense fallback={<Loading />}>
                            <AccessLimits />
                        </Suspense>
                    } />
                    <Route element={<Authorize/>}>
                        <Route path="/admin">
                            <Route index element={<Admin />} />
                            <Route path="after-school" element={<AdminAfterSchool />} />
                            <Route path="self-study" element={<AdminSelfStudy />} />
                            <Route path="student" element={<AdminStudent />} />
                            <Route path="supervision" element={<AdminSupervision />} />
                            <Route path="teacher" element={<AdminTeacher />} />
                            <Route path="teacher/prohibition" element={<SupervisionCreate />} />
                        </Route>
                    </Route>
                    <Route path="/after-school/seat-assignment" element={<SeatAssignment />} />
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    </QueryClientProvider>
)