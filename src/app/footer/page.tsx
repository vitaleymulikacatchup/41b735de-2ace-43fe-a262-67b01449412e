"use client"

import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Instagram, Twitter, Youtube } from 'lucide-react';

export default function FooterPage() {
  return (
    <>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Models", id: "models" },
            { name: "Performance", id: "performance" },
            { name: "Team", id: "team" },
            { name: "News", id: "news" }
          ]}
          brandName="F1 Racing"
          button={{
            text: "Contact",
            href: "contact"
          }}
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          brandName="F1 Racing"
          columns={[
            {
              title: "Models",
              items: [
                { label: "2024 Pro Series", href: "models" },
                { label: "2024 Elite Edition", href: "models" },
                { label: "2024 Champion", href: "models" }
              ]
            },
            {
              title: "Technology",
              items: [
                { label: "Aerodynamics", href: "performance" },
                { label: "Power Units", href: "performance" },
                { label: "Electronics", href: "performance" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About", href: "about" },
                { label: "Team", href: "team" },
                { label: "News", href: "news" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Twitter,
              href: "https://twitter.com/f1racing",
              ariaLabel: "Twitter"
            },
            {
              icon: Instagram,
              href: "https://instagram.com/f1racing",
              ariaLabel: "Instagram"
            },
            {
              icon: Youtube,
              href: "https://youtube.com/f1racing",
              ariaLabel: "YouTube"
            }
          ]}
          copyrightText="© 2025 F1 Racing. All rights reserved."
        />
      </div>
    </>
  );
}