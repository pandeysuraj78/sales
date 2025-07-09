"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
}));
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(limiter);
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '10mb' }));
app.use((0, morgan_1.default)('combined'));
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'Sales Mastery Hub API is running',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development',
    });
});
app.get('/api/test', (req, res) => {
    res.json({
        success: true,
        message: 'API is working!',
        data: {
            version: '1.0.0',
            timestamp: new Date().toISOString(),
        }
    });
});
app.post('/api/auth/login', (req, res) => {
    res.json({
        success: true,
        data: {
            user: {
                id: '1',
                email: req.body.email,
                firstName: 'John',
                lastName: 'Doe',
                role: 'learner',
            },
            tokens: {
                accessToken: 'mock-access-token',
                refreshToken: 'mock-refresh-token',
                expiresIn: 3600
            }
        }
    });
});
app.get('/api/courses', (req, res) => {
    res.json({
        success: true,
        data: {
            courses: [
                {
                    id: '1',
                    title: 'Complete Sales Mastery Course',
                    instructor: 'Rahul Sharma',
                    rating: 4.8,
                    price: 2999,
                    thumbnail: '/api/placeholder/300/200',
                },
                {
                    id: '2',
                    title: 'Advanced B2B Sales Strategies',
                    instructor: 'Priya Patel',
                    rating: 4.9,
                    price: 3999,
                    thumbnail: '/api/placeholder/300/200',
                }
            ],
            totalCount: 2
        }
    });
});
app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: {
            message: `Route ${req.originalUrl} not found`,
        },
    });
});
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).json({
        success: false,
        error: {
            message: err.message || 'Server Error',
            ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
        },
    });
});
app.listen(PORT, () => {
    console.log(`🚀 Sales Mastery Hub API running on port ${PORT}`);
    console.log(`📚 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔗 Health check: http://localhost:${PORT}/health`);
});
exports.default = app;
//# sourceMappingURL=index.js.map