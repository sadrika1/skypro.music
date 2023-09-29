import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/login/login'
import { MainPage } from './pages/mainpage/mainpage'
import { MyPlaylist } from './pages/myplaylist/myplaylist'
import { NotFound } from './pages/404/error.page'
import { Register } from './pages/reg/registration'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/myplaylist" element={<MyPlaylist />} />
      <Route path="/home" element={<MainPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
