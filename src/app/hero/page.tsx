"use client"

import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';

export default function HeroPage() {
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
      
      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="F1 RACING"
          description="Experience the pinnacle of motorsport engineering with our new generation Formula 1 models. Built for champions, designed for victory."
          buttons={[
            { text: "Explore Models", href: "models" },
            { text: "Learn More", href: "performance" }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763655636354-eb0dw86e.jpg",
              imageAlt: "F1 car racing on track"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763655637590-ymov6nc0.jpg",
              imageAlt: "F1 cockpit driver view"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763655638543-jaf59x03.jpg",
              imageAlt: "F1 pit stop action"
            }
          ]}
          autoplayDelay={4000}
        />
      </div>
    </>
  );
}