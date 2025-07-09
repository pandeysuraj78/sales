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
exports.AuthProvider = AuthProvider;
exports.useAuth = useAuth;
const react_1 = __importStar(require("react"));
const authService_1 = require("../services/authService");
const index_1 = require("../../../shared/src/index");
const AuthContext = (0, react_1.createContext)(undefined);
const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
};
function authReducer(state, action) {
    switch (action.type) {
        case 'AUTH_START':
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case 'AUTH_SUCCESS':
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                isLoading: false,
                error: null,
            };
        case 'AUTH_ERROR':
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                isLoading: false,
                error: action.payload,
            };
        case 'AUTH_LOGOUT':
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                isLoading: false,
                error: null,
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                isLoading: false,
            };
        case 'CLEAR_ERROR':
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}
function AuthProvider({ children }) {
    const [state, dispatch] = (0, react_1.useReducer)(authReducer, initialState);
    (0, react_1.useEffect)(() => {
        checkAuthStatus();
    }, []);
    const checkAuthStatus = async () => {
        try {
            const accessToken = localStorage.getItem(index_1.STORAGE_KEYS.ACCESS_TOKEN);
            const userData = localStorage.getItem(index_1.STORAGE_KEYS.USER_DATA);
            if (accessToken && userData) {
                const user = JSON.parse(userData);
                dispatch({ type: 'SET_USER', payload: user });
            }
            else {
                dispatch({ type: 'AUTH_LOGOUT' });
            }
        }
        catch (error) {
            console.error('Auth check failed:', error);
            dispatch({ type: 'AUTH_LOGOUT' });
        }
    };
    const login = async (credentials) => {
        dispatch({ type: 'AUTH_START' });
        try {
            const response = await authService_1.authService.login(credentials);
            localStorage.setItem(index_1.STORAGE_KEYS.ACCESS_TOKEN, response.tokens.accessToken);
            localStorage.setItem(index_1.STORAGE_KEYS.REFRESH_TOKEN, response.tokens.refreshToken);
            localStorage.setItem(index_1.STORAGE_KEYS.USER_DATA, JSON.stringify(response.user));
            dispatch({ type: 'AUTH_SUCCESS', payload: response.user });
        }
        catch (error) {
            const errorMessage = error.response?.data?.message || 'Login failed';
            dispatch({ type: 'AUTH_ERROR', payload: errorMessage });
            throw error;
        }
    };
    const register = async (userData) => {
        dispatch({ type: 'AUTH_START' });
        try {
            const response = await authService_1.authService.register(userData);
            localStorage.setItem(index_1.STORAGE_KEYS.ACCESS_TOKEN, response.tokens.accessToken);
            localStorage.setItem(index_1.STORAGE_KEYS.REFRESH_TOKEN, response.tokens.refreshToken);
            localStorage.setItem(index_1.STORAGE_KEYS.USER_DATA, JSON.stringify(response.user));
            dispatch({ type: 'AUTH_SUCCESS', payload: response.user });
        }
        catch (error) {
            const errorMessage = error.response?.data?.message || 'Registration failed';
            dispatch({ type: 'AUTH_ERROR', payload: errorMessage });
            throw error;
        }
    };
    const logout = () => {
        localStorage.removeItem(index_1.STORAGE_KEYS.ACCESS_TOKEN);
        localStorage.removeItem(index_1.STORAGE_KEYS.REFRESH_TOKEN);
        localStorage.removeItem(index_1.STORAGE_KEYS.USER_DATA);
        dispatch({ type: 'AUTH_LOGOUT' });
    };
    const updateUser = (userData) => {
        if (state.user) {
            const updatedUser = { ...state.user, ...userData };
            localStorage.setItem(index_1.STORAGE_KEYS.USER_DATA, JSON.stringify(updatedUser));
            dispatch({ type: 'SET_USER', payload: updatedUser });
        }
    };
    const clearError = () => {
        dispatch({ type: 'CLEAR_ERROR' });
    };
    const hasRole = (role) => {
        return state.user?.role === role;
    };
    const hasAnyRole = (roles) => {
        return state.user ? roles.includes(state.user.role) : false;
    };
    const value = {
        ...state,
        login,
        register,
        logout,
        updateUser,
        clearError,
        hasRole,
        hasAnyRole,
    };
    return (<AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>);
}
function useAuth() {
    const context = (0, react_1.useContext)(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
//# sourceMappingURL=AuthContext.js.map