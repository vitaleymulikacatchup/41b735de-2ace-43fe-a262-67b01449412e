"use client"

import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ContactSplit from '@/components/sections/contact/ContactSplit';

export default function ContactPage() {
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
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Ready to Experience F1 Excellence?"
          description="Connect with our team to learn more about our Formula 1 models and racing technology solutions."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763655636354-eb0dw86e.jpg"
          imageAlt="F1 racing experience"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Contact Us"
          termsText="By submitting you agree to receive updates about our F1 models and racing technology."
        />
      </div>
    </>
  );
}