import { Link } from 'react-router-dom'
import { 
  PaintBrush, 
  Sparkle, 
  Lightning, 
  ShieldCheck, 
  Camera,
  MagicWand,
  PencilCircle,
  Books,
  ShoppingCart
} from 'phosphor-react'

export default function Home() {
  return (
    <div className="font-fredoka">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center py-16 sm:py-20">
          <div className="flex justify-center mb-6">
            <MagicWand size={64} weight="duotone" className="text-primary" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="gradient-text">Create from your imagination</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Turn your child's wildest ideas into magical coloring pages using the power of AI
          </p>
          <Link
            to="/creator"
            className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors duration-200 inline-flex items-center gap-2"
          >
            <PaintBrush size={24} weight="duotone" />
            Start Creating Now
          </Link>
        </div>

        {/* Benefits Grid */}
        <div className="pb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-200">
            <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck size={32} weight="duotone" className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Safe for Kids</h3>
            <p className="text-gray-600">Guaranteed child-friendly content and designs</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-200">
            <div className="bg-secondary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera size={32} weight="duotone" className="text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Make it Personal</h3>
            <p className="text-gray-600">Create unique story and images for your child</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-200">
            <div className="bg-accent bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightning size={32} weight="duotone" className="text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Endless Possibilities</h3>
            <p className="text-gray-600">Any idea can become a coloring book</p>
          </div>
        </div>

        {/* How It Works */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
            <Sparkle size={32} weight="duotone" className="text-primary" />
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center transform hover:scale-105 transition-transform duration-200">
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <PencilCircle size={32} weight="duotone" className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Describe Your Idea</h3>
              <p className="text-gray-600">Tell us your story or upload photos</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-200">
              <div className="bg-secondary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Books size={32} weight="duotone" className="text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Generate Book Pages</h3>
              <p className="text-gray-600">Watch your story come to life</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-200">
              <div className="bg-accent bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart size={32} weight="duotone" className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Order Your Book</h3>
              <p className="text-gray-600">Get your personalized coloring book</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
