"use client"

import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';

export default function TestimonialsPage() {
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
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="Industry Recognition"
          description="Hear from motorsport professionals and racing legends about our Formula 1 innovations"
          tag="Testimonials"
          testimonials={[
            {
              id: "1",
              name: "Alessandro Martinelli",
              role: "Racing Director",
              company: "European Motorsport Federation",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763655658669-n7ij3c54.jpg",
              imageAlt: "F1 team garage operations"
            },
            {
              id: "2",
              name: "Sarah Thompson",
              role: "Technical Analyst",
              company: "Global Racing Institute",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763655659662-nic1tntj.jpg",
              imageAlt: "F1 victory celebration"
            }
          ]}
          textboxLayout="default"
        />
      </div>
    </>
  );
}