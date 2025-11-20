"use client"

import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import MetricCardFour from '@/components/sections/metrics/MetricCardFour';
import { Gauge, Zap } from 'lucide-react';

export default function PerformancePage() {
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
    </>
  );
}