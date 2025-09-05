import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

export interface DropdownSearchOption {
  label: string
  id: number | string
}

interface DebouncedSearchDropdownProps {
  title?: string
  selected?: DropdownSearchOption
  value?: DropdownSearchOption
  onChange: (option: DropdownSearchOption) => void
  fetchOptions: (
    query?: string
  ) => Promise<DropdownSearchOption[]> | DropdownSearchOption[]
  required?: boolean
  disabled?: boolean
  className?: string
  delay?: number
  isLoading?: boolean
  placeholder?: string
  direction?: 'down' | 'up' | 'left' | 'right'
  limit?: number
}

const DebouncedSearchDropdown: React.FC<DebouncedSearchDropdownProps> = ({
  title,
  selected,
  value,
  onChange,
  fetchOptions,
  required = false,
  disabled = false,
  className = '',
  delay = 400,
  limit = 5,
  isLoading: externalLoading = false,
  placeholder = 'Type to search...',
  direction = 'down',
}) => {
  const selectedOption = selected ?? value ?? { id: '', label: '' }

  const [isOpen, setIsOpen] = useState(false)
  const [shake, setShake] = useState(false)
  const [wasSubmitted, setWasSubmitted] = useState(false)
  const [highlightIndex, setHighlightIndex] = useState<number>(-1)
  const [query, setQuery] = useState<string>(selectedOption.label ?? '')
  const [options, setOptions] = useState<DropdownSearchOption[]>([])
  const [loading, setLoading] = useState(false)
  const [fullLoading, setFullLoading] = useState(true) // NEW: loading for initial preload

  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [fullOptions, setFullOptions] = useState<DropdownSearchOption[]>([])

  // Preload all options once
  useEffect(() => {
    let alive = true
    const loadAll = async () => {
      try {
        setFullLoading(true) // NEW
        const maybe = fetchOptions('')
        const resolved =
          maybe && typeof (maybe as any).then === 'function'
            ? await (maybe as any)
            : (maybe as any)
        if (!alive) return
        setFullOptions(resolved || [])
      } catch {
        if (!alive) return
        setFullOptions([])
      } finally {
        if (alive) setFullLoading(false) // NEW
      }
    }
    loadAll()
    return () => {
      alive = false
    }
  }, [fetchOptions])

  const filterAndSortOptions = (qStr: string) => {
    if (!qStr) return fullOptions
    const q = qStr.toLowerCase()
    return [...fullOptions]
      .map((o) => {
        const label = o.label.toLowerCase()
        let score = 0
        if (label.startsWith(q)) score += 3
        if (label.includes(q)) score += 1
        return { ...o, _score: score }
      })
      .filter((o: any) => o._score > 0)
      .sort((a: any, b: any) => b._score - a._score)
  }

  // keep input in sync
  useEffect(() => {
    if ((selectedOption.label ?? '') !== query) {
      setQuery(selectedOption.label ?? '')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption?.id, selectedOption?.label])

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false)
        setHighlightIndex(-1)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // native validation shake
  useEffect(() => {
    const inputId = `dropdown-hidden-${title}`
    const input = document.getElementById(inputId)
    const onInvalid = (ev: Event) => {
      ev.preventDefault()
      setWasSubmitted(true)
      setShake(true)
      setTimeout(() => setShake(false), 400)
    }
    input?.addEventListener('invalid', onInvalid)
    return () => input?.removeEventListener('invalid', onInvalid)
  }, [selectedOption?.id, required, title])

  // scroll highlighted into view
  useEffect(() => {
    if (highlightIndex >= 0 && optionRefs.current[highlightIndex]) {
      optionRefs.current[highlightIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      })
    }
  }, [highlightIndex])

  useEffect(() => {
    optionRefs.current = []
  }, [options])

  // Debounced client-side filter
// Debounced client-side filter
useEffect(() => {
  if (!isOpen) return

  if (query.trim() === '') {
    // if query is empty → show all preloaded options without debounce
    setOptions(limit ? fullOptions.slice(0, limit) : fullOptions)
    setLoading(false)
    return
  }

  setLoading(true) // NEW: only set loading if non-empty query

  const handler = setTimeout(() => {
    const filtered = filterAndSortOptions(query)
    setOptions(limit ? filtered.slice(0, limit) : filtered)
    setLoading(false)
  }, delay)

  return () => clearTimeout(handler)
}, [query, delay, isOpen, fullOptions, limit])

  const handleSelect = (option: DropdownSearchOption) => {
    onChange(option)
    setQuery(option.label)
    setOptions([])
    setIsOpen(false)
    setHighlightIndex(-1)
    setWasSubmitted(false)
  }

  const getDirectionClass = () => {
    switch (direction) {
      case 'up':
        return 'bottom-full mb-2'
      case 'left':
        return 'right-full mr-2 top-0'
      case 'right':
        return 'left-full ml-2 top-0'
      case 'down':
      default:
        return 'top-full mt-2'
    }
  }

  const isInvalid =
    required &&
    (selectedOption.id === 0 ||
      selectedOption.id === '' ||
      selectedOption.id == null) &&
    wasSubmitted

  // keyboard nav
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        setIsOpen(true)
        setHighlightIndex(0)
        e.preventDefault()
      }
      return
    }

    if (e.key === 'ArrowDown') {
      setHighlightIndex((prev) =>
        options.length ? (prev + 1) % options.length : 0
      )
      e.preventDefault()
    } else if (e.key === 'ArrowUp') {
      setHighlightIndex((prev) =>
        options.length ? (prev <= 0 ? options.length - 1 : prev - 1) : 0
      )
      e.preventDefault()
    } else if (e.key === 'Enter') {
      if (highlightIndex >= 0 && options[highlightIndex]) {
        handleSelect(options[highlightIndex])
      } else if (options.length > 0) {
        handleSelect(options[0])
      }
      e.preventDefault()
    } else if (e.key === 'Escape') {
      setIsOpen(false)
      setHighlightIndex(-1)
    }
  }

return (
  <div
    className={`flex flex-col gap-2 w-full ${className}`}
    ref={dropdownRef}
    tabIndex={0}
    onKeyDown={handleKeyDown}
  >
    {title && (
      <label className="text-gray-800 text-sm font-medium">
        {title}
        {required && <span className="text-[#003579] ml-1">*</span>}
      </label>
    )}

    {/* hidden input for native form validation */}
    <input
      id={`dropdown-hidden-${title}`}
      type="hidden"
      required={required}
      value={selectedOption.id ?? ''}
      onChange={() => {}}
      disabled={disabled}
    />

    <div
      onClick={() => {
        if (!disabled) {
          setIsOpen(true)
          setLoading(true)
        }
      }}
      className={`relative flex items-center rounded-md border border-gray-300 px-3 py-2 text-sm transition
        ${disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : 'bg-white cursor-text'}
        ${isInvalid ? 'border-red-500' : ''}
        ${isOpen ? 'focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500' : ''}`}
    >
      <input
        type="text"
        value={query}
        disabled={disabled}
        onFocus={() => {
          setIsOpen(true)
          setLoading(true)
        }}
        onChange={(e) => {
          setQuery(e.target.value)
          setIsOpen(true)
        }}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm placeholder-gray-400 text-gray-800 focus:outline-none"
      />
    </div>

    {isOpen && (
      <div
        className={`absolute z-10 mt-1 max-h-[200px] w-full overflow-y-auto rounded-md border border-gray-200 bg-white shadow-lg custom-scrollbar`}
      >
        {(loading || externalLoading || fullLoading) && query.trim() !== '' ? (
          <div className="flex items-center gap-2 p-3 text-sm text-gray-500">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="h-4 w-4"
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </motion.div>
            Searching for "{query}"...
          </div>
        ) : options.length > 0 ? (
          options.map((option, idx) => (
            <button
              key={`${option.id}-${idx}`}
              ref={(el) => {
                optionRefs.current[idx] = el
              }}
              onClick={() => handleSelect(option)}
              type="button"
              className={`flex w-full cursor-pointer items-center justify-between px-4 py-2 text-sm
                ${highlightIndex === idx ? 'bg-gray-100' : ''}
                ${selectedOption?.id === option.id ? 'font-semibold text-blue-600' : 'text-gray-700'}
                hover:bg-gray-100`}
            >
              <span>{option.label}</span>
              {selectedOption?.id === option.id && (
                <img src="/icons/tick-icon-dark.svg" alt="Selected" className="h-4 w-4" />
              )}
            </button>
          ))
        ) : (
          <div className="px-4 py-2 text-sm text-gray-500">No results found</div>
        )}
      </div>
    )}


  </div>
)

}

export default DebouncedSearchDropdown
