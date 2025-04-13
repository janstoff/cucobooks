import { Link, Outlet, useLocation } from 'react-router-dom'
import { 
  PaintBrush, 
  House, 
  Notebook, 
  Users 
} from 'phosphor-react'

export default function Layout() {
  const location = useLocation()
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary border-primary' : 'text-gray-600 border-transparent hover:border-gray-300'
  }

  return (
    <div className="min-h-screen bg-background font-fredoka">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                <PaintBrush size={32} weight="duotone" className="text-primary" />
                <span className="text-2xl font-bold gradient-text">CuCoBooks</span>
              </Link>
              <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
                <Link 
                  to="/" 
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 gap-2 ${isActive('/')}`}
                >
                  <House size={20} weight="duotone" />
                  Home
                </Link>
                <Link 
                  to="/creator" 
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 gap-2 ${isActive('/creator')}`}
                >
                  <PaintBrush size={20} weight="duotone" />
                  Create
                </Link>
                <Link 
                  to="/pricing" 
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 gap-2 ${isActive('/pricing')}`}
                >
                  <Notebook size={20} weight="duotone" />
                  Pricing
                </Link>
                <Link 
                  to="/about" 
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 gap-2 ${isActive('/about')}`}
                >
                  <Users size={20} weight="duotone" />
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
