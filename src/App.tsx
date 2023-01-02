import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { RoutesComponent } from './routes';
import GlobalStyles from './styles/global';
import theme from './styles/theme';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer
        position="top-right"
        theme="colored"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyles />
      <RoutesComponent />
    </ThemeProvider>
  );
}

export default App;
