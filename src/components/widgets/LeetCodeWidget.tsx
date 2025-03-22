import { ChevronDown, ChevronUp, ExternalLink, RefreshCw } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';
import { getCategories, getProblemsByCategory, getRandomProblem } from './leetcode-problems';

interface Example {
    input: string;
    output: string;
    explanation?: string;
}

interface DailyProblem {
    titleSlug: string;
    title: string;
    difficulty: string;
    acRate: number;
    statement: string;
    category: string;
    examples: Example[];
}

export function LeetCodeWidget() {
    const [problem, setProblem] = useState<DailyProblem | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [showExamples, setShowExamples] = useState(true);
    const categories = ['All', ...getCategories()];

    useEffect(() => {
        handleRefresh();
    }, [selectedCategory]);

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty.toLowerCase()) {
            case 'easy':
                return 'text-green-500';
            case 'medium':
                return 'text-yellow-500';
            case 'hard':
                return 'text-red-500';
            default:
                return 'text-gray-500';
        }
    };

    const handleRefresh = () => {
        setLoading(true);
        setTimeout(() => {
            if (selectedCategory === 'All') {
                setProblem(getRandomProblem());
            } else {
                const categoryProblems = getProblemsByCategory(selectedCategory);
                const randomProblem = categoryProblems[Math.floor(Math.random() * categoryProblems.length)];
                setProblem(randomProblem);
            }
            setLoading(false);
            setShowExamples(true);
        }, 300);
    };

    return (
        <Card className="w-full h-full bg-transparent">
            <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 pb-2">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
                    <div className="font-bold text-base">Blind 75</div>
                    <select
                        className="text-sm bg-transparent border rounded px-1 py-1 w-full sm:w-auto"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
                <Button variant="ghost" size="icon" onClick={handleRefresh} className="h-8 w-8 p-0">
                    <RefreshCw className="h-4 w-4" />
                </Button>
            </CardHeader>
            <CardContent>
                {loading ? (
                    <div className="text-sm text-gray-500">Loading...</div>
                ) : problem ? (
                    <div className="space-y-3">
                        <div className="text-base sm:text-sm font-medium">{problem.title}</div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-0">
                            <span className={`${getDifficultyColor(problem.difficulty)} text-base sm:text-sm`}>
                                {problem.difficulty}
                            </span>
                            <span className="text-gray-500 text-base sm:text-sm">
                                {(problem.acRate).toFixed(1)}% Acceptance
                            </span>
                        </div>
                        <div className="text-base sm:text-sm text-gray-600 dark:text-gray-400">
                            {problem.statement}
                        </div>
                        <div className="flex items-center justify-start">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-sm sm:text-xs text-gray-500 p-0 h-8 sm:h-6 justify-start"
                                onClick={() => setShowExamples(!showExamples)}
                            >
                                {showExamples ? (
                                    <ChevronUp className="h-4 w-4 mr-1" />
                                ) : (
                                    <ChevronDown className="h-4 w-4 mr-1" />
                                )}
                                Examples
                            </Button>
                        </div>
                        {showExamples && problem.examples && problem.examples.length > 0 && (
                            <div className="mt-2 space-y-3 border-t pt-2">
                                {problem.examples.map((example, index) => (
                                    <div key={index} className="text-base sm:text-sm">
                                        <div className="font-medium text-gray-600 dark:text-gray-400">
                                            Example {index + 1}:
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-400 break-words">
                                            Input: {example.input}
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-400 break-words">
                                            Output: {example.output}
                                        </div>
                                        {example.explanation && (
                                            <div className="text-gray-500 dark:text-gray-500 text-sm sm:text-xs mt-1 break-words">
                                                {example.explanation}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className="mt-4">
                            <Button
                                variant="outline"
                                size="sm"
                                className="w-full h-8 sm:h-6 text-sm sm:text-xs"
                                onClick={() => window.open(`https://leetcode.com/problems/${problem.titleSlug}`, '_blank')}
                            >
                                Solve
                                <ExternalLink className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="text-base sm:text-sm text-gray-500">Failed to load problem</div>
                )}
            </CardContent>
        </Card>
    );
} 