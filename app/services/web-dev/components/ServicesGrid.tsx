import ServiceCard, { ServiceCardProps } from './ServiceCard';

const services: ServiceCardProps[] = [
  {
    type: 'BIZ_DMN',
    typeColor: 'primary',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBzd_pqkIgc9PUJOg2UzKRyvEOVqbQ7rMxhRQqEeMi-Q8P5qIb_sS7_9OtHJZxX1LtU-yBEqLbJPDGLFAh5CbCZ6n9-bfANJQnJEiGxEkjwTGvBmpOr1bwknf5SasONUJxFJVf2MXxRwq5xRb-XKY2Sn5GlxS2f23tYxiQNLB8e5l1jvCLOANqLU6mFi4AXVPHePHxE1mOfq3JY2b7UxKiudJAb17Bk7RwIHy0hXx8PbPxgq01pQ_yCDgGEKfBWmPm0rCT82WiY',
    imageAlt: 'Corporate glass skyscraper facade reflecting blue sky',
    title: 'Business Development',
    description:
      'High-authority digital footprints designed for corporate credibility and market dominance.',
    metaLabel: 'DEPLOY',
    metaValue: 'OPTIMAL',
  },
  {
    type: 'TRANS_ENGN',
    typeColor: 'secondary',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBQJnWNqJCsHsYg-6oTlqPUGT0z8o6_Gb-O5cMaFb0yz3eZaMGf9RbvP_VhTNx0I-cEG0jtTdCOoWr3RX4szF4lh1CQXBcR-3xRAfbbKWmrp1Moh7VRSVrRrn_nIsTbxJoUzSwQFcGz_kJi4ZwS9Hd-YZL0VPaR4ICzjstPXCt1-4kbPL4mFl1UNpQ9pOlV-IjfM2wj4BkBa_W6FTUD1S7k0FTID5fK1kqxAPyEbz4vAFxkMxHk_TRF2hXarSl1aEFoQbWE1N8',
    imageAlt: 'Digital padlock glowing on circuit board',
    title: 'E-commerce Scalability',
    description:
      'Secure, frictionless commerce engines built to handle peak-load transactional density.',
    metaLabel: 'BANDWIDTH',
    metaValue: '824_USD',
  },
  {
    type: 'CONV_J',
    typeColor: 'tertiary',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDyFuEq-z4JB-DXwWqPvHZqq_3YCXN6IlNUgb2Mq0mUxhZ9VidCIV3XLHbHLjJmGfaVR0sBFq5BW-VZUA-0CaB_4t-NRFzLnD1tUfnYJXkT-gpFrKD2v0xrqjTdCdHJg8A3_w_9BPpXXJq7y9vvJJ3gMgOUqwTkTWXqq5XoJxmUCkgvKrE-RFzBw5VYqbMIWwYkzSnzKaE_p0i2jtxFtJkQwk-HHgQZhqHJG8u_vNBVqDm_eV3tZFXqkpWiPm8mFOL5XgV8s',
    imageAlt: 'Golden sun flare over digital horizon, conversion metaphor',
    title: 'Conversion Landing',
    description:
      'Precision-targeted pages engineered for maximum lead generation and user retention.',
    metaLabel: 'CONV_RATE',
    metaValue: 'STAR',
  },
  {
    type: 'SHOWCASE',
    typeColor: 'primary',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ_CkhtH5Cq1H4Y2nPuTi7kPlxnQ5Ck7XjCk9c0X8kXEb4gMImBRvFN0vZKGhJMhxDCWB1hSBt-5MtJU-4vr4e3Av4l4wUVhWPxs1KcU-OcVG0kJd_UMvHRjHjzBbfZK3oJMhFHMV2vMCxiDXfqbgSfYD4gdqaP5WmGx-oXe71xijm0gixizW2rq8VHSH1KpR3T6Kpg7lQkZXlmO0J1HXPF4jJwWPMzNZ9bIUdAo2N7tJAJNb4KnGrJTvBv7M5TvKG3i2Wos',
    imageAlt: 'Abstract colorful motion blur of light trails',
    title: 'Visual Portfolio',
    description:
      'Ethereal showcases for creative entities requiring high-fidelity visual storytelling.',
    metaLabel: 'VISUAL',
    metaValue: 'HI_RESL',
  },
  {
    type: 'REFACTOR',
    typeColor: 'secondary',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDrmvk_3TQAkMy5rCc7YFKBkR7GMdPKIkJ8D4rQ8Q0FQmPeWX8gJQgBnFi4AaFGnc2xjNq4V0YTXF-yHcvW7Y1guwuA3Ql4QYWHQIJkneMV-T5-K-lN29WnlkmN3_y7Ic7E9HtJ8JjBBt6r_NI0Nj_hFUFMEQ5CtWF8r0mVSN2Q23NyGzPlMSHi3JcMzSUFw8aaohH1y8-MxiNhHKyOV2HWLfGBCCy-bAFhsKjvQ5DFhMRCW7NjPzIz7xwLQ0Vz7mBpqjhM3A8',
    imageAlt: 'Laser beam hitting a circuit chip, system redesign visual',
    title: 'System Redesign',
    description:
      'Modernizing legacy infrastructure with next-gen UI frameworks and performance audits.',
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
      'Strategic algorithmic alignment to ensure maximum discoverability in the global search graph.',
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
      'Aggressive performance tuning reducing time-to-interactive to near-instantaneous thresholds.',
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
      '24/7 technical surveillance, security patching, and core ecosystem stability management.',
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
      'Crafting high-engagement interfaces that balance scientific utility with aesthetic pleasure.',
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
