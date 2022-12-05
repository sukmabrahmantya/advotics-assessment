import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core"
import Dashboard from "./pages/Dashboard";
import Theme from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={Theme} >
        <CssBaseline />
        <div>
          <Dashboard />
        </div>
      </ThemeProvider>
  );
}

export default App;
