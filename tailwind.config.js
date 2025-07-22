
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Skill container colors
    'from-red-50', 'to-pink-50', 'text-red-600',
    'from-blue-50', 'to-cyan-50', 'text-blue-600',
    'from-green-50', 'to-emerald-50', 'text-green-600',
    'from-purple-50', 'to-violet-50', 'text-purple-600',
    'from-orange-50', 'to-amber-50', 'text-orange-600',
    'from-indigo-50', 'text-indigo-600',
    // Bright solid tag colors
    'bg-blue-500', 'bg-orange-500', 'bg-green-500', 'bg-purple-500',
    'bg-red-500', 'bg-indigo-500', 'bg-pink-500', 'bg-cyan-500',
    'bg-amber-500', 'bg-teal-500', 'bg-slate-500',
    'text-white'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}