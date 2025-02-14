import { useEffect } from 'react';
import AppLayout from './AppLayout';
import { ThemeProvider } from './ThemeContext';

export default function App({setDocumentTitle}) {
    useEffect(() => {
        setDocumentTitle((curr) => `${curr} | Counter`);
        return () => {
            setDocumentTitle("FD Portfolio")
        }
    }, [setDocumentTitle]);

    return (
        <ThemeProvider>
            <AppLayout />
        </ThemeProvider>
    );
}
