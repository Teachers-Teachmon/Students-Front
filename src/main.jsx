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
import LoginLoading from './components/login';
import Certification from "./components/check/certification.jsx";
import NotCertification from "./components/check/notCertification.jsx";
import Authorize from './components/check/authorize.jsx' // 인가는 개발중에 번거로울 수 있으므로 나중에 처리하기
import Loading from "./components/loading/index.jsx";
import Edit from './pages/after_school/edit'
import SupervisionDetail from "./pages/supervision/detail";
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
                    <Route path="/supervision/detail" element={<SupervisionDetail />} />
                    <Route path="/supervision/change" element={<SupervisionChange />} />
                    <Route path="/after-school" element={<After />} />
                    <Route path={"/limit"} element={
                        <Suspense fallback={<Loading />}>
                            <AccessLimits />
                        </Suspense>
                    } />
                    {/*<Route element={<Authorize />}>*/}
                        <Route path="/after-school/edit" element={<Edit />} />
                    {/*</Route>*/}
                </Route>
            </Routes>
        </BrowserRouter>
    </QueryClientProvider>
)