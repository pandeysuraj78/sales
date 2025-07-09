"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentStatus = exports.PaymentMethod = exports.SubmissionFormat = exports.QuestionDifficulty = exports.QuestionType = exports.ResourceType = exports.LessonType = exports.CourseStatus = exports.CourseCategory = void 0;
var CourseCategory;
(function (CourseCategory) {
    CourseCategory["SALES_FUNDAMENTALS"] = "sales_fundamentals";
    CourseCategory["COMMUNICATION"] = "communication";
    CourseCategory["NEGOTIATION"] = "negotiation";
    CourseCategory["CUSTOMER_RELATIONSHIP"] = "customer_relationship";
    CourseCategory["DIGITAL_SALES"] = "digital_sales";
    CourseCategory["SALES_MANAGEMENT"] = "sales_management";
    CourseCategory["B2B_SALES"] = "b2b_sales";
    CourseCategory["B2C_SALES"] = "b2c_sales";
    CourseCategory["INDUSTRY_SPECIFIC"] = "industry_specific";
    CourseCategory["SALES_PSYCHOLOGY"] = "sales_psychology";
})(CourseCategory || (exports.CourseCategory = CourseCategory = {}));
var CourseStatus;
(function (CourseStatus) {
    CourseStatus["DRAFT"] = "draft";
    CourseStatus["UNDER_REVIEW"] = "under_review";
    CourseStatus["PUBLISHED"] = "published";
    CourseStatus["SUSPENDED"] = "suspended";
    CourseStatus["ARCHIVED"] = "archived";
})(CourseStatus || (exports.CourseStatus = CourseStatus = {}));
var LessonType;
(function (LessonType) {
    LessonType["VIDEO"] = "video";
    LessonType["TEXT"] = "text";
    LessonType["INTERACTIVE"] = "interactive";
    LessonType["LIVE_SESSION"] = "live_session";
    LessonType["CASE_STUDY"] = "case_study";
    LessonType["SIMULATION"] = "simulation";
})(LessonType || (exports.LessonType = LessonType = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["PDF"] = "pdf";
    ResourceType["DOCUMENT"] = "document";
    ResourceType["SPREADSHEET"] = "spreadsheet";
    ResourceType["PRESENTATION"] = "presentation";
    ResourceType["IMAGE"] = "image";
    ResourceType["AUDIO"] = "audio";
    ResourceType["LINK"] = "link";
    ResourceType["CODE"] = "code";
})(ResourceType || (exports.ResourceType = ResourceType = {}));
var QuestionType;
(function (QuestionType) {
    QuestionType["MULTIPLE_CHOICE"] = "multiple_choice";
    QuestionType["MULTIPLE_SELECT"] = "multiple_select";
    QuestionType["TRUE_FALSE"] = "true_false";
    QuestionType["SHORT_ANSWER"] = "short_answer";
    QuestionType["ESSAY"] = "essay";
    QuestionType["DRAG_DROP"] = "drag_drop";
    QuestionType["AUDIO_RESPONSE"] = "audio_response";
})(QuestionType || (exports.QuestionType = QuestionType = {}));
var QuestionDifficulty;
(function (QuestionDifficulty) {
    QuestionDifficulty["EASY"] = "easy";
    QuestionDifficulty["MEDIUM"] = "medium";
    QuestionDifficulty["HARD"] = "hard";
})(QuestionDifficulty || (exports.QuestionDifficulty = QuestionDifficulty = {}));
var SubmissionFormat;
(function (SubmissionFormat) {
    SubmissionFormat["TEXT"] = "text";
    SubmissionFormat["FILE_UPLOAD"] = "file_upload";
    SubmissionFormat["VIDEO"] = "video";
    SubmissionFormat["AUDIO"] = "audio";
    SubmissionFormat["LINK"] = "link";
})(SubmissionFormat || (exports.SubmissionFormat = SubmissionFormat = {}));
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["UPI"] = "upi";
    PaymentMethod["CARD"] = "card";
    PaymentMethod["NET_BANKING"] = "net_banking";
    PaymentMethod["WALLET"] = "wallet";
    PaymentMethod["EMI"] = "emi";
})(PaymentMethod || (exports.PaymentMethod = PaymentMethod = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PENDING"] = "pending";
    PaymentStatus["COMPLETED"] = "completed";
    PaymentStatus["FAILED"] = "failed";
    PaymentStatus["REFUNDED"] = "refunded";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));
//# sourceMappingURL=course.js.map