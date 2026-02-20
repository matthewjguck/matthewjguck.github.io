import React from 'react';

export default function ClarityGrid() {
  return (
    <div className="space-y-16 max-w-7xl mx-auto px-4 py-20">
      {/* Hero / Overview */}
      <section className="items-center">
        <div className="relative flex justify-center">
          <img src="/images/ClarityGrid.png" style={{ height: 'auto', width: '90vw' }} alt="ClarityGrid hero" className="rounded-2xl" />
        </div>
      </section>

      {/* Impact Stats */}
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-900">Impact at a Glance</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm" style={{ backgroundColor: '#f3f3f3ff' }}>
            <div className="inline-block bg-green-200 text-gray-900 rounded-md px-4 py-2 font-semibold">Operational Energy Waste</div>
            <div className="mt-4 text-6xl md:text-7xl font-extrabold tracking-tight">10–30%</div>
            <div className="mt-3 text-xl md:text-2xl text-gray-700 leading-relaxed">of energy waste is due to avoidable operational inefficiencies.</div>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm" style={{ backgroundColor: '#f3f3f3ff' }}>
            <div className="inline-block text-gray-900 rounded-md px-4 py-2 font-semibold" style={{ backgroundColor: '#fda887ff' }}>Technician Dispatching</div>
            <div className="mt-4 text-6xl md:text-7xl font-extrabold tracking-tight">6–12%</div>
            <div className="mt-3 text-xl md:text-2xl text-gray-700 leading-relaxed">of work hours are spent identifying and dispatching the right technician.</div>
          </div>
        </div>
      </section>

      {/* Problems Today */}
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-900">Problems Building Managers Face Today</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-xl p-6" style={{ backgroundColor: '#f3f3f3ff' }}>
            <img src="/images/Data Inundation.png" alt="Alert overload" className="w-24 h-24 object-contain mx-auto mb-4" />
            <h4 className="font-semibold text-gray-900 text-2xl mb-2">Data Inundation</h4>
            <p className="text-gray-700">Managers sort through long, disorganized lists of BMS alarms.</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-6" style={{ backgroundColor: '#f3f3f3ff' }}>
            <img src="/images/Directionless Alerts.png" alt="Unclear alert" className="w-24 h-24 object-contain mx-auto mb-4" />
            <h4 className="font-semibold text-gray-900 text-2xl mb-2">Directionless Alerts</h4>
            <p className="text-gray-700">Technicians are sent based on ambiguous, surface-level alerts.</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-6" style={{ backgroundColor: '#f3f3f3ff' }}>
            <img src="/images/Decision Paralysis.png" alt="Decision gridlock" className="w-24 h-24 object-contain mx-auto mb-4" />
            <h4 className="font-semibold text-gray-900 text-2xl mb-2">Decision Paralysis</h4>
            <p className="text-gray-700">No clear way to validate which actions matter most.</p>
          </div>
        </div>
      </section>

      {/* With ClarityGrid */}
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-900">Building Management with ClarityGrid</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-xl p-6" style={{ backgroundColor: '#f3f3f3ff' }}>
            <img src="/images/Actionable Insights.png" alt="Insights dashboard" className="w-24 h-24 object-contain mx-auto mb-4" />
            <h4 className="font-semibold text-gray-900 text-2xl mb-2">Actionable Insights</h4>
            <p className="text-gray-700">Highest-impact energy opportunities and best-suited technicians — instantly.</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-6" style={{ backgroundColor: '#f3f3f3ff' }}>
            <img src="/images/Automated Tasks.png" alt="Automated task" className="w-24 h-24 object-contain mx-auto mb-4" />
            <h4 className="font-semibold text-gray-900 text-2xl mb-2">Automated Tasks</h4>
            <p className="text-gray-700">Approved items are pushed to your existing system and routed automatically.</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-6" style={{ backgroundColor: '#f3f3f3ff' }}>
            <img src="/images/Augmented Teamwork.png" alt="Team collaboration" className="w-24 h-24 object-contain mx-auto mb-4" />
            <h4 className="font-semibold text-gray-900 text-2xl mb-2">Augmented Teamwork</h4>
            <p className="text-gray-700">Everyone sees the trends and knows what to do — and why.</p>
          </div>
        </div>
      </section>

      {/* Mobile App */}
      <section className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative order-first">
          <img src="/images/ClarityGrid Mobile.svg" alt="ClarityGrid mobile experience" className="w-full h-auto rounded-2xl" />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">Mobile Clarity</h3>
          <p className="text-gray-700 leading-relaxed">The ClarityGrid Mobile app allows technicians to be alerted of their next task.</p>
          <p className="text-gray-700 leading-relaxed">The app also provides clear task summaries and tracks technician progress.</p>
        </div>
      </section>
    </div>
  );
}
