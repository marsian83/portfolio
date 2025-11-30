export function ExperienceSection() {
    return (
        <section id="experience" className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-light mb-12 text-center">Experience</h2>

                <div className="space-y-8">
                    <div className="border-l-2 border-black pl-6">
                        <div className="flex items-start justify-between mb-2">
                            <div>
                                <h3 className="text-xl font-medium">Polkadot Blockchain Academy - PBA 7</h3>
                                <p className="text-gray-600">
                                    <a href="https://polkadot.academy/pba-campus/" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                                        Polkadot Academy
                                    </a>
                                </p>
                            </div>
                            <span className="text-sm text-gray-500">Aug 2025 – Sept 2025</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">Bali, Indonesia</p>
                        <ul className="text-sm space-y-1">
                            <li>• Graduated from the dApps track at PBA Campus which was an in-person blockchain development program with instructors from Polkadot ecosystem and Parity.</li>
                            <li>• Deep-dived into Polkadot's architecture, Polkadot API, and dApp development with hands-on exercises and mentorship.</li>
                            <li>• Mastered Papi / Pjs tooling and gained extensive knowledge of Polkadot's inner workings, runtime environment, and cross-chain communication (XCMp).</li>
                        </ul>
                    </div>

                    <div className="border-l-2 border-gray-300 pl-6">
                        <div className="flex items-start justify-between mb-2">
                            <div>
                                <h3 className="text-xl font-medium">Google Summer of Code 2024 - Project Contributor</h3>
                                <p className="text-gray-600">
                                    <a href="https://summerofcode.withgoogle.com/programs/2024/projects" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                                        Sugar Labs
                                    </a>
                                </p>
                            </div>
                            <span className="text-sm text-gray-500">May 2024 – Sept 2024</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">Remote</p>
                        <ul className="text-sm space-y-1">
                            <li>• Selected among the top 2.7% of 43,984 applicants to develop educational software for the Sugar Labs organisation.</li>
                            <li>• Developed 8 interactive math and logic activities for Sugar, an open-source desktop environment and learning platform aimed at children's educational growth.</li>
                            <li>• Utilized Python, GTK+3, Pygame, and custom modules to create engaging, user-friendly learning activities that support cognitive skill development.</li>
                        </ul>
                    </div>

                    <div className="border-l-2 border-gray-300 pl-6">
                        <div className="flex items-start justify-between mb-2">
                            <div>
                                <h3 className="text-xl font-medium">Software Architect</h3>
                                <p className="text-gray-600">MixR.gg</p>
                            </div>
                            <span className="text-sm text-gray-500">Dec 2023 – July 2024</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">Remote - Texas, USA</p>
                        <ul className="text-sm space-y-1">
                            <li>• Designed and led the architecture of a scalable e-commerce platform integrating Shopify via Rye.com, supporting community commerce, rewards, and low-fee transactions.</li>
                            <li>• Built a seamless Web3 experience using Particle Network for OAuth-based wallet auth, gasless transactions, and NFT-based loyalty passes with ERC-721 and LayerZero bridging.</li>
                            <li>• Developed a performant backend in Go (Gin) with modular routes for auth, cart, orders, and Stripe sync, including blockchain event handling and admin controls.</li>
                        </ul>
                    </div>

                    <div className="border-l-2 border-gray-300 pl-6">
                        <div className="flex items-start justify-between mb-2">
                            <div>
                                <h3 className="text-xl font-medium">LFX Mentorship - Project Contributor</h3>
                                <p className="text-gray-600">
                                    <a href="https://github.com/vitessio/arewefastyet" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                                        Cloud Native Computing Foundation - Vitess
                                    </a>
                                </p>
                            </div>
                            <span className="text-sm text-gray-500">Sept 2023 – Dec 2023</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">Remote</p>
                        <ul className="text-sm space-y-1">
                            <li>• Designed and implemented a comprehensive Admin Panel to manage performance benchmarks for Vitess (A scalable MySQL Database, used by Youtube) using Arewefastyet to automatically detect and prevent performance regressions.</li>
                            <li>• Led a full redesign and rewrite of the web UI, improving user experience and usability for performance monitoring.</li>
                            <li>• Utilized Gin framework for server-side development, with React, TypeScript, and Tailwind CSS on the client-side to deliver a seamless, responsive, and modern interface.</li>
                        </ul>
                    </div>

                    <div className="border-l-2 border-gray-300 pl-6">
                        <div className="flex items-start justify-between mb-2">
                            <div>
                                <h3 className="text-xl font-medium">Frontend and Tooling Engineer</h3>
                                <p className="text-gray-600">TalentLayer</p>
                            </div>
                            <span className="text-sm text-gray-500">Aug 2023 – Dec 2023</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">Remote</p>
                        <ul className="text-sm space-y-1">
                            <li>• Developed a robust SDK and a suite of developer tools to facilitate the creation of hiring marketplaces and talent pools using TalentLayer's open Web3 protocol.</li>
                            <li>• Built a reusable React Components library to streamline development and enhance user experience across projects keeping in mind compatibility across various javascript runtimes.</li>
                            <li>• Designed the SDK for fully type-safe interactions with the underlying graph, providing developers with a simplified and abstracted interface for seamless integration.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
