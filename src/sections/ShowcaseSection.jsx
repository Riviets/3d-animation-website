import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {

    const sectionRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)

    
    useGSAP(()=>{
        gsap.fromTo(sectionRef.current, 
            {opacity: 0},
            {opacity: 1, duration: 1.5})
            
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current]
        projects.forEach((project, index) => {
            gsap.from(project, 
                {
                    y: 50, 
                    opacity: 0,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: project,
                        start: 'top bottom-=100',
                        scrub: true
                    }
                })
        })
    })

  return (
    <section id='work' className='app-showcase' ref={sectionRef}>
        <div className='w-full'>
            <div className='showcaselayout'>
                <div className="first-project-wrapper" ref={project1Ref}>
                    <div className="image-wrapper">
                        <img src="/images/project1.png" alt="Ryde" />
                    </div>
                    <div className='text-content'>
                        <h2>On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde</h2>
                        <p className='text-white-50 md: text-xl'>An app built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience.</p>
                    </div>
                </div>
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project' ref={project2Ref}>
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src="/images/project2.png" alt="Library Management Platform" />
                        </div>
                        <h2>The Library Management Platform</h2>
                    </div>
                    <div className='project' ref={project3Ref}>
                        <div className='image-wrapper bg-[#FFE7EB]'>
                            <img src="/images/project3.png" alt="YC Directory" />
                        </div>
                        <h2>YC Directory - A Startup Showcase App</h2>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection