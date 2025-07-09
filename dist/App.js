"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_query_1 = require("@tanstack/react-query");
const react_query_devtools_1 = require("@tanstack/react-query-devtools");
const react_hot_toast_1 = require("react-hot-toast");
const AuthContext_1 = require("./contexts/AuthContext");
const ThemeContext_1 = require("./contexts/ThemeContext");
const Header_1 = __importDefault(require("./components/layout/Header"));
const Footer_1 = __importDefault(require("./components/layout/Footer"));
const LoadingSpinner_1 = __importDefault(require("./components/ui/LoadingSpinner"));
const HomePage_1 = __importDefault(require("./pages/HomePage"));
const LoginPage_1 = __importDefault(require("./pages/auth/LoginPage"));
const RegisterPage_1 = __importDefault(require("./pages/auth/RegisterPage"));
const CoursesPage_1 = __importDefault(require("./pages/courses/CoursesPage"));
const CourseDetailPage_1 = __importDefault(require("./pages/courses/CourseDetailPage"));
const DashboardPage_1 = __importDefault(require("./pages/dashboard/DashboardPage"));
const InstructorDashboard_1 = __importDefault(require("./pages/instructor/InstructorDashboard"));
const RecruiterDashboard_1 = __importDefault(require("./pages/recruiter/RecruiterDashboard"));
const ProfilePage_1 = __importDefault(require("./pages/profile/ProfilePage"));
const ProtectedRoute_1 = require("./components/auth/ProtectedRoute");
const queryClient = new react_query_1.QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
            staleTime: 5 * 60 * 1000,
        },
    },
});
function App() {
    return (<react_query_1.QueryClientProvider client={queryClient}>
      <ThemeContext_1.ThemeProvider>
        <AuthContext_1.AuthProvider>
          <react_router_dom_1.BrowserRouter>
            <div className="min-h-screen bg-gray-50 flex flex-col">
              <Header_1.default />
              
              <main className="flex-1">
                <react_1.default.Suspense fallback={<LoadingSpinner_1.default />}>
                  <react_router_dom_1.Routes>
                    
                    <react_router_dom_1.Route path="/" element={<HomePage_1.default />}/>
                    <react_router_dom_1.Route path="/login" element={<LoginPage_1.default />}/>
                    <react_router_dom_1.Route path="/register" element={<RegisterPage_1.default />}/>
                    <react_router_dom_1.Route path="/courses" element={<CoursesPage_1.default />}/>
                    <react_router_dom_1.Route path="/courses/:id" element={<CourseDetailPage_1.default />}/>
                    
                    
                    <react_router_dom_1.Route path="/dashboard" element={<ProtectedRoute_1.ProtectedRoute>
                        <DashboardPage_1.default />
                      </ProtectedRoute_1.ProtectedRoute>}/>
                    
                    <react_router_dom_1.Route path="/instructor/*" element={<ProtectedRoute_1.ProtectedRoute allowedRoles={['instructor', 'admin']}>
                        <InstructorDashboard_1.default />
                      </ProtectedRoute_1.ProtectedRoute>}/>
                    
                    <react_router_dom_1.Route path="/recruiter/*" element={<ProtectedRoute_1.ProtectedRoute allowedRoles={['recruiter', 'admin']}>
                        <RecruiterDashboard_1.default />
                      </ProtectedRoute_1.ProtectedRoute>}/>
                    
                    <react_router_dom_1.Route path="/profile" element={<ProtectedRoute_1.ProtectedRoute>
                        <ProfilePage_1.default />
                      </ProtectedRoute_1.ProtectedRoute>}/>
                    
                    
                    <react_router_dom_1.Route path="*" element={<react_router_dom_1.Navigate to="/" replace/>}/>
                  </react_router_dom_1.Routes>
                </react_1.default.Suspense>
              </main>
              
              <Footer_1.default />
            </div>
            
            
            <react_hot_toast_1.Toaster position="top-right" toastOptions={{
            duration: 4000,
            style: {
                background: '#363636',
                color: '#fff',
            },
            success: {
                duration: 3000,
                iconTheme: {
                    primary: '#059669',
                    secondary: '#fff',
                },
            },
            error: {
                duration: 5000,
                iconTheme: {
                    primary: '#dc2626',
                    secondary: '#fff',
                },
            },
        }}/>
          </react_router_dom_1.BrowserRouter>
        </AuthContext_1.AuthProvider>
      </ThemeContext_1.ThemeProvider>
      
      
      <react_query_devtools_1.ReactQueryDevtools initialIsOpen={false}/>
    </react_query_1.QueryClientProvider>);
}
exports.default = App;
//# sourceMappingURL=App.js.map