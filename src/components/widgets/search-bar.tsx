import { useState, KeyboardEvent, useEffect, useRef } from 'react';
import { Search, Command, Bot, Brain, Search as SearchIcon, Briefcase, Laptop, BookOpen, Zap, Mail, FolderOpen, FileText, Table, Presentation, Duck, Youtube, Lightbulb } from 'lucide-react';

interface SearchEngine {
    prefix: string;
    url: string;
    name: string;
    icon: React.ReactNode;
}

const searchEngines: SearchEngine[] = [
    // AI and Learning
    // { prefix: 'gpt', url: 'https://chat.openai.com/chat?prompt=', name: 'ChatGPT', icon: <Bot className="w-4 h-4" /> },
    { prefix: 'gpt', url: 'https://chatgpt.com?prompt=', name: 'ChatGPT', icon: <Bot className="w-4 h-4" /> },
    { prefix: 'cld', url: 'https://claude.ai/new?q=', name: 'Claude', icon: <Brain className="w-4 h-4" /> },
    { prefix: 'perp', url: 'https://www.perplexity.ai/search/new?q=', name: 'Perplexity', icon: <SearchIcon className="w-4 h-4" /> },

    // Professional
    { prefix: 'link', url: 'https://www.linkedin.com/search/results/all/?keywords=', name: 'LinkedIn', icon: <Briefcase className="w-4 h-4" /> },
    { prefix: 'naukri', url: 'https://www.naukri.com/?q=', name: 'Naukri.com', icon: <Laptop className="w-4 h-4" /> },

    // Development
    { prefix: 'gh', url: 'https://github.com/search?q=', name: 'GitHub', icon: <BookOpen className="w-4 h-4" /> },
    { prefix: 'lc', url: 'https://leetcode.com/problemset/all/?search=', name: 'LeetCode', icon: <Zap className="w-4 h-4" /> },

    // Google Services
    { prefix: 'gmail', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=&su=&body=', name: 'Gmail', icon: <Mail className="w-4 h-4" /> },
    { prefix: 'drive', url: 'https://drive.google.com/drive/search?q=', name: 'Google Drive', icon: <FolderOpen className="w-4 h-4" /> },
    { prefix: 'docs', url: 'https://docs.google.com/document/create?title=', name: 'Google Docs', icon: <FileText className="w-4 h-4" /> },
    { prefix: 'sheets', url: 'https://sheets.google.com/create?title=', name: 'Google Sheets', icon: <Table className="w-4 h-4" /> },
    { prefix: 'slides', url: 'https://slides.google.com/create?title=', name: 'Google Slides', icon: <Presentation className="w-4 h-4" /> },

    // Search
    { prefix: 'ddg', url: 'https://duckduckgo.com/?q=', name: 'DuckDuckGo', icon: <SearchIcon className="w-4 h-4" /> },
    { prefix: 'yt', url: 'https://www.youtube.com/results?search_query=', name: 'YouTube', icon: <Youtube className="w-4 h-4" /> },
    { prefix: 'stack', url: 'https://stackoverflow.com/search?q=', name: 'Stack Overflow', icon: <Lightbulb className="w-4 h-4" /> },
];

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState<SearchEngine[]>([]);
    const [isFocused, setIsFocused] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto focus the input when component mounts
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    // Add global keyboard shortcut for Command/Ctrl + K
    useEffect(() => {
        const handleKeyDown = (e: globalThis.KeyboardEvent) => {
            // Check for Command (Mac) or Ctrl (Windows/Linux) + K
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault(); // Prevent default browser behavior
                inputRef.current?.focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleSearch = (query: string) => {
        // Check if the query ends with a bang operator
        const bangMatch = query.match(/\s!(\w+)$/);

        if (bangMatch) {
            const prefix = bangMatch[1].toLowerCase();
            const searchEngine = searchEngines.find(engine => engine.prefix === prefix);

            if (searchEngine) {
                const searchTerm = query.slice(0, -bangMatch[0].length).trim();
                window.open(`${searchEngine.url}${encodeURIComponent(searchTerm)}`, '_blank');
                return;
            }
        }

        // Default to Google search
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (selectedIndex >= 0 && suggestions[selectedIndex]) {
                const searchTerm = searchQuery.replace(/\s!\w+$/, '').trim();
                window.open(`${suggestions[selectedIndex].url}${encodeURIComponent(searchTerm)}`, '_blank');
            } else {
                handleSearch(searchQuery);
            }
        } else if (e.key === 'ArrowDown' && selectedIndex < suggestions.length - 1) {
            setSelectedIndex(prev => prev + 1);
        } else if (e.key === 'ArrowUp' && selectedIndex > 0) {
            setSelectedIndex(prev => prev - 1);
        } else if (e.key === 'Escape') {
            setSuggestions([]);
            setSelectedIndex(-1);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        setSelectedIndex(-1);

        // Check if the query ends with a bang operator
        const bangMatch = query.match(/\s!(\w+)$/);

        if (bangMatch) {
            const prefix = bangMatch[1].toLowerCase();
            const matches = searchEngines.filter(engine =>
                engine.prefix.startsWith(prefix)
            );
            setSuggestions(matches);
        } else {
            setSuggestions([]);
        }
    };

    // Close suggestions when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            const suggestionsDropdown = document.querySelector('.suggestions-dropdown');

            // Don't close if clicking on suggestions or input
            if (inputRef.current?.contains(target) || suggestionsDropdown?.contains(target)) {
                return;
            }

            // Small delay to allow click events to fire first
            setTimeout(() => {
                setIsFocused(false);
            }, 100);
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative w-full flex justify-center px-4 sm:px-0">
            <div className="relative group w-full sm:w-96 transition-all duration-200 ease-in-out transform-gpu">
                <input
                    ref={inputRef}
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onFocus={() => {
                        setIsFocused(true);
                        // Add scale and shadow effect on focus
                        const input = inputRef.current;
                        if (input) {
                            input.parentElement?.classList.add('scale-105', 'shadow-lg', 'shadow-blue-500/20', 'dark:shadow-blue-500/10');
                        }
                    }}
                    onBlur={() => {
                        // Remove scale and shadow effect on blur
                        const input = inputRef.current;
                        if (input) {
                            input.parentElement?.classList.remove('scale-105', 'shadow-lg', 'shadow-blue-500/20', 'dark:shadow-blue-500/10');
                        }
                    }}
                    placeholder="Search query !gpt, !claude, !perplexity, !linkedin, !github, !ddg"
                    className="w-full px-4 py-2 pl-10 pr-20 text-sm border rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 
                             dark:bg-gray-800 dark:border-gray-700 dark:text-white
                             transition-all duration-200 ease-in-out
                             group-hover:border-blue-300 dark:group-hover:border-blue-600
                             group-hover:shadow-md group-hover:shadow-blue-500/10 dark:group-hover:shadow-blue-500/5"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 transition-transform duration-200 ease-in-out group-focus-within:scale-110" />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1 transition-transform duration-200 ease-in-out group-focus-within:scale-110">
                    <Command className="h-3 w-3 text-gray-400" />
                    <span className="text-xs text-gray-400">K</span>
                </div>
            </div>
            {suggestions.length > 0 && isFocused && (
                <div className="absolute z-50 w-[calc(100%-2rem)] sm:w-96 mt-11 bg-white dark:bg-gray-800 
                              border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg
                              overflow-hidden animate-in fade-in slide-in-from-top-1 suggestions-dropdown">
                    {suggestions.map((engine, index) => (
                        <button
                            key={engine.prefix}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                const searchTerm = searchQuery.replace(/\s!\w+$/, '').trim();
                                handleSearch(`${searchTerm} !${engine.prefix}`);
                                setSearchQuery('');
                                setSuggestions([]);
                                setSelectedIndex(-1);
                            }}
                            className={`w-full px-4 py-2 text-left text-sm flex items-center gap-2
                                     transition-colors duration-150 ease-in-out
                                     ${index === selectedIndex
                                    ? 'bg-blue-50 dark:bg-blue-900/30'
                                    : 'hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                        >
                            <span className="text-gray-500 dark:text-gray-400">{engine.icon}</span>
                            <span className="font-medium">{engine.name}</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
                                {engine.prefix}
                            </span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar; 