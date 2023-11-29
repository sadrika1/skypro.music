import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/login/login'
import { MainPage } from './pages/mainpage/mainpage'
import { FavoritesPage } from './pages/favorites/favoritespage'
import { NotFound } from './pages/404/error.page'
import { Category } from './pages/playlists/sidebarplay'
import { ProtectedRoute } from './protectedRoute'
import { useAuthContext } from './context/context'

export function AppRoutes({ selectedTrack, setSelectedTrack }) {
  const { user } = useAuthContext()

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Login />} />
      <Route element={<ProtectedRoute isAuth={Boolean(user)} />}>
        <Route
          path="/"
          element={
            <MainPage
              selectedTrack={selectedTrack}
              setSelectedTrack={setSelectedTrack}
            />
          }
        />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/myplaylist" element={<FavoritesPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

{
  /* <Route
        element={
          <ProtectedRoute
            redirectPath="/login"
            isAuth={Boolean(user)}
            handleLogout={handleLogout}
          />
        }
      >
        <Route path="/myplaylist" element={<FavoritesPage />} />
        <Route
          path="/"
          element={
            <MainPage
              selectedTrack={selectedTrack}
              setSelectedTrack={setSelectedTrack}
            />
          }
        />
        <Route path="/home" element={<MainPage />}></Route>
        <Route path="/category/:id" element={<Category />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login isLoginMode={isLoginMode} />} />
      <Route path="/register" element={<Register />} /> */
}

// const [isAuth, setIsAuth] = useState(() => {
//   const storedValue = localStorage.getItem('isAuth')
//   return storedValue ? JSON.parse(storedValue) : false
// })

// const isLoginMode = () => {
//   setIsAuth(true)
//   localStorage.setItem('isAuth', JSON.stringify(true))
// }

// const handleLogout = () => {
//   setIsAuth(false)
//   localStorage.removeItem('isAuth')
// }
