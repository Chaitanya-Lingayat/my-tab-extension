import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Button } from '../ui/button';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

// Import all JSON data
import problemsData from './bfe-data/problem.json';
import reactData from './bfe-data/react.json';
import questionData from './bfe-data/question.json';
import designData from './bfe-data/design.json';

interface Problem {
    id: number;
    title: string;
    url: string;
    difficulty?: string;
    companies?: Array<{
        id: number;
        name: string;
        logo?: string;
    }>;
    tags?: string;
    likes?: number;
    permalink?: string;
}

interface Section {
    id: string;
    name: string;
    data: any;
    urlPrefix: string;
}

export function BigFrontEndWidget() {
    const [problems, setProblems] = useState<Problem[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [currentSection, setCurrentSection] = useState<string>('javascript');

    const sections: Section[] = [
        {
            id: 'javascript',
            name: 'JavaScript Coding',
            data: problemsData,
            urlPrefix: 'problem'
        },
        {
            id: 'react',
            name: 'React Coding',
            data: reactData,
            urlPrefix: 'react'
        },
        {
            id: 'interview',
            name: 'Front-End Interview',
            data: questionData,
            urlPrefix: 'question'
        },
        {
            id: 'design',
            name: 'System Design',
            data: designData,
            urlPrefix: 'design'
        }
    ];

    useEffect(() => {
        const currentSectionData = sections.find(s => s.id === currentSection);
        if (!currentSectionData) return;

        // Reset index when changing sections
        setCurrentIndex(0);
        setIsLoading(true);

        // Transform the local data into our Problem format
        const transformedProblems = currentSectionData.data.pageProps.items.map((p: any) => ({
            id: p.id,
            title: p.title,
            url: `https://bigfrontend.dev/${currentSectionData.urlPrefix}/${p.permalink}`,
            difficulty: p.difficulty,
            companies: p.companies,
            tags: p.tags,
            likes: p.likes
        }));

        setProblems(transformedProblems);
        setIsLoading(false);
    }, [currentSection]);

    const currentProblem = problems[currentIndex] || {
        id: 1,
        title: "Loading...",
        url: "#"
    };

    const nextProblem = () => {
        setCurrentIndex((prev) => (prev + 1) % problems.length);
    };

    const previousProblem = () => {
        setCurrentIndex((prev) => (prev - 1 + problems.length) % problems.length);
    };

    const openProblem = () => {
        window.open(currentProblem.url, '_blank');
    };

    const getDifficultyColor = (difficulty?: string) => {
        switch (difficulty?.toLowerCase()) {
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

    return (
        <Card className="w-full h-full bg-transparent min-h-[400px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex items-center space-x-2">
                    <h3 className="font-bold text-lg">BigFrontEnd.dev</h3>
                </div>
                <div className="flex items-center space-x-4">
                    <select
                        className="text-sm bg-transparent border rounded px-1 py-1 w-[180px]"
                        value={currentSection}
                        onChange={(e) => setCurrentSection(e.target.value)}
                    >
                        {sections.map((section) => (
                            <option key={section.id} value={section.id}>
                                {section.name}
                            </option>
                        ))}
                    </select>
                    {!isLoading && (
                        <span className="text-sm text-muted-foreground">
                            {currentIndex + 1} / {problems.length}
                        </span>
                    )}
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex flex-col space-y-2">
                        <div className="flex justify-between items-center">
                            <p className="text-sm font-medium">Problem #{currentProblem.id}:</p>
                            {currentProblem.difficulty && (
                                <span className={`text-sm font-medium ${getDifficultyColor(currentProblem.difficulty)}`}>
                                    {currentProblem.difficulty}
                                </span>
                            )}
                        </div>
                        <p className="text-base">{currentProblem.title}</p>
                        {currentProblem.tags && (
                            <p className="text-xs text-muted-foreground">
                                Tags: {currentProblem.tags}
                            </p>
                        )}
                        {currentProblem.companies && currentProblem.companies.length > 0 && (
                            <p className="text-xs text-muted-foreground">
                                Companies: {currentProblem.companies.map(c => c.name).join(', ')}
                            </p>
                        )}
                        {currentProblem.likes !== undefined && (
                            <p className="text-xs text-muted-foreground">
                                ❤️ {currentProblem.likes}
                            </p>
                        )}
                    </div>
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={previousProblem}
                            disabled={isLoading || problems.length === 0}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            className="flex-1 flex items-center justify-center gap-2"
                            onClick={openProblem}
                            disabled={isLoading}
                        >
                            Practice Now
                            <ExternalLink className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={nextProblem}
                            disabled={isLoading || problems.length === 0}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
} 