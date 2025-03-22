import React from "react";

import { Dock, DockIcon } from "~/components/ui/dock";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function Docker() {
    const openLink = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50">
            <Dock magnification={40} distance={60}>
                <DockIcon
                    className="bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors duration-200 p-2 sm:p-3"
                    onClick={() => openLink('https://chat.openai.com')}
                >
                    <Icons.chatGPT className="size-full" />
                </DockIcon>
                <DockIcon
                    className="bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors duration-200 p-2 sm:p-3"
                    onClick={() => openLink('https://calendar.google.com')}
                >
                    <Icons.calendar className="size-full" />
                </DockIcon>
                <DockIcon
                    className="bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors duration-200 p-2 sm:p-3"
                    onClick={() => openLink('https://gmail.com')}
                >
                    <Icons.gmail className="size-full" />
                </DockIcon>
                <DockIcon
                    className="bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors duration-200 p-2 sm:p-3"
                    onClick={() => openLink('https://notion.so')}
                >
                    <Icons.notion className="size-full" />
                </DockIcon>
                <DockIcon
                    className="bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors duration-200 p-2 sm:p-3"
                    onClick={() => openLink('https://github.com')}
                >
                    <Icons.gitHub className="size-full" />
                </DockIcon>
                <DockIcon
                    className="bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors duration-200 p-2 sm:p-3"
                    onClick={() => openLink('https://drive.google.com')}
                >
                    <Icons.googleDrive className="size-full" />
                </DockIcon>
            </Dock>
        </div>
    );
}

const Icons = {
    chatGPT: (props: IconProps) => (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" fill="currentColor" />
        </svg>
    ),
    calendar: (props: IconProps) => (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M19.5 3h-3V1.5H15V3H9V1.5H7.5V3h-3C3.675 3 3 3.675 3 4.5v15c0 .825.675 1.5 1.5 1.5h15c.825 0 1.5-.675 1.5-1.5v-15c0-.825-.675-1.5-1.5-1.5zm0 16.5h-15v-9h15v9zm0-10.5h-15v-3h3V7.5H9V6h6v1.5h1.5V6h3v3z" fill="#4285F4" />
            <path d="M7.5 10.5h1.5V12H7.5v-1.5zm3.75 0h1.5V12h-1.5v-1.5zm3.75 0h1.5V12H15v-1.5zm-7.5 3h1.5V15H7.5v-1.5zm3.75 0h1.5V15h-1.5v-1.5zm3.75 0h1.5V15H15v-1.5zm-7.5 3h1.5V18H7.5v-1.5zm3.75 0h1.5V18h-1.5v-1.5zm3.75 0h1.5V18H15v-1.5z" fill="#4285F4" />
        </svg>
    ),
    gmail: (props: IconProps) => (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335" />
        </svg>
    ),
    notion: (props: IconProps) => (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.81 2.31c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-2.986-4.577c-.56-.84-.793-1.4-.793-2.146V3.504c0-1.26.887-2.286 2.304-2.47z" fill="currentColor" />
        </svg>
    ),
    gitHub: (props: IconProps) => (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor" />
        </svg>
    ),
    googleDrive: (props: IconProps) => (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M4.5 15.5l-2.25 4h19.5l-2.25-4z" fill="#2684FC" />
            <path d="M15.75 4L12 10.25 8.25 4h7.5z" fill="#FFBA00" />
            <path d="M15.75 4h-7.5L2.25 19.5h4.5L12 10.25 15.75 4z" fill="#00AC47" />
            <path d="M15.75 4l6 15.5h-4.5L12 10.25 15.75 4z" fill="#00832D" />
        </svg>
    ),
};
