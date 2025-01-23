import AppLayout from './AppLayout';
import { ThemeProvider } from './ThemeContext';

export default function App() {

    return (
        <ThemeProvider>
            <AppLayout />
        </ThemeProvider>
    );
}
