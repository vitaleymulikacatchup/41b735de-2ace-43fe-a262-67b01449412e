"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricCardFour from '@/components/sections/metrics/MetricCardFour';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Battery, Cpu, Shield, Zap, Gauge, Twitter, Instagram, Youtube } from 'lucide-react';

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="large"
      background="gradientBars"
      cardStyle="glass-elevated"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
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
      
      <div id="about" data-section="about">
        <TextAbout
          title="We engineer the future of Formula 1 racing through cutting-edge technology, precision manufacturing, and relentless pursuit of performance excellence."
          buttons={[
            { text: "Our Story", href: "about" },
            { text: "Technology", href: "performance" }
          ]}
        />
      </div>
      
      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Engineering Excellence"
          description="Revolutionary technology that defines the next generation of Formula 1 performance"
          tag="Innovation"
          features={[
            {
              title: "Advanced Aerodynamics",
              description: "State-of-the-art wind tunnel tested aerodynamic package delivering maximum downforce and minimal drag",
              icon: Zap
            },
            {
              title: "Hybrid Power Unit",
              description: "1000+ horsepower hybrid engine combining turbocharged V6 with energy recovery systems",
              icon: Battery
            },
            {
              title: "Carbon Fiber Chassis",
              description: "Lightweight yet incredibly strong monocoque construction ensuring maximum safety and performance",
              icon: Shield
            },
            {
              title: "Advanced Electronics",
              description: "Cutting-edge telemetry and control systems providing real-time performance optimization",
              icon: Cpu
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>
      
      <div id="models" data-section="models">
        <ProductCardTwo
          title="2024 F1 Model Range"
          description="Discover our championship-winning Formula 1 car models designed for ultimate performance"
          tag="New Models"
          products={[
            {
              id: "f1-2024-pro",
              brand: "F1 Racing",
              name: "2024 Pro Series",
              price: "€2.5M",
              rating: 5,
              reviewCount: "12",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763655644128-x0kmcye2.jpg",
              imageAlt: "F1 2024 Pro Series race car"
            },
            {
              id: "f1-2024-elite",
              brand: "F1 Racing",
              name: "2024 Elite Edition",
              price: "€3.2M",
              rating: 5,
              reviewCount: "8",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763655645082-5qpg357j.jpg",
              imageAlt: "F1 2024 Elite Edition race car"
            },
            {
              id: "f1-2024-champion",
              brand: "F1 Racing",
              name: "2024 Champion",
              price: "€4.1M",
              rating: 5,
              reviewCount: "5",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763655645991-nyjsp149.jpg",
              imageAlt: "F1 2024 Champion race car"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>
      
      <div id="performance" data-section="performance">
        <MetricCardFour
          title="Performance Metrics"
          description="Championship-level performance figures that define Formula 1 excellence"
          tag="Statistics"
          metrics={[
            {
              id: "1",
              icon: Gauge,
              title: "Top Speed",
              value: "372 km/h",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763655647362-yjw1x80i.jpg",
              imageAlt: "F1 car at maximum speed"
            },
            {
              id: "2",
              icon: Zap,
              title: "Power Output",
              value: "1000+ HP",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763655648369-xy8tq65c.jpg",
              imageAlt: "F1 hybrid power unit"
            }
          ]}
          textboxLayout="default"
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
      
      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by F1 Teams"
          description="Our technology and expertise are recognized by leading Formula 1 teams worldwide"
          tag="Partners"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763655661047-2n2drv9j.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763655662301-p5k9hq8w.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763655663487-1tmth25e.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763655664684-d58r4pat.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763655665674-9pe5c0hu.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763655666982-3u3i29xp.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763655668114-o3i31ler.jpg"
          ]}
          textboxLayout="default"
          speed={35}
          showCard={true}
        />
      </div>
      
      <div id="news" data-section="news">
        <BlogCardOne
          title="Latest F1 News"
          description="Stay updated with the latest developments in Formula 1 technology and racing"
          tag="News & Updates"
          blogs={[
            {
              id: "1",
              category: "Technology",
              title: "Revolutionary Aerodynamics Package Unveiled",
              excerpt: "Our latest aerodynamic innovations deliver unprecedented downforce levels while reducing drag by 15%",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763655669387-j4gg6i6n.jpg",
              imageAlt: "F1 aerodynamics development",
              authorName: "Dr. Michael Chen",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763655671473-e4bihltu.jpg",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Performance",
              title: "Hybrid Power Unit Achieves New Milestone",
              excerpt: "Breaking barriers in power efficiency with our latest hybrid technology reaching 1050 horsepower",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763655670312-p4za5psu.jpg",
              imageAlt: "F1 power unit innovation",
              authorName: "Sophie Anderson",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763655672484-m5fwav2l.jpg",
              date: "12 Jan 2025"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
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
      
      <div id="footer" data-section="footer">
        <FooterSocial
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
    </ThemeProvider>
  );
}