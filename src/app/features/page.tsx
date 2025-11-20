"use client"

import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import { Battery, Cpu, Shield, Zap } from 'lucide-react';

export default function FeaturesPage() {
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
    </>
  );
}