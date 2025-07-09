export interface Course {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    thumbnail: string;
    previewVideo?: string;
    instructorId: string;
    instructor: CourseInstructor;
    category: CourseCategory;
    subcategory?: string;
    tags: string[];
    level: SkillLevel;
    language: string;
    duration: number;
    totalLessons: number;
    price: CoursePrice;
    currency: string;
    enrollmentCount: number;
    rating: number;
    reviewCount: number;
    status: CourseStatus;
    publishedAt?: string;
    createdAt: string;
    updatedAt: string;
    curriculum: Module[];
    requirements: string[];
    learningObjectives: string[];
    targetAudience: string[];
    certificate: CertificateInfo;
    features: CourseFeatures;
    seo: CourseSEO;
}
export interface CourseInstructor {
    id: string;
    name: string;
    avatar?: string;
    title: string;
    rating: number;
    totalStudents: number;
    totalCourses: number;
    verified: boolean;
}
export declare enum CourseCategory {
    SALES_FUNDAMENTALS = "sales_fundamentals",
    COMMUNICATION = "communication",
    NEGOTIATION = "negotiation",
    CUSTOMER_RELATIONSHIP = "customer_relationship",
    DIGITAL_SALES = "digital_sales",
    SALES_MANAGEMENT = "sales_management",
    B2B_SALES = "b2b_sales",
    B2C_SALES = "b2c_sales",
    INDUSTRY_SPECIFIC = "industry_specific",
    SALES_PSYCHOLOGY = "sales_psychology"
}
import { SkillLevel } from './user';
export interface CoursePrice {
    original: number;
    current: number;
    discount?: {
        percentage: number;
        validUntil?: string;
    };
    emiOptions?: EMIOption[];
}
export interface EMIOption {
    duration: number;
    monthlyAmount: number;
    totalAmount: number;
    interestRate: number;
}
export declare enum CourseStatus {
    DRAFT = "draft",
    UNDER_REVIEW = "under_review",
    PUBLISHED = "published",
    SUSPENDED = "suspended",
    ARCHIVED = "archived"
}
export interface Module {
    id: string;
    title: string;
    description?: string;
    order: number;
    duration: number;
    lessons: Lesson[];
    quiz?: Quiz;
    assignment?: Assignment;
    isPreview: boolean;
    locked: boolean;
}
export interface Lesson {
    id: string;
    title: string;
    description?: string;
    type: LessonType;
    content: LessonContent;
    duration: number;
    order: number;
    isPreview: boolean;
    resources: LessonResource[];
    notes?: string;
    transcript?: string;
}
export declare enum LessonType {
    VIDEO = "video",
    TEXT = "text",
    INTERACTIVE = "interactive",
    LIVE_SESSION = "live_session",
    CASE_STUDY = "case_study",
    SIMULATION = "simulation"
}
export interface LessonContent {
    video?: VideoContent;
    text?: TextContent;
    interactive?: InteractiveContent;
    liveSession?: LiveSessionContent;
}
export interface VideoContent {
    url: string;
    thumbnails: string[];
    duration: number;
    quality: VideoQuality[];
    subtitles: Subtitle[];
    chapters: VideoChapter[];
}
export interface VideoQuality {
    resolution: string;
    url: string;
    size: number;
}
export interface Subtitle {
    language: string;
    url: string;
}
export interface VideoChapter {
    title: string;
    startTime: number;
    endTime: number;
}
export interface TextContent {
    content: string;
    estimatedReadTime: number;
    format: 'markdown' | 'html';
}
export interface InteractiveContent {
    type: 'quiz' | 'exercise' | 'simulation';
    config: any;
}
export interface LiveSessionContent {
    scheduledAt: string;
    duration: number;
    maxParticipants?: number;
    meetingLink?: string;
    recordingUrl?: string;
    isRecorded: boolean;
}
export interface LessonResource {
    id: string;
    title: string;
    type: ResourceType;
    url: string;
    size?: number;
    downloadable: boolean;
}
export declare enum ResourceType {
    PDF = "pdf",
    DOCUMENT = "document",
    SPREADSHEET = "spreadsheet",
    PRESENTATION = "presentation",
    IMAGE = "image",
    AUDIO = "audio",
    LINK = "link",
    CODE = "code"
}
export interface Quiz {
    id: string;
    title: string;
    description?: string;
    questions: QuizQuestion[];
    timeLimit?: number;
    passingScore: number;
    maxAttempts: number;
    showCorrectAnswers: boolean;
    randomizeQuestions: boolean;
}
export interface QuizQuestion {
    id: string;
    type: QuestionType;
    question: string;
    options?: string[];
    correctAnswer: string | string[];
    explanation?: string;
    points: number;
    difficulty: QuestionDifficulty;
}
export declare enum QuestionType {
    MULTIPLE_CHOICE = "multiple_choice",
    MULTIPLE_SELECT = "multiple_select",
    TRUE_FALSE = "true_false",
    SHORT_ANSWER = "short_answer",
    ESSAY = "essay",
    DRAG_DROP = "drag_drop",
    AUDIO_RESPONSE = "audio_response"
}
export declare enum QuestionDifficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}
export interface Assignment {
    id: string;
    title: string;
    description: string;
    instructions: string;
    dueDate?: string;
    maxPoints: number;
    submissionFormat: SubmissionFormat[];
    rubric?: AssignmentRubric;
    peerReview: boolean;
    autoGrading: boolean;
}
export declare enum SubmissionFormat {
    TEXT = "text",
    FILE_UPLOAD = "file_upload",
    VIDEO = "video",
    AUDIO = "audio",
    LINK = "link"
}
export interface AssignmentRubric {
    criteria: RubricCriterion[];
    totalPoints: number;
}
export interface RubricCriterion {
    name: string;
    description: string;
    points: number;
    levels: RubricLevel[];
}
export interface RubricLevel {
    name: string;
    description: string;
    points: number;
}
export interface CertificateInfo {
    enabled: boolean;
    template: string;
    requirements: CertificateRequirement[];
    validityPeriod?: number;
}
export interface CertificateRequirement {
    type: 'course_completion' | 'quiz_score' | 'assignment_score';
    threshold: number;
}
export interface CourseFeatures {
    downloadableResources: boolean;
    mobileAccess: boolean;
    lifeTimeAccess: boolean;
    certificateOfCompletion: boolean;
    communityAccess: boolean;
    instructorQA: boolean;
    practiceExercises: boolean;
    realWorldProjects: boolean;
    interactiveCoding: boolean;
    multiLanguageSubtitles: boolean;
}
export interface CourseSEO {
    metaTitle?: string;
    metaDescription?: string;
    keywords: string[];
    slug: string;
}
export interface CourseEnrollment {
    id: string;
    courseId: string;
    userId: string;
    enrolledAt: string;
    completedAt?: string;
    progress: CourseProgress;
    paymentInfo: PaymentInfo;
    accessExpiresAt?: string;
}
export interface CourseProgress {
    completionPercentage: number;
    lessonsCompleted: number;
    totalLessons: number;
    quizzesCompleted: number;
    assignmentsCompleted: number;
    timeSpent: number;
    lastAccessedAt: string;
    currentLessonId?: string;
    moduleProgress: ModuleProgress[];
}
export interface ModuleProgress {
    moduleId: string;
    completionPercentage: number;
    lessonsCompleted: number;
    totalLessons: number;
    quizScore?: number;
    assignmentScore?: number;
    completedAt?: string;
}
export interface PaymentInfo {
    transactionId: string;
    amount: number;
    currency: string;
    paymentMethod: PaymentMethod;
    status: PaymentStatus;
    paidAt: string;
}
export declare enum PaymentMethod {
    UPI = "upi",
    CARD = "card",
    NET_BANKING = "net_banking",
    WALLET = "wallet",
    EMI = "emi"
}
export declare enum PaymentStatus {
    PENDING = "pending",
    COMPLETED = "completed",
    FAILED = "failed",
    REFUNDED = "refunded"
}
export interface CourseReview {
    id: string;
    courseId: string;
    userId: string;
    rating: number;
    title?: string;
    content: string;
    helpful: number;
    createdAt: string;
    updatedAt: string;
    verified: boolean;
    instructorReply?: InstructorReply;
}
export interface InstructorReply {
    content: string;
    createdAt: string;
}
export interface CourseSearchFilters {
    category?: CourseCategory[];
    level?: SkillLevel[];
    duration?: DurationRange;
    price?: PriceRange;
    language?: string[];
    rating?: number;
    features?: string[];
    instructor?: string;
}
export interface DurationRange {
    min?: number;
    max?: number;
}
export interface PriceRange {
    min?: number;
    max?: number;
}
export interface CourseSearchResult {
    courses: Course[];
    totalCount: number;
    filters: {
        categories: {
            value: CourseCategory;
            count: number;
        }[];
        levels: {
            value: SkillLevel;
            count: number;
        }[];
        languages: {
            value: string;
            count: number;
        }[];
        priceRanges: {
            range: PriceRange;
            count: number;
        }[];
    };
}
export interface CreateCourseRequest {
    title: string;
    description: string;
    category: CourseCategory;
    level: SkillLevel;
    language: string;
    price: number;
    currency: string;
}
export interface UpdateCourseRequest extends Partial<CreateCourseRequest> {
    status?: CourseStatus;
}
export interface CourseAnalytics {
    enrollments: EnrollmentAnalytics;
    completion: CompletionAnalytics;
    engagement: EngagementAnalytics;
    revenue: RevenueAnalytics;
    reviews: ReviewAnalytics;
}
export interface EnrollmentAnalytics {
    total: number;
    thisMonth: number;
    trend: TrendData[];
}
export interface CompletionAnalytics {
    rate: number;
    averageTime: number;
    dropoffPoints: DropoffPoint[];
}
export interface EngagementAnalytics {
    averageWatchTime: number;
    replayRate: number;
    discussionActivity: number;
    resourceDownloads: number;
}
export interface RevenueAnalytics {
    total: number;
    thisMonth: number;
    averagePrice: number;
    refundRate: number;
}
export interface ReviewAnalytics {
    averageRating: number;
    totalReviews: number;
    ratingDistribution: {
        rating: number;
        count: number;
    }[];
}
export interface TrendData {
    date: string;
    value: number;
}
export interface DropoffPoint {
    lessonId: string;
    lessonTitle: string;
    dropoffRate: number;
}
//# sourceMappingURL=course.d.ts.map