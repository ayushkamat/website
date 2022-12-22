import { ThemeProvider } from "react-jss";
import HomePage from "./pages/home";
import { theme } from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />;
    </ThemeProvider>
  );
}
