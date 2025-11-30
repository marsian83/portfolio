import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { AboutSection } from '@/components/sections/AboutSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
// import { SkillsSection } from '@/components/sections/SkillsSection'
import { AchievementsSection } from '@/components/sections/AchievementsSection'

export const Route = createFileRoute('/')({
    component: Portfolio,
})

function Portfolio() {
    const [activeSection, setActiveSection] = useState('about')

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                rootMargin: '-100px 0px -66% 0px',
                threshold: [0, 0.1, 0.2]
            }
        )

        const sections = document.querySelectorAll('section[id]')
        sections.forEach((section) => observer.observe(section))

        return () => {
            sections.forEach((section) => observer.unobserve(section))
        }
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="min-h-screen bg-white text-black">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="text-xl font-semibold"></div>
                        <div className="hidden md:flex space-x-8">
                            {[
                                { id: 'about', label: 'About' },
                                { id: 'experience', label: 'Experience' },
                                { id: 'projects', label: 'Projects' },
                                { id: 'skills', label: 'Skills' },
                                { id: 'achievements', label: 'Achievements' }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`text-sm transition-colors ${activeSection === item.id ? 'text-black font-medium' : 'text-gray-600 hover:text-black'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            {/* <SkillsSection /> */}
            <AchievementsSection />
        </div>
    )
}
