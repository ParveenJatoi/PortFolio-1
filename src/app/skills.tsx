import Image from 'next/image';

function Skills() {
    return (
        <div className="skills">
            {/* Skills Section */}
            <h2>My Skills</h2>
            <div className="skills-logos">
                {/* Duplicating logos for seamless scrolling */}
                <div className="logo-container">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                        <Image src="/html.png" alt="HTML" width={100} height={100} className="logo-img" />
                    </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                        <Image src="/css.png" alt="CSS" width={100} height={100} className="logo-img" />
                    </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                        <Image src="/javascript.jpeg" alt="JavaScript" width={100} height={100} className="logo-img" />
                    </a>
                    <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                        <Image src="/typescript.png" alt="TypeScript" width={100} height={100} className="logo-img" />
                    </a>
                    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                        <Image src="/tailwind.jpeg" alt="Tailwind CSS" width={100} height={100} className="logo-img" />
                    </a>
                    <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                        <Image src="/nextjs.png" alt="Next.js" width={100} height={100} className="logo-img" />
                    </a>
                    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                        <Image src="/reactjs.jpeg" alt="React" width={100} height={100} className="logo-img" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Skills;