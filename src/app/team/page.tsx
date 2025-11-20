"use client"

import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TeamCardOne from '@/components/sections/team/TeamCardOne';

export default function TeamPage() {
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
      
      <div id="team" data-section="team">
        <TeamCardOne
          title="Championship Team"
          description="Meet the world-class drivers and engineers behind our Formula 1 success"
          tag="Our Team"
          members={[
            {
              id: "1",
              name: "Marcus Rodriguez",
              role: "Lead Driver",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763655649603-0fg0zdqd.jpg",
              imageAlt: "Marcus Rodriguez F1 driver"
            },
            {
              id: "2",
              name: "Elena Petrov",
              role: "Test Driver",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763655650646-m91fdxma.jpg",
              imageAlt: "Elena Petrov F1 test driver"
            },
            {
              id: "3",
              name: "James Mitchell",
              role: "Chief Engineer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763655651561-5cfvn54t.jpg",
              imageAlt: "James Mitchell chief engineer"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>
    </>
  );
}