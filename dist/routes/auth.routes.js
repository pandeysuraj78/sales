"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
router.post('/login', [
    (0, express_validator_1.body)('email').isEmail().withMessage('Please provide a valid email'),
    (0, express_validator_1.body)('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
], (req, res) => {
    res.json({
        success: true,
        data: {
            user: {
                id: '1',
                email: req.body.email,
                firstName: 'John',
                lastName: 'Doe',
                role: 'learner',
                status: 'active',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                emailVerified: true,
                phoneVerified: false,
                preferences: {
                    language: 'en',
                    timezone: 'Asia/Kolkata',
                    emailNotifications: true,
                    pushNotifications: true,
                    marketingEmails: false,
                    theme: 'light'
                },
                profile: {
                    skills: [],
                    experience: 'fresher',
                }
            },
            tokens: {
                accessToken: 'mock-access-token',
                refreshToken: 'mock-refresh-token',
                expiresIn: 3600
            }
        }
    });
});
router.post('/register', [
    (0, express_validator_1.body)('email').isEmail().withMessage('Please provide a valid email'),
    (0, express_validator_1.body)('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    (0, express_validator_1.body)('firstName').notEmpty().withMessage('First name is required'),
    (0, express_validator_1.body)('lastName').notEmpty().withMessage('Last name is required'),
    (0, express_validator_1.body)('role').isIn(['learner', 'instructor', 'recruiter']).withMessage('Invalid role'),
], (req, res) => {
    res.status(201).json({
        success: true,
        data: {
            user: {
                id: '2',
                email: req.body.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                role: req.body.role,
                status: 'active',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                emailVerified: false,
                phoneVerified: false,
                preferences: {
                    language: 'en',
                    timezone: 'Asia/Kolkata',
                    emailNotifications: true,
                    pushNotifications: true,
                    marketingEmails: false,
                    theme: 'light'
                },
                profile: {
                    skills: [],
                    experience: 'fresher',
                }
            },
            tokens: {
                accessToken: 'mock-access-token',
                refreshToken: 'mock-refresh-token',
                expiresIn: 3600
            }
        }
    });
});
router.post('/logout', (req, res) => {
    res.json({
        success: true,
        message: 'Logged out successfully'
    });
});
router.post('/refresh', (req, res) => {
    res.json({
        success: true,
        data: {
            accessToken: 'new-mock-access-token',
            expiresIn: 3600
        }
    });
});
router.post('/forgot-password', [
    (0, express_validator_1.body)('email').isEmail().withMessage('Please provide a valid email'),
], (req, res) => {
    res.json({
        success: true,
        message: 'Password reset email sent'
    });
});
router.post('/reset-password', [
    (0, express_validator_1.body)('token').notEmpty().withMessage('Reset token is required'),
    (0, express_validator_1.body)('newPassword').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
], (req, res) => {
    res.json({
        success: true,
        message: 'Password reset successfully'
    });
});
exports.default = router;
//# sourceMappingURL=auth.routes.js.map