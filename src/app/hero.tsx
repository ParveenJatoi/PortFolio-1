// import React from 'react';
// import Link from 'next/link';

// const Hero: React.FC = () => {
//     return (
//         <div className="hero">
//             <div className="hero-content">
//                 <h1>
//                     Hello, I am Parveen Jatoi
//                 </h1>
//                 <p>A Passionate Web Developer</p>
//                 <Link href="/Projects" className="btn">View My Work</Link>
//             </div>
//         </div>
//     );
// };

// export default Hero;



import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>
                    Hello, I am Parveen Jatoi
                </h1>
                <p>A Passionate Web Developer</p>
                <Link href="/Projects" className="btn">View My Work</Link>
            </div>
        </div>
    );
};

export default Hero;
