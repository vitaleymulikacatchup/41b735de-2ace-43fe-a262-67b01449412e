"use client"

import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TextAbout from '@/components/sections/about/TextAbout';

export default function AboutPage() {
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
      
      <div id="about" data-section="about">
        <TextAbout
          title="We engineer the future of Formula 1 racing through cutting-edge technology, precision manufacturing, and relentless pursuit of performance excellence."
          buttons={[
            { text: "Our Story", href: "about" },
            { text: "Technology", href: "performance" }
          ]}
        />
      </div>
    </>
  );
}