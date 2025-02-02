import { RouterProvider } from 'react-router';
import Router from './routes';
import { AuthProvider } from './store/AuthProvider';
import { ThemeProvider } from './store/ThemeProvider';



function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={Router} />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App