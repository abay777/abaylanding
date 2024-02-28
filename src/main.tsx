import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Loader } from './Components/Loader.tsx'

const App = React.lazy(()=>import('./App.tsx'))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <Suspense fallback={<Loader/>}>
    <App/>
   </Suspense>
  </React.StrictMode>,
)
