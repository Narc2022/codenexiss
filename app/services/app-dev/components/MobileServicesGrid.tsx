import ServiceTile from './ServiceTile';

export default function MobileServicesGrid() {
  return (
    <section className="py-24 px-6 bg-[#f2f4f6]/60">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="font-['JetBrains_Mono'] text-[10px] font-bold text-[#8025ce] uppercase tracking-widest mb-3">
            SERVICES CATALOG
          </p>
          <h2 className="font-['Space_Grotesk'] text-4xl lg:text-5xl font-bold tracking-tight mb-3">
            Modular Mobile Infrastructure
          </h2>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#413de4] to-[#8025ce]" />
        </div>

        {/* Masonry-style grid — 12 columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

          {/* 1. Android — large left tile with badge */}
          <ServiceTile
            icon="android"
            iconColor="text-[#3ddc84]"
            title="Android App Development"
            description="Custom Android applications designed for peak performance, extreme usability, and massive scalability. We leverage the full potential of the Android ecosystem to create powerful, native experiences."
            variant="full"
            layout="horizontal"
            badge="HOTJS_READY"
            badgeColor="bg-[#e1dfff] text-[#09006b]"
          />

          {/* 2. iOS — right tile */}
          <ServiceTile
            icon="phone_iphone"
            iconColor="text-[#413de4]"
            title="iOS App Development"
            description="High-quality iOS apps tailored for Apple devices with smooth performance and premium design language."
            variant="half"
            layout="vertical"
            linkLabel="Explore Swift"
          />

          {/* 3. Cross-platform */}
          <ServiceTile
            icon="devices"
            iconColor="text-[#8025ce]"
            title="Cross-platform Apps"
            description="Apps built using modern frameworks like Flutter and React Native to work seamlessly across Android and iOS."
            variant="half"
            layout="vertical"
          />

          {/* 4. MVP Development */}
          <ServiceTile
            icon="rocket_launch"
            iconColor="text-[#413de4]"
            title="MVP Development"
            description="Quick development of Minimum Viable Products to validate your business idea efficiently with core features."
            variant="third"
            layout="vertical"
          />

          {/* 5. Admin Panel */}
          <ServiceTile
            icon="dashboard"
            iconColor="text-[#006471]"
            title="Admin Panel"
            description="Custom dashboards for managing users, real-time data visualization, and complex business operations."
            variant="third"
            layout="vertical"
          />

          {/* 6. API Integration — horizontal half */}
          <ServiceTile
            icon="api"
            iconColor="text-[#8025ce]"
            title="API Integration"
            description="Seamless integration of neural networks, payment gateways, and sophisticated external systems."
            variant="half"
            layout="horizontal"
          />

          {/* 7. App UI/UX Design — horizontal half */}
          <ServiceTile
            icon="auto_awesome"
            iconColor="text-[#006471]"
            title="App UI/UX Design"
            description="Engaging and intuitive mobile app designs focused on user psychology and modern aesthetics."
            variant="half"
            layout="horizontal"
            accent
          />

          {/* 8. App Testing */}
          <ServiceTile
            icon="bug_report"
            iconColor="text-[#ba1a1a]"
            title="App Testing"
            description="Comprehensive manual and automated testing to ensure bug-free, secure, and high-performing apps."
            variant="third"
            layout="vertical"
          />

          {/* 9. App Deployment */}
          <ServiceTile
            icon="cloud_upload"
            iconColor="text-[#413de4]"
            title="App Deployment"
            description="Publishing apps on Play Store and App Store with optimized configuration and store listing optimization."
            variant="third"
            layout="vertical"
          />

          {/* 10. Maintenance & Updates */}
          <ServiceTile
            icon="published_with_changes"
            iconColor="text-[#006471]"
            title="Maintenance & Updates"
            description="Ongoing support, security patches, and neural performance improvements post-launch to keep your app edge-ready."
            variant="third"
            layout="vertical"
          />
        </div>
      </div>
    </section>
  );
}
