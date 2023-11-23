import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/login/login'
import { MainPage } from './pages/mainpage/mainpage'
import { FavoritesPage } from './pages/favorites/favoritespage'
import { NotFound } from './pages/404/error.page'
import { Register } from './pages/reg/registration'
import { Category } from './pages/playlists/sidebarplay'
import { ProtectedRoute } from './protectedRoute'
import { useState } from 'react'

export function AppRoutes({ selectedTrack, setSelectedTrack }) {
  const [isAuth, setIsAuth] = useState(() => {
    const storedValue = localStorage.getItem('isAuth')
    return storedValue ? JSON.parse(storedValue) : false
  })

  const handleLogin = () => {
    setIsAuth(true)
    localStorage.setItem('isAuth', JSON.stringify(true))
  }

  const handleLogout = () => {
    setIsAuth(false)
    localStorage.removeItem('isAuth')
  }

  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute
            redirectPath="/login"
            isAuth={isAuth}
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
        <Route path='/home'element={<MainPage />}></Route>
        <Route path="/category/:id" element={<Category />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login handleLogin={handleLogin} />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

//   return (
//     <Routes>
//       <Route element={<ProtectedRoute user={true}/>}>
//         <Route path="/myplaylist" element={<FavoritesPage />} />
//         <Route path="/" element={<MainPage />} />
//         <Route path="/home" element={<MainPage />} />
//         <Route path="/category/:id" element={<Category />} />
//       </Route>
//       <Route path="*" element={<NotFound />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//     </Routes>
//   )
// }

// const privateRoutes = [
//   {path: '/favorite', component: FavoritesPage, exact: true},
//   {path: '/home', component: MainPage, exact: true},
//   {path: '/login', component: Login, exact: true},
//   {path: '/register', component: Register, exact: true},
//   {path: '/category/:id', component: Category, exact: true},
// ]
// const publicRoutes = [
//   {path: '/login', component: Login, exact: true},
//   {path: '/register', component: Register, exact: true},
// ]

// <Switch>
//   {privateRoutes.map(route =>
//     <Route
//       component={route.component}
//       path={route.path}
//       exact={route.exact}>
//     </Route>
//   )}
//  <Redirect to ='/login'/>
//   {publicRoutes.map(route =>
//     <Route
//       component={route.component}
//       path={route.path}
//       exact={route.exact}>
//     </Route>
//   )}
//   <Redirect to='/home'/>
// </Switch>
