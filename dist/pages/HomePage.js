"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomePage;
const react_1 = __importDefault(require("react"));
function HomePage() {
    return (<div className="min-h-screen">
      
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                Master Sales,<br />
                <span className="text-yellow-400">Master Your Career</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Join thousands of sales professionals across India who are advancing their careers with our comprehensive training programs.
              </p>
              
              
              <div className="bg-white rounded-lg p-2 mb-8 max-w-md">
                <div className="flex">
                  <input type="text" placeholder="Search courses..." className="flex-1 px-4 py-2 text-gray-900 focus:outline-none"/>
                  <button className="btn-primary">Search</button>
                </div>
              </div>
              
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="/register" className="btn-secondary">Start Learning Today</a>
                <a href="/courses" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                  Browse Courses
                </a>
              </div>
            </div>
            
            <div className="relative">
              <img src="/api/placeholder/600/400" alt="Sales Training" className="rounded-lg shadow-2xl"/>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (<div key={index} className="card text-center hover-lift cursor-pointer">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-semibold mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.courses} courses</p>
              </div>))}
          </div>
        </div>
      </section>

      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (<div key={index} className="card hover-lift">
                <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover rounded-lg mb-4"/>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="text-sm text-gray-600 ml-2">{course.rating} ({course.reviews} reviews)</span>
                </div>
                <h3 className="font-semibold mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{course.instructor}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary-600">₹{course.price}</span>
                  <button className="btn-primary">Enroll Now</button>
                </div>
              </div>))}
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (<div key={index} className="card text-center">
                <img src={story.avatar} alt={story.name} className="w-16 h-16 rounded-full mx-auto mb-4"/>
                <h3 className="font-semibold mb-2">{story.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{story.role}</p>
                <p className="italic text-gray-700">"{story.testimonial}"</p>
                <div className="mt-4 text-sm text-primary-600 font-semibold">
                  {story.achievement}
                </div>
              </div>))}
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">50,000+</div>
              <div className="text-gray-300">Active Learners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-gray-300">Expert Courses</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">85%</div>
              <div className="text-gray-300">Job Placement Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">1000+</div>
              <div className="text-gray-300">Companies Hiring</div>
            </div>
          </div>
        </div>
      </section>
    </div>);
}
const categories = [
    { name: 'Sales Fundamentals', icon: '📈', courses: 45 },
    { name: 'Communication', icon: '💬', courses: 38 },
    { name: 'Negotiation', icon: '🤝', courses: 25 },
    { name: 'Digital Sales', icon: '💻', courses: 32 },
    { name: 'Leadership', icon: '👑', courses: 28 },
];
const featuredCourses = [
    {
        title: 'Complete Sales Mastery Course',
        instructor: 'Rahul Sharma',
        rating: 4.8,
        reviews: 1247,
        price: 2999,
        thumbnail: '/api/placeholder/300/200',
    },
    {
        title: 'Advanced B2B Sales Strategies',
        instructor: 'Priya Patel',
        rating: 4.9,
        reviews: 856,
        price: 3999,
        thumbnail: '/api/placeholder/300/200',
    },
    {
        title: 'Customer Psychology & Persuasion',
        instructor: 'Arjun Singh',
        rating: 4.7,
        reviews: 623,
        price: 2499,
        thumbnail: '/api/placeholder/300/200',
    },
];
const successStories = [
    {
        name: 'Amit Kumar',
        role: 'Sales Manager at TechCorp',
        avatar: '/api/placeholder/100/100',
        testimonial: 'This platform transformed my career. I went from fresher to sales manager in just 18 months.',
        achievement: '300% salary increase',
    },
    {
        name: 'Sneha Reddy',
        role: 'Regional Sales Director',
        avatar: '/api/placeholder/100/100',
        testimonial: 'The practical training and real-world scenarios made all the difference in my success.',
        achievement: 'Promoted to Director level',
    },
    {
        name: 'Vikash Gupta',
        role: 'Enterprise Sales Lead',
        avatar: '/api/placeholder/100/100',
        testimonial: 'Outstanding courses with industry experts. Highly recommend for anyone in sales.',
        achievement: 'Top performer 2023',
    },
];
//# sourceMappingURL=HomePage.js.map