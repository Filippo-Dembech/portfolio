import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const themes = {
    LIGHT: "light",
    DARK: "dark",
}

function ThemeProvider({children}) {
    
    const [ theme, setTheme] = useState(themes.LIGHT)
    
    function toggleTheme() {
        setTheme(currentTheme => {
            if (currentTheme === themes.LIGHT) return themes.DARK
            return themes.LIGHT
        })
    }
    
    const isDarkTheme = theme === themes.DARK;
    
    return <ThemeContext.Provider value={{
        theme,
        toggleTheme,
        isDarkTheme
    }}>
        {children}
    </ThemeContext.Provider>
}

function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) throw new Error("'useTheme()' is used outside ThemeContext");
    return context;
}

export { ThemeProvider, useTheme, themes }