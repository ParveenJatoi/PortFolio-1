// import Link from 'next/link';


// export default function Navbar() {
//     return (
//         <div className="navbar">
//             <nav className="nav-container">
//                 <h2 className="logo">
//                     Parveen Jatoi
//                 </h2>
//                 <ul className="nav-links">
//                     <li><Link href="/">Home</Link></li>
//                     <li><Link href="/About">About</Link></li>
//                     <li><Link href="/Services">Services</Link></li>
//                     <li><Link href="/Projects">Projects</Link></li>
//                     <li><Link href="/Contact">Contact Us</Link></li>
//                 </ul>
//                 <button type="button" className="subscribe-btn">
//                     Download Resume
//                 </button>
//             </nav>
//         </div>
//     );
// }
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="navbar">
            <nav className="nav-container">
                <h2 className="logo">
                    Parveen Jatoi
                </h2>
                <ul className="nav-links">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/About">About</Link></li>
                    <li><Link href="/Services">Services</Link></li>
                    <li><Link href="/Projects">Projects</Link></li>
                    <li><Link href="/Contact">Contact Us</Link></li>
                </ul>
                <button type="button" className="subscribe-btn">
                    Download Resume
                </button>
            </nav>
        </div>
    );
}