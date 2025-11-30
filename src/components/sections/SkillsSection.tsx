export function SkillsSection() {
    return (
        <section id="skills" className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-light mb-12 text-center">Technical Skills</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-medium mb-4">Languages</h3>
                        <p className="text-sm text-gray-600">TypeScript, Python, Solidity, Move, Golang, C/C++, HTML, Bash</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-4">Technologies</h3>
                        <p className="text-sm text-gray-600">React, Vue, SSR/SSG, Node.js, Deno, Hono, TailwindCSS</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-4">Blockchain</h3>
                        <p className="text-sm text-gray-600">EVM, Hardhat, Viem, Anvil, IPFS, Hyperledger</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-4">Databases</h3>
                        <p className="text-sm text-gray-600">SQL/NoSQL, PostgreSQL, TimeScale, PlanetScale, MongoDB, Redis, Vector</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-4">DevOps / Cloud</h3>
                        <p className="text-sm text-gray-600">DigitalOcean, Docker, GCP, Firebase, Supabase, Github Actions, Self Hosting</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-4">Tools</h3>
                        <p className="text-sm text-gray-600">Git, Github, Linux, Adobe Photoshop</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
