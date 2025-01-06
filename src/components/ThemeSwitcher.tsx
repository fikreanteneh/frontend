import { ColorTypes, useTheme } from '../ThemeProvider';

const ThemeSwitcher = () => {
    const { currentColor, currentTheme, changeColor, changeTheme } = useTheme();

    const handleThemeChange = () => {
        changeTheme(currentTheme === 'dark' ? 'light' : 'dark');
    };

    const handleColorChange = (color: string) => {
        changeColor(color as ColorTypes);
    };

    return (
        <div className="flex gap-4">
            <button onClick={handleThemeChange} className="p-2 bg-gray-200 rounded">
                Toggle Theme
            </button>
            {['green', 'blue', 'orange', 'purple', 'yellow'].map((color) => (
                <button
                    key={color}
                    onClick={() => handleColorChange(color)}
                    className={`p-2 rounded ${currentColor === color ? 'border-2 border-black' : ''}`}
                    style={{ backgroundColor: `var(--${color})` }}
                >
                    {color}
                </button>
            ))}
        </div>
    );
};

export default ThemeSwitcher;