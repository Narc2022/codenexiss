export default function AppDevCTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto bg-[#191c1e] rounded-3xl p-12 text-center relative overflow-hidden">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute top-0 right-0 w-64 h-64 bg-[#413de4]/20 blur-[100px] rounded-full" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 bg-[#8025ce]/20 blur-[100px] rounded-full" />

        <div className="relative z-10 space-y-6">
          <h2 className="font-['Space_Grotesk'] text-4xl font-bold text-white leading-tight">
            Ready to deploy your next <br /> mobile ecosystem?
          </h2>
          <p className="font-['Manrope'] text-white/70 max-w-xl mx-auto leading-relaxed">
            Connect with our architects today to begin the synthesis of your vision
            and our technical expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#191c1e] px-10 py-4 rounded-xl font-['Space_Grotesk'] font-bold hover:bg-[#f2f4f6] active:scale-95 transition-all">
              Start Discovery
            </button>
            <button className="border border-white/20 text-white px-10 py-4 rounded-xl font-['Space_Grotesk'] font-bold hover:bg-white/10 active:scale-95 transition-all">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
