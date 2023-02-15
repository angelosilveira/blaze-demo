import { ThemeProvider } from 'styled-components';

import { RoutesComponent } from './routes';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RoutesComponent />
    </ThemeProvider>
  );
}

export default App;
