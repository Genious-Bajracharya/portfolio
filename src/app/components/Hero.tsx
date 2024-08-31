'use client'
import { useEffect, useState } from "react"

export default function Hero() {
    const roles: string[] = ['Frontend Developer', 'React Developer', 'MERN Developer'];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [typingIndex, setTypingIndex] = useState(0);

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];

        if (!currentRole) return; // Ensure currentRole is valid

        const typingInterval = setInterval(() => {
            if (typingIndex < currentRole.length) {
                // Add the next character to the displayed text
                setDisplayedText((prev) => prev + currentRole[typingIndex]);
                setTypingIndex((prev) => prev + 1);
            } else {
                clearInterval(typingInterval);

                // Pause before switching to the next role
                setTimeout(() => {
                    setTypingIndex(0);
                    setDisplayedText('');
                    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                }, 2000); //delay
            }
        }, 100); //typing speed
        return () => clearInterval(typingInterval);
    }, [typingIndex, currentRoleIndex, roles]);

    return (
        <div className="relative flex items-center justify-center h-screen px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="absolute text-white text-center md:text-left lg:left-16">
                <div className=" h-10"><span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl">{displayedText}</span></div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    {`Heyya, I'm `}
                    <span className="text-red-500">Genious</span> Bajracharya
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">from Kathmandu, Nepal</h2>
            </div>
        </div>
    );
}