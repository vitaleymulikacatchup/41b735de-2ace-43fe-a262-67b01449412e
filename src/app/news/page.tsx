"use client"

import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';

export default function NewsPage() {
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
    </>
  );
}