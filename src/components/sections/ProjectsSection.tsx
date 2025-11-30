import { ExternalLink } from 'lucide-react'

export function ProjectsSection() {
    return (
        <section id="projects" className="py-16">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-light mb-12 text-center">Projects</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="border border-gray-200 p-6">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-medium">Filosign</h3>
                            <a href="https://app.filosign.xyz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black">
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">Trustless On-Chain E-Signature Platform</p>
                        <ul className="text-sm space-y-1">
                            <li>• On-chain e-signature platform replacing platform risk of centralized services with permanent, verifiable ledger built on F(E)VM and Filecoin Onchain Cloud.</li>
                            <li>• Features irrevocable signatures as permanent blockchain transactions, end-to-end encryption using Kyber KEM and Post Quantum Secure signatures using Dilithium.</li>
                            <li>• Built with React 19, Tailwind CSS, and shadcn/ui for frontend; Solidity smart contracts deployed on Filecoin FVM (FSManager, FSFileRegistry, FSKeyRegistry);</li>
                            <li>• Implements PIN (with Argon2id) + Wallet Signature based HKDF key generation and XChaCha20Poly1305 encryption. Integrates Synapse SDK + FilCDN for decentralized storage and retrieval.</li>
                        </ul>
                    </div>

                    <div className="border border-gray-200 p-6">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-medium">Haithe</h3>
                            <a href="https://haithe.hetairoi.xyz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black">
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">Decentralized AI Marketplace Ecosystem</p>
                        <ul className="text-sm space-y-1">
                            <li>• Decentralized AI marketplace combining blockchain with advanced AI orchestration for a trustless, composable, and monetizable platform.</li>
                            <li>• Enables creation and deployment of AI agents with multi-model support (GPT, Ollama, DeepSeek etc) with a marketplace for buying/selling AI components (knowledge bases, tools, promptsets), and USDT-based transparent payments.</li>
                            <li>• Rust (Actix) based server with Alith agentic framework for AI orchestration on backend; Solidity smart contracts deployed on Metis Hyperion Testnet.</li>
                            <li>• Features multi-tenant organization system with role-based access control, exposes OpenAI-compatible APIs, and automated creator revenue distribution (pay per call system) via smart contracts.</li>
                        </ul>
                    </div>

                    <div className="border border-gray-200 p-6">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-medium">JustInsure</h3>
                            <a href="https://github.com/marsian83/justinsure" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black">
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">Decentralized Insurance Marketplace Platform</p>
                        <ul className="text-sm space-y-1">
                            <li>• Enables users to create, manage, and claim insurance policies without intermediaries, enhancing transparency and reducing disputes through blockchain-based smart contracts.</li>
                            <li>• Supports gasless meta transactions for policy-related activities, while ensuring secure client-server communications through ECDSA signatures. Provides an integrated cloud-based Python execution environment (self-hosted) for remote code execution.</li>
                            <li>• Built with React, TypeScript, and Tailwind CSS on the frontend; Deno, Express, and Mongoose on the backend; and Solidity with Hardhat for smart contract development, with integrations like Pinata.Cloud and OpenZeppelin for enhanced functionality.</li>
                        </ul>
                    </div>

                    <div className="border border-gray-200 p-6">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-medium">PumpFaxt</h3>
                            <a href="https://github.com/marsian83/pumpfaxt" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black">
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">Token Launchpad</p>
                        <ul className="text-sm space-y-1">
                            <li>• A platform for launching ERC20 tokens, utilizing account abstraction and meta transactions to enhance user experience and improve user onboarding process.</li>
                            <li>• Used AMM Bonding curve methodologies for dynamic price determination and use virtualLiquidity for price assignment without relying on real liquidity.</li>
                            <li>• Implemented data management solutions to efficiently store fast-moving data streams like price history.</li>
                            <li>• Ensured security and compliance by developing smart contracts aligned with the latest OpenZeppelin standards and custom implementation for MetaTransactions inspired by EIP4773 paper.</li>
                        </ul>
                    </div>

                    <div className="border border-gray-200 p-6">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-medium">Echo</h3>
                            <a href="https://github.com/marsian83/echo-educhain" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black">
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">The All-Encompassing Hub for EduChain</p>
                        <ul className="text-sm space-y-1">
                            <li>• Echo is a central interface for all on-chain needs for the Open Campus network by Animoca Brands.</li>
                            <li>• Developed a customizable dashboard to display metrics for EDU performance, portfolio, token holdings, and also developed a Proof of Humanity protocol to measure user authenticity based on factors such as gitcoin score, on-chain activities etc.</li>
                            <li>• Created a decentralized exchange (DEX) for EduChain, using UniswapV3 protocol and facilitate cross-chain Swaps using LayerZero. Also integrating a token launchpad to seamlessly list to the swap.</li>
                            <li>• Implemented support for various NFT types, including ERC721 NFTs, locked content NFTs, and on-chain academic records, along with an intuitive NFT marketplace for buying and selling digital assets.</li>
                        </ul>
                    </div>

                    <div className="border border-gray-200 p-6">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-medium">OnePanel</h3>
                            <a href="https://github.com/marsian83/one-panel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black">
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">Admin Panel as a Service</p>
                        <ul className="text-sm space-y-1">
                            <li>• Developed an admin panel as a service for non-technical users to add and manage their application data efficiently providing developers with the ability to define data structures and schema for their projects.</li>
                            <li>• Implemented secure data handling and access control mechanisms within the admin panel with exposed API endpoints to enable developers to use the data with their preferred architecture plans.</li>
                            <li>• The technologies included Golang for microservices and React for GUI.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
