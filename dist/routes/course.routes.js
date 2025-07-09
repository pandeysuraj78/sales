"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const mockCourses = [
    {
        id: '1',
        title: 'Complete Sales Mastery Course',
        description: 'Master the fundamentals of sales with this comprehensive course',
        shortDescription: 'Learn sales fundamentals and advanced techniques',
        thumbnail: '/api/placeholder/300/200',
        instructor: {
            id: 'inst1',
            name: 'Rahul Sharma',
            avatar: '/api/placeholder/100/100',
            title: 'Senior Sales Director',
            rating: 4.8,
            totalStudents: 5247,
            totalCourses: 12,
            verified: true
        },
        category: 'sales_fundamentals',
        level: 'beginner',
        language: 'en',
        duration: 1200,
        totalLessons: 45,
        price: {
            original: 3999,
            current: 2999,
            discount: {
                percentage: 25,
                validUntil: '2024-12-31'
            }
        },
        currency: 'INR',
        enrollmentCount: 1247,
        rating: 4.8,
        reviewCount: 456,
        status: 'published',
        publishedAt: '2024-01-01T00:00:00Z',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z'
    },
    {
        id: '2',
        title: 'Advanced B2B Sales Strategies',
        description: 'Take your B2B sales to the next level with advanced strategies',
        shortDescription: 'Advanced B2B sales techniques and strategies',
        thumbnail: '/api/placeholder/300/200',
        instructor: {
            id: 'inst2',
            name: 'Priya Patel',
            avatar: '/api/placeholder/100/100',
            title: 'B2B Sales Expert',
            rating: 4.9,
            totalStudents: 3124,
            totalCourses: 8,
            verified: true
        },
        category: 'b2b_sales',
        level: 'intermediate',
        language: 'en',
        duration: 900,
        totalLessons: 32,
        price: {
            original: 4999,
            current: 3999
        },
        currency: 'INR',
        enrollmentCount: 856,
        rating: 4.9,
        reviewCount: 312,
        status: 'published',
        publishedAt: '2024-01-15T00:00:00Z',
        createdAt: '2024-01-15T00:00:00Z',
        updatedAt: '2024-01-15T00:00:00Z'
    }
];
router.get('/', (req, res) => {
    res.json({
        success: true,
        data: {
            courses: mockCourses,
            totalCount: mockCourses.length,
            filters: {
                categories: [
                    { value: 'sales_fundamentals', count: 25 },
                    { value: 'b2b_sales', count: 18 },
                    { value: 'communication', count: 32 }
                ],
                levels: [
                    { value: 'beginner', count: 45 },
                    { value: 'intermediate', count: 28 },
                    { value: 'advanced', count: 15 }
                ],
                languages: [
                    { value: 'en', count: 67 },
                    { value: 'hi', count: 21 }
                ]
            }
        }
    });
});
router.get('/:id', (req, res) => {
    const course = mockCourses.find(c => c.id === req.params.id);
    if (!course) {
        return res.status(404).json({
            success: false,
            error: {
                message: 'Course not found'
            }
        });
    }
    res.json({
        success: true,
        data: course
    });
});
router.get('/search', (req, res) => {
    const { q, category, level, language } = req.query;
    let filteredCourses = mockCourses;
    if (q) {
        filteredCourses = filteredCourses.filter(course => course.title.toLowerCase().includes(q.toLowerCase()) ||
            course.description.toLowerCase().includes(q.toLowerCase()));
    }
    if (category) {
        filteredCourses = filteredCourses.filter(course => course.category === category);
    }
    if (level) {
        filteredCourses = filteredCourses.filter(course => course.level === level);
    }
    if (language) {
        filteredCourses = filteredCourses.filter(course => course.language === language);
    }
    res.json({
        success: true,
        data: {
            courses: filteredCourses,
            totalCount: filteredCourses.length
        }
    });
});
router.get('/featured', (req, res) => {
    res.json({
        success: true,
        data: mockCourses.slice(0, 3)
    });
});
router.post('/:id/enroll', (req, res) => {
    const course = mockCourses.find(c => c.id === req.params.id);
    if (!course) {
        return res.status(404).json({
            success: false,
            error: {
                message: 'Course not found'
            }
        });
    }
    res.json({
        success: true,
        data: {
            enrollmentId: 'enr_' + Date.now(),
            courseId: course.id,
            userId: 'user_1',
            enrolledAt: new Date().toISOString(),
            progress: {
                completionPercentage: 0,
                lessonsCompleted: 0,
                totalLessons: course.totalLessons,
                timeSpent: 0,
                lastAccessedAt: new Date().toISOString(),
                moduleProgress: []
            }
        }
    });
});
exports.default = router;
//# sourceMappingURL=course.routes.js.map