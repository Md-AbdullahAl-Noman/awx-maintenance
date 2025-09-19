export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00b8b0] to-[#0098da] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 transform hover:scale-105 transition-transform duration-300">
          {/* Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-[#00b8b0] to-[#0098da] rounded-full mb-4">
              <span className="text-4xl">🔧</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            We're Making Things Better! ✨
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            <span className="text-2xl">🚀</span> Autoworx is currently under maintenance
          </p>

          {/* Description */}
          <div className="bg-gradient-to-r from-[#00b8b0] to-[#0098da] text-white rounded-lg p-6 mb-8">
            <p className="text-lg md:text-xl font-medium">
              We're working hard to improve your experience! 💪
            </p>
            <p className="text-sm md:text-base mt-2 opacity-90">
              Our team is implementing exciting new features and enhancements
            </p>
          </div>

          {/* Features List */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl mb-2">⚡</div>
              <p className="text-sm font-medium text-gray-700">Faster Performance</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl mb-2">🎨</div>
              <p className="text-sm font-medium text-gray-700">Better Design</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl mb-2">🔒</div>
              <p className="text-sm font-medium text-gray-700">Enhanced Security</p>
            </div>
          </div>

          {/* Loading Animation */}
          <div className="mb-8">
            <div className="flex justify-center items-center space-x-2">
              <div className="w-3 h-3 bg-[#00b8b0] rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-[#0098da] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-3 h-3 bg-[#00b8b0] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
            <p className="text-gray-500 mt-2">Working on it...</p>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-600">
              <span className="text-lg">⏰</span> Expected return: Soon!
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Thank you for your patience 🙏
            </p>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 text-white text-center">
          <p className="text-lg font-medium opacity-90">
            Follow us for updates: 
            <span className="ml-2">📧 📱 🌐</span>
          </p>
        </div>
      </div>
    </div>
  );
}