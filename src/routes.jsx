import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/login/login'
import { MainPage } from './pages/mainpage/mainpage'
import { FavoritesPage } from './pages/favorites/favoritespage'
import { NotFound } from './pages/404/error.page'
import { Register } from './pages/reg/registration'
import { Category } from './pages/playlists/sidebarplay'
import { ProtectedRoute } from './protectedRoute'

export function AppRoutes() {
  const setUser = (user) => {
    localStorage.setItem('user', user.toString());
  };
  
  return (
    <Routes>
      <Route element={<ProtectedRoute user={setUser(false)} />}>
        <Route path="/myplaylist" element={<FavoritesPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/category/:id" element={<Category />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}
