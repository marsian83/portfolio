import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react'

export function AboutSection() {
    return (
        <section id="about" className="pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl mb-4 tracking-wide">Spandan Barve</h1>
                    <p className="text-xl text-gray-600 mb-4">Full Stack Blockchain Developer</p>
                    <p className="text-lg text-gray-700 mb-8">Software developer with deep expertise in blockchain, full-stack web development, and open-source contributions. Passionate about privacy, security and minimizing regulatory overreach with technology. Ranked among top teams across global Web3 hackathons.</p>

                    <div className="flex flex-wrap justify-center gap-x-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <span>contact@marsian.dev / spandan567@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Github className="w-4 h-4" />
                            <a href="https://github.com/marsian83" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                                github.com/marsian83
                            </a>
                        </div>
                        <div className='w-full h-5' />
                        <div className="flex items-center gap-2">
                            <Linkedin className="w-4 h-4" />
                            <a href="https://linkedin.com/in/marsian83" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                                linkedin.com/in/marsian83
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <ExternalLink className="w-4 h-4" />
                            <a href="https://marsian.dev" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                                marsian.dev (you are here)
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
