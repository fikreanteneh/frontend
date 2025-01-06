import React, { createContext, useContext, useState, type ReactNode } from "react";

export type ColorTypes = "green" | "blue" | "orange" | "purple" | "yellow";
export type ThemeTypes = "dark" | "light";

export const colors: ColorTypes[] = [
    "green",
    "blue",
    "orange",
    "purple",
    "yellow",
];
export const themes: ThemeTypes[] = ["dark", "light"];

export const darkTheme: ThemeTypes = "dark";
export const lightTheme: ThemeTypes = "light";

export type ThemeContextType = {
    currentColor: ColorTypes,
    currentTheme: ThemeTypes,
    changeColor: (payload: ColorTypes) => void,
    changeTheme: (payload: ThemeTypes) => void,
};

const ThemeContext = createContext<ThemeContextType>({
    currentColor: "purple",
    currentTheme: "dark",
    changeColor: () => { },
    changeTheme: () => { },
});

export const useTheme = () => {
    return useContext<ThemeContextType>(ThemeContext);
};

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [currentColor, setCurrentColor] =
        useState<ColorTypes>(window.localStorage.getItem('currentColor') as ColorTypes ?? "purple");
    const [currentTheme, setCurrentTheme] =
        useState<ThemeTypes>(window.localStorage.getItem('currentTheme') as ThemeTypes ?? "light");

    const changeColor = (color: ColorTypes) => {
        setCurrentColor(color);
        window.localStorage.setItem('currentColor', color);
    };

    const changeTheme = (theme: ThemeTypes) => {
        setCurrentTheme(theme);
        window.localStorage.setItem('currentTheme', theme);
    };

    const value = {
        currentColor,
        currentTheme,
        changeColor,
        changeTheme
    };

    return (
        <ThemeContext.Provider value={value}>
            <div className={`${currentTheme} ${currentColor} p-1 text-main-1`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export default useTheme;