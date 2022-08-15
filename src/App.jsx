import {BrowserRouter, Routes, Route} from 'react-router-dom'

import AppSalonLayout from './layout/AppSalonLayout'

import Index from './paginas/Index'

import {ClienteProvider} from './context/ClienteProvider'

function App() {
  return (
    <BrowserRouter>
      <ClienteProvider>
        <Routes>
          <Route path='/' element={<AppSalonLayout />}>
            <Route index element={<Index />} />
          </Route>
        </Routes>
      </ClienteProvider>
    </BrowserRouter>
  )
}

export default App
