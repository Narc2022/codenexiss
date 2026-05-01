const bars = [40, 65, 50, 90, 75, 60, 85];

const logs = [
  { tag: "[INFO]", color: "text-teal-400", msg: "Handshake complete with edge-node-ams-4." },
  { tag: "[INFO]", color: "text-teal-400", msg: "Pulling manifest: code-nexus-v4-prod.json" },
  { tag: "[AUTH]", color: "text-purple-400", msg: "Request verified via HMAC-SHA256 signature." },
  { tag: "[INFO]", color: "text-teal-400", msg: "Provisioning 4 containers on cluster-alpha." },
  { tag: "[WARN]", color: "text-red-400", msg: "Memory usage spike detected in node-west-2." },
  { tag: "[INFO]", color: "text-teal-400", msg: "Rebalancing resources... Done in 14ms." },
  { tag: "[INFO]", color: "text-teal-400", msg: "Deployment status: ACTIVE" },
  { tag: "[INFO]", color: "text-teal-400", msg: "Listening on port 443..." },
];

export default function PerformanceSection() {
  return (
    <section>
      <div className="my-8 space-y-1">
        <p className="text-[10px] font-bold uppercase tracking-widest text-teal-600">Live Vitals</p>
        <h2 className="text-3xl font-bold text-slate-900 font-headline">System Performance</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bar Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-700">
              Global Request Distribution
            </h3>
            <div className="flex gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-600" />
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <span className="w-2 h-2 rounded-full bg-purple-600" />
            </div>
          </div>
          <div className="p-8 h-[300px] flex items-end gap-2">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm transition-all cursor-help relative group"
                style={{
                  height: `${h}%`,
                  backgroundColor: h === 90 ? "rgba(20, 184, 166, 0.4)" : "rgb(241,245,249)",
                }}
              >
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 font-mono transition-opacity whitespace-nowrap">
                  {h}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Logs */}
        <div className="bg-slate-900 rounded-xl p-5 flex flex-col h-[380px]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
            </div>
            <span className="text-[10px] font-mono text-slate-500 uppercase">terminal // srv-01</span>
          </div>
          <div className="flex-1 font-mono text-[11px] text-slate-400 space-y-2 overflow-y-auto">
            {logs.map((log, i) => (
              <div key={i} className="flex gap-2">
                <span className={`${log.color} shrink-0`}>{log.tag}</span>
                <span>{log.msg}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
