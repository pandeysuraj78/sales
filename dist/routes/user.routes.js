"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/profile', (req, res) => {
    res.json({
        success: true,
        data: {
            id: '1',
            email: 'user@example.com',
            firstName: 'John',
            lastName: 'Doe',
            role: 'learner',
            status: 'active',
            createdAt: '2024-01-01T00:00:00Z',
            updatedAt: '2024-01-01T00:00:00Z',
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
                bio: 'Sales professional looking to advance my career',
                location: 'Mumbai, India',
                skills: ['Communication', 'Negotiation'],
                experience: 'junior',
            }
        }
    });
});
router.put('/profile', (req, res) => {
    res.json({
        success: true,
        data: {
            ...req.body,
            updatedAt: new Date().toISOString()
        }
    });
});
exports.default = router;
//# sourceMappingURL=user.routes.js.map