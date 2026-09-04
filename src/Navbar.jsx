import "./Navbar.css"
import { useState, useEffect } from "react"
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
           const sections = document.querySelectorAll("section");
      let current = "Home";

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; 
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <h1 className="logo">DRONES</h1>
      
      
        <IoMdMenu onClick={() => setOpen(!open)}
        className="nav-links-IoMdMenu"/>
      
      {/* navbar item  */}
{open && (
<ul className={`nav-links ${open ? "active" : ""}`}>
        <li><a href="#Home" className={active === "Home" ? "active" : ""}>Home</a></li>
        <li><a href="#Features" className={active === "Features" ? "active" : ""}>Features</a></li>
        <li><a href="#Installation" className={active === "Installation" ? "active" : ""}>Installation</a></li>
        <li><a href="#Products" className={active === "Products" ? "active" : ""}>Products</a></li>
        <li><a href="#Reviews" className={active === "Reviews" ? "active" : ""}>Reviews</a></li>
        <li><a href="#FAQs" className={active === "FAQs" ? "active" : ""}>FAQs</a></li>
        <li><a href="#Contact" className={active === "Contact" ? "active" : ""}>Contact</a></li>
      </ul>
)} 
 
    </nav>
  );
}
