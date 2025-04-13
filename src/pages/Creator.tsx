import { useState, useRef, useEffect } from 'react'
import { 
  PencilCircle, 
  Image, 
  Download, 
  MagicWand, 
  Trash, 
  ArrowsClockwise,
  SquaresFour,
  Rows,
  BookOpen,
  CaretDown,
  CaretUp
} from 'phosphor-react'

type Gender = 'boy' | 'girl'
type Style = 'comic' | 'realistic' | 'anime' | 'watercolor'
type StoryTheme = 'hero' | 'friendship' | 'helping' | 'adventure' | 'magic' | 'nature' | 'family' | 'learning' | 'animals'
type PageCount = 5 | 10

interface GeneratedImage {
  id: number
  url: string
}

interface PromptOptions {
  gender: Gender | null
  style: Style | null
  theme: StoryTheme | null
  pageCount: PageCount
}

const INITIAL_VISIBLE_THEMES = 4 // Show 2 rows with 2 themes each

export default function Creator() {
  const [prompt, setPrompt] = useState('')
  const [images, setImages] = useState<GeneratedImage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isGridView, setIsGridView] = useState(true)
  const [showAllThemes, setShowAllThemes] = useState(false)
  const [themesHeight, setThemesHeight] = useState('auto')
  const themesContainerRef = useRef<HTMLDivElement>(null)
  const [options, setOptions] = useState<PromptOptions>({
    gender: null,
    style: null,
    theme: null,
    pageCount: 5
  })

  const storyThemes = [
    { value: 'hero', label: 'Hero Adventure' },
    { value: 'friendship', label: 'Friendship' },
    { value: 'magic', label: 'Magical World' },
    { value: 'animals', label: 'Animal Friends' },
    { value: 'adventure', label: 'Exploration' },
    { value: 'nature', label: 'Nature Discovery' },
    { value: 'helping', label: 'Helping Others' },
    { value: 'family', label: 'Family Time' },
    { value: 'learning', label: 'Learning & Growth' },
  ]

  const visibleThemes = showAllThemes 
    ? storyThemes 
    : storyThemes.slice(0, INITIAL_VISIBLE_THEMES)

  useEffect(() => {
    if (themesContainerRef.current) {
      setThemesHeight(themesContainerRef.current.scrollHeight + 'px')
    }
  }, [showAllThemes])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Add API integration here
    setIsLoading(false)
  }

  const handleOptionSelect = (category: keyof PromptOptions, value: any) => {
    setOptions(prev => ({
      ...prev,
      [category]: prev[category] === value ? null : value
    }))
  }

  const OptionButton = ({ 
    category, 
    value, 
    label 
  }: { 
    category: keyof PromptOptions, 
    value: any, 
    label: string 
  }) => (
    <button
      type="button"
      onClick={() => handleOptionSelect(category, value)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
        options[category] === value 
          ? 'bg-primary text-white' 
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  )

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="h-[calc(100vh-3rem)] flex">
          {/* Left Panel - Instructions and Input */}
          <div className="w-1/2 p-8 overflow-y-auto border-r border-gray-200">
            <div className="max-w-xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <MagicWand size={32} weight="duotone" className="text-primary" />
                <h2 className="text-3xl font-bold gradient-text">Create Your Story</h2>
              </div>

              <div className="space-y-6">
                {/* Gender Selection */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Main Character</label>
                  <div className="flex gap-2">
                    <OptionButton category="gender" value="boy" label="Boy" />
                    <OptionButton category="gender" value="girl" label="Girl" />
                  </div>
                </div>

                {/* Story Theme */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Story Theme</label>
                  <div className="space-y-2">
                    <div 
                      ref={themesContainerRef}
                      className="overflow-hidden theme-transition"
                      style={{ height: showAllThemes ? themesHeight : '5rem' }}
                    >
                      <div className="flex flex-wrap gap-2">
                        {storyThemes.map(theme => (
                          <OptionButton
                            key={theme.value}
                            category="theme"
                            value={theme.value}
                            label={theme.label}
                          />
                        ))}
                      </div>
                    </div>
                    {storyThemes.length > INITIAL_VISIBLE_THEMES && (
                      <button
                        onClick={() => setShowAllThemes(!showAllThemes)}
                        className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors duration-200"
                      >
                        {showAllThemes ? (
                          <>
                            <CaretUp size={16} weight="bold" />
                            Show Less
                          </>
                        ) : (
                          <>
                            <CaretDown size={16} weight="bold" />
                            More Themes
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {/* Style Selection */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Art Style</label>
                  <div className="flex flex-wrap gap-2">
                    <OptionButton category="style" value="comic" label="Comic Book" />
                    <OptionButton category="style" value="realistic" label="Realistic" />
                    <OptionButton category="style" value="anime" label="Anime" />
                    <OptionButton category="style" value="watercolor" label="Watercolor" />
                  </div>
                </div>

                {/* Page Count */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Number of Pages</label>
                  <div className="flex gap-2">
                    <OptionButton category="pageCount" value={5} label="5 Pages" />
                    <OptionButton category="pageCount" value={10} label="10 Pages" />
                  </div>
                </div>

                {/* Story Description */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Story Description</label>
                  <div className="relative">
                    <textarea
                      className="w-full h-32 p-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors duration-200"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Describe your story... (e.g., 'A brave young girl discovers a magical garden and helps the fairy creatures protect their home')"
                    />
                    {prompt && (
                      <button
                        type="button"
                        onClick={() => setPrompt('')}
                        className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      >
                        <Trash size={20} weight="duotone" />
                      </button>
                    )}
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isLoading || !prompt.trim()}
                  className="w-full bg-primary text-white py-4 px-6 rounded-xl hover:bg-opacity-90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <ArrowsClockwise size={24} weight="duotone" className="animate-spin" />
                      Creating Your Story...
                    </>
                  ) : (
                    <>
                      <BookOpen size={24} weight="duotone" />
                      Generate Story Book
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel - Preview */}
          <div className="w-1/2 bg-gray-50 p-8 overflow-y-auto">
            <div className="max-w-xl mx-auto h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Image size={32} weight="duotone" className="text-primary" />
                  <h2 className="text-3xl font-bold gradient-text">Preview</h2>
                </div>
                
                <button
                  onClick={() => setIsGridView(!isGridView)}
                  className="p-2 text-gray-600 hover:text-primary transition-colors duration-200"
                  title={isGridView ? "Switch to single view" : "Switch to grid view"}
                >
                  {isGridView ? (
                    <SquaresFour size={24} weight="duotone" />
                  ) : (
                    <Rows size={24} weight="duotone" />
                  )}
                </button>
              </div>

              {images.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center text-gray-500 bg-white rounded-xl shadow-sm">
                  <BookOpen size={48} weight="duotone" className="text-gray-400 mb-4" />
                  <p className="text-xl">Your story pages will appear here</p>
                  <p className="text-sm mt-2">Fill in the details and generate your story</p>
                </div>
              ) : (
                <div className={`grid ${isGridView ? 'grid-cols-2 gap-4' : 'grid-cols-1 gap-6'}`}>
                  {images.map((image) => (
                    <div key={image.id} className="relative group">
                      <img
                        src={image.url}
                        alt={`Generated image ${image.id}`}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2">
                        <button 
                          className="bg-white p-2 rounded-full shadow-lg text-primary hover:text-primary/80 transition-colors duration-200"
                          title="Download"
                        >
                          <Download size={20} weight="duotone" />
                        </button>
                        <button 
                          className="bg-white p-2 rounded-full shadow-lg text-red-500 hover:text-red-600 transition-colors duration-200"
                          title="Delete"
                        >
                          <Trash size={20} weight="duotone" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
