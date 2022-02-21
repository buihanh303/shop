import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { path } from './constants/path'
import Home from './pages/Home/Home'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import NotFound from './pages/NotFound/NotFound'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'
import MainLayout from './layouts/MainLayout/MainLayout'
import UnauthenticatedGuard from './guards/UnauthenticatedGuard'
import User from './pages/User/User'
import AuthenticatedGuard from './guards/AuthenticatedGuard'
export default function Routers() {
  return (
    <Routes>
      <Route
        path={path.home}
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path={path.login}
        element={
          <UnauthenticatedGuard>
            <RegisterLayout title="Đăng nhập">
              <Login />
            </RegisterLayout>
          </UnauthenticatedGuard>
        }
      />
      <Route
        path={path.register}
        element={
          <UnauthenticatedGuard>
            <RegisterLayout title="Đăng ký">
              <Register />
            </RegisterLayout>
          </UnauthenticatedGuard>
        }
      />
      <Route
        path={path.user}
        element={
          <AuthenticatedGuard>
            <MainLayout>
              <User />
            </MainLayout>
          </AuthenticatedGuard>
        }
      />
      <Route path={path.notFound} element={<NotFound />} />
    </Routes>
  )
}
