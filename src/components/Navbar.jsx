    import { useState, useEffect } from 'react'
    import { navLinks } from '../constants'

    const Navbar = () => {

        const [scrolled, setScrolled] = useState(false)

        useEffect(()=>{
            const handleScroll = () => {
                const isScrolled = window.scrollY > 10
                setScrolled(isScrolled)
            }

            document.addEventListener('scroll', handleScroll)

            return () => document.removeEventListener('scroll', handleScroll)

        }, [])

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className='inner'>
                <a href="#hero" className="logo">
                    Adrian JSM
                </a>
                <nav className="desktop">
                    <ul>
                        {navLinks.map((link)=>(
                            <li key={link.name} className='group'>
                                <a href={link.link}>
                                    <span>
                                        {link.name}
                                    </span>
                                    <span className="underline"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href="#contact" className='contact-btn group'>
                    <div className="inner">
                        <span>Contact Me</span>
                    </div>
                </a>
            </div>
        </header>
    )
    }

    export default Navbar