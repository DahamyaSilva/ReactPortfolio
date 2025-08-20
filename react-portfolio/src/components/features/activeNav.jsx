import { useEffect, useState } from "react";

function ActiveNav () {

    const [activeSection,setActiveSection] = useState('');

    useEffect(() => {
        const updateActiveNav = () => {
            const sections = document.querySelectorAll('section[id]'); 
            const scrollPosition = window.scrollY + 200; 
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });
        };
        
        updateActiveNav();

        window.addEventListener('scroll', updateActiveNav);
        
        return () => {
            window.removeEventListener('scroll', updateActiveNav);
        };
    }, []);

    return activeSection;
}

export default ActiveNav;