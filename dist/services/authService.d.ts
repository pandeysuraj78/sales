import { LoginRequest, RegisterRequest, AuthResponse, PasswordResetRequest, PasswordUpdateRequest, EmailVerificationRequest, PhoneVerificationRequest } from '../../../shared/src/types/user';
export declare const authService: {
    login(credentials: LoginRequest): Promise<AuthResponse>;
    register(userData: RegisterRequest): Promise<AuthResponse>;
    logout(): Promise<void>;
    forgotPassword(request: PasswordResetRequest): Promise<void>;
    resetPassword(token: string, newPassword: string): Promise<void>;
    updatePassword(request: PasswordUpdateRequest): Promise<void>;
    verifyEmail(request: EmailVerificationRequest): Promise<void>;
    verifyPhone(request: PhoneVerificationRequest): Promise<void>;
    resendEmailVerification(): Promise<void>;
    requestPhoneVerification(phoneNumber: string): Promise<void>;
    refreshToken(refreshToken: string): Promise<{
        accessToken: string;
    }>;
    isAuthenticated(): boolean;
    getCurrentUser(): any;
    getAuthToken(): string | null;
};
//# sourceMappingURL=authService.d.ts.map