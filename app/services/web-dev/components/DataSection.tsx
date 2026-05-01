const techStack = [
  'REACT_18.x',
  'NEXT_JS_15',
  'TAILWIND_V3',
  'TYPESCRIPT_CORE',
];

export default function DataSection() {
  return (
    <section className="mb-4 max-w-[1920px] mx-auto px-6 lg:px-10 pt-6">
      <div className="bg-[#f2f4f6] p-1 rounded-2xl">
        <div className="bg-white rounded-xl p-12 flex flex-col items-center text-center">
          {/* Tech stack pills */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="font-mono text-[10px] text-[#767587] flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-[#006471] rounded-full" />
                {tech}
              </div>
            ))}
          </div>

          <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-black tracking-tight mb-6 max-w-2xl leading-tight">
            Ready to engineer your next digital breakthrough?
          </h2>

          <p className="font-['Manrope'] text-[#464556] mb-10 max-w-xl leading-relaxed">
            Join the elite organisations leveraging CodeNexiss engineering for their
            primary digital infrastructure.
          </p>

          <button className="text-white px-10 py-5 rounded-xl font-['Space_Grotesk'] font-extrabold text-xl shadow-xl hover:scale-105 active:scale-95 transition-transform duration-200"
            style={{
              background: 'linear-gradient(135deg, #006471 0%, #413de4 50%, #8025ce 100%)',
              boxShadow: '0 20px 60px rgba(93,92,255,0.3)',
            }}
          >
            Establish Connection
          </button>
        </div>
      </div>
    </section>
  );
}
