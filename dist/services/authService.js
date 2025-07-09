"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const axios_1 = __importDefault(require("axios"));
const index_1 = require("../../../shared/src/index");
const api = axios_1.default.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json',
    },
});
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
api.interceptors.response.use((response) => response, async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
            const refreshToken = localStorage.getItem('refresh_token');
            if (refreshToken) {
                const response = await api.post(index_1.API_ENDPOINTS.AUTH.REFRESH, {
                    refreshToken,
                });
                const { accessToken } = response.data;
                localStorage.setItem('access_token', accessToken);
                originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                return api(originalRequest);
            }
        }
        catch (refreshError) {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('user_data');
            window.location.href = '/login';
        }
    }
    return Promise.reject(error);
});
exports.authService = {
    async login(credentials) {
        const response = await api.post(index_1.API_ENDPOINTS.AUTH.LOGIN, credentials);
        return response.data;
    },
    async register(userData) {
        const response = await api.post(index_1.API_ENDPOINTS.AUTH.REGISTER, userData);
        return response.data;
    },
    async logout() {
        try {
            await api.post(index_1.API_ENDPOINTS.AUTH.LOGOUT);
        }
        catch (error) {
            console.error('Logout error:', error);
        }
        finally {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('user_data');
        }
    },
    async forgotPassword(request) {
        await api.post(index_1.API_ENDPOINTS.AUTH.FORGOT_PASSWORD, request);
    },
    async resetPassword(token, newPassword) {
        await api.post(index_1.API_ENDPOINTS.AUTH.RESET_PASSWORD, {
            token,
            newPassword,
        });
    },
    async updatePassword(request) {
        await api.put('/api/auth/password', request);
    },
    async verifyEmail(request) {
        await api.post(index_1.API_ENDPOINTS.AUTH.VERIFY_EMAIL, request);
    },
    async verifyPhone(request) {
        await api.post(index_1.API_ENDPOINTS.AUTH.VERIFY_PHONE, request);
    },
    async resendEmailVerification() {
        await api.post('/api/auth/resend-email-verification');
    },
    async requestPhoneVerification(phoneNumber) {
        await api.post('/api/auth/request-phone-verification', { phoneNumber });
    },
    async refreshToken(refreshToken) {
        const response = await api.post(index_1.API_ENDPOINTS.AUTH.REFRESH, {
            refreshToken,
        });
        return response.data;
    },
    isAuthenticated() {
        const token = localStorage.getItem('access_token');
        const userData = localStorage.getItem('user_data');
        return !!(token && userData);
    },
    getCurrentUser() {
        const userData = localStorage.getItem('user_data');
        return userData ? JSON.parse(userData) : null;
    },
    getAuthToken() {
        return localStorage.getItem('access_token');
    },
};
//# sourceMappingURL=authService.js.map