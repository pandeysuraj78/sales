"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = ThemeProvider;
exports.useTheme = useTheme;
const react_1 = __importStar(require("react"));
const ThemeContext = (0, react_1.createContext)(undefined);
function ThemeProvider({ children }) {
    const [theme, setTheme] = (0, react_1.useState)(() => {
        const stored = localStorage.getItem('theme');
        return stored || 'light';
    });
    const [isDark, setIsDark] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const updateTheme = () => {
            let shouldBeDark = false;
            if (theme === 'dark') {
                shouldBeDark = true;
            }
            else if (theme === 'auto') {
                shouldBeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            }
            setIsDark(shouldBeDark);
            if (shouldBeDark) {
                document.documentElement.classList.add('dark');
            }
            else {
                document.documentElement.classList.remove('dark');
            }
        };
        updateTheme();
        if (theme === 'auto') {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', updateTheme);
            return () => {
                mediaQuery.removeEventListener('change', updateTheme);
            };
        }
    }, [theme]);
    const handleSetTheme = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };
    const value = {
        theme,
        setTheme: handleSetTheme,
        isDark,
    };
    return (<ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>);
}
function useTheme() {
    const context = (0, react_1.useContext)(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
//# sourceMappingURL=ThemeContext.js.map