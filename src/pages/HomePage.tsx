import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Star, 
  Users, 
  TrendingUp, 
  Award, 
  Clock, 
  CheckCircle,
  ArrowRight,
  BookOpen,
  Target,
  Zap
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Master the Art of 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    {" "}Sales Excellence
                  </span>
                </h1>
                <p className="text-xl text-primary-100 leading-relaxed">
                  Join thousands of sales professionals who've transformed their careers with our 
                  proven methodologies, expert-led courses, and practical training programs.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/courses" className="btn-secondary inline-flex items-center justify-center">
                  Explore Courses
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="btn-outline text-white border-white hover:bg-white hover:text-primary-900 inline-flex items-center justify-center">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-primary-200 text-sm">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">200+</div>
                  <div className="text-primary-200 text-sm">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-primary-200 text-sm">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Interactive Learning</h3>
                      <p className="text-primary-200">Hands-on practice with real scenarios</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Industry Certification</h3>
                      <p className="text-primary-200">Recognized credentials for career growth</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Expert Mentorship</h3>
                      <p className="text-primary-200">Learn from top sales professionals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Sales Mastery Hub?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive sales training that combines proven methodologies 
              with cutting-edge techniques to accelerate your career growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Goal-Oriented Learning</h3>
              <p className="text-gray-600 mb-6">
                Structured curriculum designed to help you achieve specific sales targets 
                and career objectives with measurable outcomes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Personalized learning paths
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Progress tracking
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Achievement badges
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Practical Application</h3>
              <p className="text-gray-600 mb-6">
                Learn through real-world scenarios, role-playing exercises, and 
                interactive simulations that mirror actual sales situations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Live practice sessions
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Case study analysis
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Peer feedback system
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Continuous Growth</h3>
              <p className="text-gray-600 mb-6">
                Stay ahead with the latest sales trends, technologies, and strategies 
                through our constantly updated content and expert insights.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Monthly masterclasses
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Industry updates
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Networking opportunities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600">
              Start your journey with our most popular and effective courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                    Beginner
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.9</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sales Fundamentals</h3>
                <p className="text-gray-600 mb-4">
                  Master the basics of successful selling with proven techniques and strategies.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    8 hours
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    2,345 students
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary-600">$89</span>
                  <Link to="/courses/sales-fundamentals" className="btn-primary text-sm">
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Course 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-secondary-500 to-secondary-700 flex items-center justify-center">
                <Target className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-secondary-100 text-secondary-800 text-xs px-2 py-1 rounded-full">
                    Intermediate
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.8</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Advanced Closing Techniques</h3>
                <p className="text-gray-600 mb-4">
                  Learn powerful closing strategies that top performers use to seal deals.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    12 hours
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    1,876 students
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary-600">$149</span>
                  <Link to="/courses/closing-techniques" className="btn-primary text-sm">
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Course 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
                <TrendingUp className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                    Advanced
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">5.0</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sales Leadership Mastery</h3>
                <p className="text-gray-600 mb-4">
                  Transform into a sales leader who inspires teams and drives results.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    16 hours
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    987 students
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary-600">$299</span>
                  <Link to="/courses/sales-leadership" className="btn-primary text-sm">
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/courses" className="btn-outline inline-flex items-center">
              View All Courses
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from professionals who've transformed their careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The sales fundamentals course completely changed my approach to selling. 
                I increased my conversion rate by 150% in just 3 months!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">SM</span>
                </div>
                <div>
                  <div className="font-semibold">Sarah Martinez</div>
                  <div className="text-sm text-gray-500">Sales Representative</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The advanced closing techniques gave me the confidence to handle any objection. 
                I've closed deals I never thought possible."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">MJ</span>
                </div>
                <div>
                  <div className="font-semibold">Michael Johnson</div>
                  <div className="text-sm text-gray-500">Account Manager</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Sales Mastery Hub helped me transition from individual contributor to sales manager. 
                The leadership course was invaluable."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">EL</span>
                </div>
                <div>
                  <div className="font-semibold">Emily Lee</div>
                  <div className="text-sm text-gray-500">Sales Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Sales Career?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of successful sales professionals and start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="btn-secondary">
              Get Started Free
            </Link>
            <Link to="/courses" className="btn-outline text-white border-white hover:bg-white hover:text-primary-900">
              Browse Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}