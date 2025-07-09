import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging middleware
app.use(morgan('combined'));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Sales Mastery Hub API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
  });
});

// Basic API routes
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

// Mock auth routes
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

// Mock courses routes
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

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: {
      message: `Route ${req.originalUrl} not found`,
    },
  });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  res.status(err.statusCode || 500).json({
    success: false,
    error: {
      message: err.message || 'Server Error',
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Sales Mastery Hub API running on port ${PORT}`);
  console.log(`📚 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
});

export default app;