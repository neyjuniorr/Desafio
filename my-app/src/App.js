import React from 'react';
import AppRoutes from './routes/index.jsx'
import './global.css'
// import { AuthProvider } from './context/auth.jsx';




function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
