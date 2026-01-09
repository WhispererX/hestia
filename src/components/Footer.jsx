import React from 'react'
import Logo from '../assets/logo.svg?react'
import { Link } from 'react-router'

import { FaFacebook, FaInstagram, FaXTwitter, FaGithub, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer role='contentinfo'>
      <div className="FooterMainContainer">
        <div className="FooterBrandContainer">
          <div className="BrandLogo">
            <span className="sr-only">Hestia</span>
            <Link to="/">
              <Logo className="Logo h-10 w-auto" />
            </Link>
          </div>

          <p className='CompanyMission'>We turn ideas into thoughtful digital experiences that feel simple, human, and purposeful</p>

          <div className="SocialLinks">
            <nav aria-label='Social media'>
              <Link title='Facebook' aria-label='Facebook' to="/"><FaFacebook /></Link>
              <Link title='Instagram' aria-label='Instagram' to="/"><FaInstagram /></Link>
              <Link title='Twitter' aria-label='Twitter' to="/"><FaXTwitter /></Link>
              <Link title='Github' aria-label='Github' to="/"><FaGithub /></Link>
              <Link title='Tiktok' aria-label='Tiktok' to="/"><FaTiktok /></Link>
            </nav>
          </div>
        </div>
        <div className="FooterLinksContainer">
          <nav aria-label='Footer navigation'>
            <ul>
              <span>Solutions</span>
              <li><Link to="/">Marketing</Link></li>
              <li><Link to="/">Analytics</Link></li>
              <li><Link to="/">Automation</Link></li>
              <li><Link to="/">Commerce</Link></li>
              <li><Link to="/">Insights</Link></li>
            </ul>

            <ul>
              <span>Company</span>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Blog</Link></li>
              <li><Link to="/">Jobs</Link></li>
              <li><Link to="/">Press</Link></li>
            </ul>

            <ul>
              <span>Legal</span>
              <li><Link to="/">Terms of service</Link></li>
              <li><Link to="/">Privacy policy</Link></li>
              <li><Link to="/">License</Link></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="FooterCopyrightContainer">
        <small>© 2026 Hestia, All rights reserved.</small>
      </div>
    </footer>
  )
}
