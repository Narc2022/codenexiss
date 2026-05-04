"use client";

export default function Navbar() {
  return (
    <header className="bg-white/70 backdrop-blur-md sticky top-0 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.05)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gradient-to-r after:from-indigo-500 after:via-purple-500 after:to-transparent">
      <div className="flex justify-between items-center w-full px-6 py-3 max-w-[1920px] mx-auto px-6 lg:px-10 pt-8
">
        <div className="text-xl font-bold font-headline text-slate-900">CodeNexiss</div>
        <nav className="hidden md:flex items-center gap-8">
          {["Dashboard", "Deployments", "Security", "Analytics"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-slate-500 font-medium hover:text-slate-900 transition-colors text-sm"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search resources..."
              className="bg-slate-100 border-none rounded-lg text-sm px-4 py-2 w-64 focus:outline-none focus:ring-1 focus:ring-indigo-300 font-mono"
            />
          </div>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-slate-100 rounded-md transition-all">
              <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-md transition-all">
              <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            <div className="w-8 h-8 rounded-full bg-teal-700 overflow-hidden border border-slate-200 flex items-center justify-center text-white text-xs font-bold">
              CN
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
