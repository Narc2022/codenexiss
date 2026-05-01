'use client';

import { useEffect, useState } from 'react';

interface Metric {
  label: string;
  value: string;
  unit: string;
  live: boolean;
}

const metrics: Metric[] = [
  { label: 'KERNEL_PROCESS', value: '0.024', unit: 'ms', live: true },
  { label: 'UPTIME', value: '99.9', unit: '%', live: false },
  { label: 'LOAD_TIME', value: '1.18', unit: 's', live: true },
  { label: 'CACHE_HIT', value: '98.3', unit: '%', live: false },
];

export default function OperationalBandwidth() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full overflow-x-auto mx-auto px-5 lg:px-9">
      <div className="flex items-center gap-8 min-w-max px-1 py-3">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-center gap-3">
            {m.live && (
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00daf3] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00daf3]" />
              </span>
            )}
            <div>
              <div className="font-mono text-[9px] text-[#767587] uppercase tracking-wider">
                {m.label}
              </div>
              <div className="font-mono text-sm font-bold text-[#191c1e]">
                {m.value}
                <span className="text-[#006471] text-xs ml-0.5">{m.unit}</span>
              </div>
            </div>
            <div className="w-px h-8 bg-[#e0e3e5]" />
          </div>
        ))}

        <div className="font-mono text-[10px] text-[#413de4] font-bold tracking-widest">
          ALL SYSTEMS OPERATIONAL
        </div>
      </div>
    </div>
  );
}
