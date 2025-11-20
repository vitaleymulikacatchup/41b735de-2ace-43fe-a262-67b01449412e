"use client"

import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';

export default function ModelsPage() {
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
    </>
  );
}