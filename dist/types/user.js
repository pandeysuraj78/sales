"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationStatus = exports.SubscriptionPlan = exports.CompanySize = exports.AchievementCategory = exports.SkillLevel = exports.ExperienceLevel = exports.UserStatus = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["LEARNER"] = "learner";
    UserRole["INSTRUCTOR"] = "instructor";
    UserRole["RECRUITER"] = "recruiter";
    UserRole["ADMIN"] = "admin";
})(UserRole || (exports.UserRole = UserRole = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus["ACTIVE"] = "active";
    UserStatus["INACTIVE"] = "inactive";
    UserStatus["SUSPENDED"] = "suspended";
    UserStatus["PENDING_VERIFICATION"] = "pending_verification";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
var ExperienceLevel;
(function (ExperienceLevel) {
    ExperienceLevel["FRESHER"] = "fresher";
    ExperienceLevel["JUNIOR"] = "junior";
    ExperienceLevel["MID_LEVEL"] = "mid_level";
    ExperienceLevel["SENIOR"] = "senior";
    ExperienceLevel["EXPERT"] = "expert";
})(ExperienceLevel || (exports.ExperienceLevel = ExperienceLevel = {}));
var SkillLevel;
(function (SkillLevel) {
    SkillLevel["BEGINNER"] = "beginner";
    SkillLevel["INTERMEDIATE"] = "intermediate";
    SkillLevel["ADVANCED"] = "advanced";
    SkillLevel["EXPERT"] = "expert";
})(SkillLevel || (exports.SkillLevel = SkillLevel = {}));
var AchievementCategory;
(function (AchievementCategory) {
    AchievementCategory["LEARNING"] = "learning";
    AchievementCategory["SOCIAL"] = "social";
    AchievementCategory["STREAK"] = "streak";
    AchievementCategory["SKILL"] = "skill";
    AchievementCategory["CAREER"] = "career";
})(AchievementCategory || (exports.AchievementCategory = AchievementCategory = {}));
var CompanySize;
(function (CompanySize) {
    CompanySize["STARTUP"] = "startup";
    CompanySize["SMALL"] = "small";
    CompanySize["MEDIUM"] = "medium";
    CompanySize["LARGE"] = "large";
    CompanySize["ENTERPRISE"] = "enterprise";
})(CompanySize || (exports.CompanySize = CompanySize = {}));
var SubscriptionPlan;
(function (SubscriptionPlan) {
    SubscriptionPlan["FREE"] = "free";
    SubscriptionPlan["BASIC"] = "basic";
    SubscriptionPlan["PREMIUM"] = "premium";
    SubscriptionPlan["ENTERPRISE"] = "enterprise";
})(SubscriptionPlan || (exports.SubscriptionPlan = SubscriptionPlan = {}));
var VerificationStatus;
(function (VerificationStatus) {
    VerificationStatus["PENDING"] = "pending";
    VerificationStatus["VERIFIED"] = "verified";
    VerificationStatus["REJECTED"] = "rejected";
})(VerificationStatus || (exports.VerificationStatus = VerificationStatus = {}));
//# sourceMappingURL=user.js.map