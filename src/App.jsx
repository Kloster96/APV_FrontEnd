import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  AuthLayout  from './layout/AuthLayout'
import RutaProtegida from './layout/rutaProtegida'
import Login from './pages/Login'
import Registrar from './pages/Registrar'
import ConfirmarCuenta from './pages/ConfirmarCuenta'
import OlvidePassword from './pages/OlvidePassword'
import NuevoPassword from './pages/nuevoPassword'
import { AuthProvider } from './context/AuthProvider'
import { PacientesProvider } from './context/PacientesProvider'
import AdministrarPaciente from './pages/AdministrarPaciente'
import EditarPerfil from './pages/EditarPerfil'
import CambiarPassword from './pages/CambiarPassword'

function App() {
  
  return (
    <BrowserRouter>
      <AuthProvider>
          <PacientesProvider>
            <Routes>
              <Route path='/' element={<AuthLayout />}>
                <Route index element={<Login/>} />
                <Route path='registrar' element={<Registrar />} />
                <Route path='olvide-password' element={<OlvidePassword />} />
                <Route path='olvide-password/:token' element={<NuevoPassword />} />
                <Route path='confirmar/:id' element={<ConfirmarCuenta />} />
              </Route>

              <Route path='/admin' element={<RutaProtegida />}>
                <Route index element={<AdministrarPaciente />} />
                <Route path='perfil' element={<EditarPerfil />} />
                <Route path='cambiar-password' element={<CambiarPassword />} />
              </Route>

            </Routes>
          </PacientesProvider>
        </AuthProvider>
    </BrowserRouter>
  )
}

export default App
