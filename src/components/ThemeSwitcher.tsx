import useTheme, { colors, ColorTypes } from '../ThemeProvider';

const ThemeSwitcher = () => {
    const { currentColor, currentTheme, changeColor, changeTheme } = useTheme();

    const handleThemeChange = () => {
        changeTheme(currentTheme === 'dark' ? 'light' : 'dark');
    };

    const handleColorChange = (color: ColorTypes) => {
        changeColor(color);
    };

    return (
        <div className="fixed top-0 right-0 flex gap-4">
            <button onClick={handleThemeChange} className="p-2 bg-gray-200 rounded">
                Toggle Theme
            </button>
            {colors.map((color) => (
                <button
                    key={color}
                    onClick={() => handleColorChange(color)}
                    className={`p-2 rounded ${currentColor === color ? 'border-2 border-black' : ''}`}
                >
                    {color}
                </button>
            ))}
        </div>
    );
};

export default ThemeSwitcher;