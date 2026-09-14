import ServiceCard, { ServiceCardProps } from './ServiceCard';

const services: ServiceCardProps[] = [
  {
    type: 'BIZ_DMN',
    typeColor: 'primary',
    imageSrc:
      'https://res.cloudinary.com/dn4zh9pyq/image/upload/q_auto/f_auto/v1781455738/Business-development_eyqs66.jpg',
    imageAlt: 'Business Development',
    title: 'Business Development',
    description:
      'High-authority digital footprints designed for corporate credibility, market dominance.Strategic growth frameworks engineered for market expansion, revenue acceleration, and long-term business success, increase profitability, and drive sustainable growth.',
    metaLabel: 'DEPLOY',
    metaValue: 'OPTIMAL',
  },
  {
    type: 'TRANS_ENGN',
    typeColor: 'secondary',
    imageSrc:
      'https://res.cloudinary.com/dn4zh9pyq/image/upload/q_auto/f_auto/v1781457472/E-commerce_Scalability_p2s6dx.jpg',
    imageAlt: 'E-commerce Scalability',
    title: 'E-commerce Scalability',
    description:
      'We provide end-to-end e-commerce website development services to help businesses build, launch, and scale their online stores. Our solutions are designed to deliver seamless user experiences, secure transactions, and high performance across all devices.',
    metaLabel: 'BANDWIDTH',
    metaValue: '824_USD',
  },
  {
    type: 'CONV_J',
    typeColor: 'tertiary',
    imageSrc:
      'https://res.cloudinary.com/dn4zh9pyq/image/upload/q_auto/f_auto/v1781457424/Conversion_Landing_mzoihc.jpg',
    imageAlt: 'Conversion Landing',
    title: 'Conversion Landing',
    description:
      'Our landing page design services are focused on creating visually appealing and high-converting pages that capture attention and drive results. Whether you need a page for lead generation, product promotion, or marketing campaigns, we design with performance in mind.',
    metaLabel: 'CONV_RATE',
    metaValue: 'STAR',
  },
  {
    type: 'SHOWCASE',
    typeColor: 'primary',
    imageSrc:
      'https://res.cloudinary.com/dn4zh9pyq/image/upload/q_auto/f_auto/v1781458406/visual_portfolio_gpq9jp.webp',
    imageAlt: 'Visual Portfolio',
    title: 'Visual Portfolio',
    description:
      'Our portfolio website development services help individuals and businesses showcase their work, skills, and achievements in a professional and visually appealing way. Whether you are a freelancer, designer, developer, or company, we create portfolios that leave a lasting impression.',
    metaLabel: 'VISUAL',
    metaValue: 'HI_RESL',
  },
  {
    type: 'REFACTOR',
    typeColor: 'secondary',
    imageSrc:
      'https://res.cloudinary.com/dn4zh9pyq/image/upload/q_auto/f_auto/v1781457934/System_Redesign_czyljc.jpg',
    imageAlt: 'System Redesign',
    title: 'System Redesign',
    description:
      'Our website redesign services focus on transforming your existing website into a modern, high-performing, and user-friendly platform. We enhance design, functionality, and performance to improve user experience and drive better business results.',
    metaLabel: 'LEGACY_FLUSH',
    metaValue: 'COMPLETED',
  },
  {
    type: 'VISIBILITY',
    typeColor: 'secondary',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCgsxzzCnGNSQnJUge59ck66FtE2avHpOMuFsSg8p9HS6k00dYbKSo0SV4LxCAEjYhxWTWP81PRXnFYHlDCRba11x7SSByONhkINtIEviFDewVQkKxKWdtTjc09k0A7awQ-Mt6b53qw-HIrBt9U6gPbYDsZh9loe_MlDP3Oi1GHrVILV5jBs6uE8JDgmS5ATKU7LJfmjlGRC8ygm0bVHwHPlYut0P7P0_IhgCCOE4HH1fYo03unnYPLL83iBPmXlXc2yaSQDyreRHDl',
    imageAlt: 'Orbital view of earth at night with glowing data connectivity lines',
    title: 'SEO Optimization',
    description:
      'Precision-engineered search strategies designed to maximize visibility, authority, and organic growth across digital ecosystems..Algorithm-focused growth strategies that transform search visibility into measurable business success.High-performance SEO ecosystems designed to increase relevance, reach, and industry influence.',
    metaLabel: 'INDEX_REACH',
    metaValue: 'GLOBAL',
  },
  {
    type: 'VELOCITY',
    typeColor: 'velocity',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQlkGNAL4St8K8opGSMf1_hg5w6j5FHFp42hE5xVPDMk8Wq7mRVfnA4rClpdhPB_zHzyCh2RJqNAGDiPc7etqaTjAhShnOm2Zj4oNs3fGycPm99urhiXR2XTA_mPp7En2UwSfZg9SCVjikBtUxw7-RbqQTa-KaWlvZz7CE3JRm316P0hVOLPY-FWeWTKPbZma9UrM2pEy1pZ5O97CLWtJ0-bcvmyrtsLK--TI8_jiHWsmjUOBedtQlf6r9u3gPLrBlXbVr5UeEdYT-',
    imageAlt: 'Ultra fast motion blur of fiber optic data streams in cool blue tones',
    title: 'Speed Protocols',
    description:
      'Advanced performance optimization engineered to reduce load times, enhance system responsiveness, and maximize application efficiency. We fine-tune every layer of the digital experience to ensure faster interactions, improved stability.',
    metaLabel: 'LOAD_TIME',
    metaValue: '<1.2s',
  },
  {
    type: 'GUARDIAN',
    typeColor: 'guardian',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDmjtYoEDaTXm3sdtp4pOQMLreeV-2sAbwvlfVGCIXifcxkHvIh4a9pgfGY5HxM-FB1mjAF_7kHdsmVms8buqIHkZc6HtQ1cWxDKDhJjC7dg-O1SmXYOY6bb5jrV1WEhWjpLcuCv-uL1WS_Pm-Vb7eGVBGutXBTtlNHOdzTn4dHHrvEgU0CyjDypjTOjp639Ar866CMezwsEJ8_d5V2RX9naxQKWPfZOO74DaWySvuwTy8OqPH29rQKYPRda1kdTTfUG2dHrc-eoJ1b',
    imageAlt: 'Digital dashboard showing real-time security monitoring with green status pulses',
    title: 'System Maintenance',
    description:
      '24/7 technical monitoring, proactive security patch management, and infrastructure maintenance to ensure maximum uptime, reliability, and long-term ecosystem stability. Our continuous support mitigate risks, and keep critical systems operating at peak efficiency.',
    metaLabel: 'UPTIME',
    metaValue: '99.9%',
  },
  {
    type: 'INTERFACE',
    typeColor: 'tertiary',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuASUX94tjij7FQGjP_w9F51rdQaDMBtdCoP0rB0WaMSd-t3-bYrGJ4-jnRB5_n1t7C03Tpis57jK_c0PDj-svu4hpjm_PWqKOfu8ipdqU5rMRnVIr3ozdk5TqSVDloWSzq09Z5UnymT_3m_gaJcBIBtVk4bnBjdau78oPd52kjRkLuCIVRI5ki8ndW3s677rgTDRo9peG8MmOoNfhrdaMYFGyQYHabaEPRkbt7gU-U8Hv-9lc66HNurb5jzZdjy_CZwlIIn1CPSbquw',
    imageAlt: 'Abstract layered glass panels with frosted texture and soft purple glowing edges',
    title: 'UI/UX Protocol',
    description:
      'Designing intuitive, user-centric digital experiences that seamlessly blend functionality, usability, and visual excellence. We create engaging interfaces that enhance user satisfaction, improve accessibility, mobile platforms.',
    metaLabel: 'UX_SCORE',
    metaValue: 'OPTIMAL',
  },
];

export default function ServicesGrid() {
  return (
    <section className="mb-4 max-w-[1920px] mx-auto px-6 lg:px-10 pt-6">
      {/* Section header */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="font-['Space_Grotesk'] text-4xl font-black tracking-tight mb-2">
            Service Architecture
          </h2>
          <p className="font-['Manrope'] text-sm text-[#464556]">
            Modular solutions for complex digital challenges.
          </p>
        </div>
        <div className="hidden md:block text-right font-mono text-[10px] text-[#c7c4d8] leading-loose">
          <div>GRID_TYPE_01</div>
          <div>SCHEMA_MODULE_APP</div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
