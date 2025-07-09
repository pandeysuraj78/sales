export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    role: UserRole;
    status: UserStatus;
    createdAt: string;
    updatedAt: string;
    lastLoginAt?: string;
    emailVerified: boolean;
    phoneNumber?: string;
    phoneVerified: boolean;
    preferences: UserPreferences;
    profile: UserProfile;
}
export declare enum UserRole {
    LEARNER = "learner",
    INSTRUCTOR = "instructor",
    RECRUITER = "recruiter",
    ADMIN = "admin"
}
export declare enum UserStatus {
    ACTIVE = "active",
    INACTIVE = "inactive",
    SUSPENDED = "suspended",
    PENDING_VERIFICATION = "pending_verification"
}
export interface UserPreferences {
    language: string;
    timezone: string;
    emailNotifications: boolean;
    pushNotifications: boolean;
    marketingEmails: boolean;
    theme: 'light' | 'dark' | 'auto';
}
export interface UserProfile {
    bio?: string;
    location?: string;
    website?: string;
    linkedin?: string;
    twitter?: string;
    skills: string[];
    experience: ExperienceLevel;
    industry?: string;
    currentCompany?: string;
    currentRole?: string;
}
export declare enum ExperienceLevel {
    FRESHER = "fresher",
    JUNIOR = "junior",
    MID_LEVEL = "mid_level",
    SENIOR = "senior",
    EXPERT = "expert"
}
export interface LearnerProfile extends UserProfile {
    careerGoals: string[];
    learningPreferences: LearningPreferences;
    currentLevel: SkillLevel;
    enrolledCourses: string[];
    completedCourses: string[];
    certificates: string[];
    totalXP: number;
    currentStreak: number;
    longestStreak: number;
    achievements: Achievement[];
}
export interface LearningPreferences {
    preferredFormat: 'video' | 'text' | 'interactive' | 'mixed';
    learningPace: 'slow' | 'medium' | 'fast';
    studyTime: 'morning' | 'afternoon' | 'evening' | 'night';
    sessionDuration: 15 | 30 | 45 | 60 | 90;
}
export declare enum SkillLevel {
    BEGINNER = "beginner",
    INTERMEDIATE = "intermediate",
    ADVANCED = "advanced",
    EXPERT = "expert"
}
export interface Achievement {
    id: string;
    title: string;
    description: string;
    icon: string;
    earnedAt: string;
    category: AchievementCategory;
}
export declare enum AchievementCategory {
    LEARNING = "learning",
    SOCIAL = "social",
    STREAK = "streak",
    SKILL = "skill",
    CAREER = "career"
}
export interface InstructorProfile extends UserProfile {
    credentials: Credential[];
    specializations: string[];
    teachingExperience: number;
    rating: number;
    totalStudents: number;
    totalCourses: number;
    totalRevenue: number;
    verified: boolean;
    verificationDocuments: string[];
    bankDetails?: BankDetails;
}
export interface Credential {
    title: string;
    institution: string;
    year: number;
    certificateUrl?: string;
    verified: boolean;
}
export interface BankDetails {
    accountHolder: string;
    accountNumber: string;
    bankName: string;
    ifscCode: string;
    panNumber: string;
}
export interface RecruiterProfile extends UserProfile {
    company: Company;
    jobsPosted: number;
    successfulHires: number;
    subscription: SubscriptionPlan;
    verificationStatus: VerificationStatus;
}
export interface Company {
    id: string;
    name: string;
    logo?: string;
    website?: string;
    industry: string;
    size: CompanySize;
    description?: string;
    location: string;
    verified: boolean;
}
export declare enum CompanySize {
    STARTUP = "startup",
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
    ENTERPRISE = "enterprise"
}
export declare enum SubscriptionPlan {
    FREE = "free",
    BASIC = "basic",
    PREMIUM = "premium",
    ENTERPRISE = "enterprise"
}
export declare enum VerificationStatus {
    PENDING = "pending",
    VERIFIED = "verified",
    REJECTED = "rejected"
}
export interface LoginRequest {
    email: string;
    password: string;
    rememberMe?: boolean;
}
export interface RegisterRequest {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: UserRole;
    phoneNumber?: string;
    agreeToTerms: boolean;
}
export interface AuthResponse {
    user: User;
    tokens: {
        accessToken: string;
        refreshToken: string;
        expiresIn: number;
    };
}
export interface PasswordResetRequest {
    email: string;
}
export interface PasswordUpdateRequest {
    currentPassword: string;
    newPassword: string;
}
export interface EmailVerificationRequest {
    token: string;
}
export interface PhoneVerificationRequest {
    phoneNumber: string;
    otp: string;
}
//# sourceMappingURL=user.d.ts.map