"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Header;
const react_1 = __importDefault(require("react"));
function Header() {
    return (<header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gradient">Sales Mastery Hub</h1>
            </div>
          </div>

          
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="nav-link">Home</a>
            <a href="/courses" className="nav-link">Courses</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/contact" className="nav-link">Contact</a>
          </nav>

          
          <div className="flex items-center space-x-4">
            <a href="/login" className="btn-outline">Login</a>
            <a href="/register" className="btn-primary">Get Started</a>
          </div>
        </div>
      </div>
    </header>);
}
//# sourceMappingURL=Header.js.map