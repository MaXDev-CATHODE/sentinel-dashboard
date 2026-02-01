import React, { useState, useEffect } from 'react';
import { 
  Shield, Activity, Globe, Lock, AlertTriangle, 
  Terminal, BarChart3, Wifi, Search, X, Layers,
  CheckCircle, Briefcase, ExternalLink, Users, DollarSign, Database
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [logs, setLogs] = useState([]);
  
  // Mock Data for Revenue/Traffic
  const performanceData = Array.from({ length: 14 }, (_, i) => ({
    day: `Day ${i + 1}`,
    revenue: 1200 + Math.random() * 800 + (i * 100), // Upward trend
    users: 500 + Math.random() * 200 + (i * 50)
  }));

  // Automatic "Business" Log generation
  useEffect(() => {
    const interval = setInterval(() => {
      const actions = [
        "Payment Gateway: Transaction #8X92 verified ($149.00)",
        "Auth Service: New user registration from DE (Frankfurt)",
        "CRM Sync: 45 leads exported to Salesforce",
        "System: Database snapshot backed up to S3 Glacier",
        "Security: SSL Certificate auto-renewed (Let's Encrypt)",
        "API: Latency optimization detected (12ms -> 8ms)",
        "Audit: GDPR Compliance Scan passed",
        "Billing: Invoice #2024-092 generated successfully"
      ];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      setLogs(prev => [`[${new Date().toLocaleTimeString()}] ${randomAction}`, ...prev.slice(0, 8)]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleDemoClick = () => {
    setShowDemoModal(true);
  };

  return (
    <div className="min-h-screen bg-sentinel-bg text-sentinel-text font-mono selection:bg-sentinel-accent selection:text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-sentinel-accent blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 flex h-screen p-4 gap-4">
        {/* Sidebar */}
        <aside className="w-64 bg-sentinel-panel/60 backdrop-blur-xl border border-sentinel-dim/20 rounded-2xl flex flex-col p-6 shadow-2xl">
          <div className="flex items-center gap-3 mb-10">
            <Shield className="w-8 h-8 text-sentinel-accent animate-pulse" />
            <div>
              <h1 className="text-xl font-bold tracking-wider text-white">SENTINEL</h1>
              <span className="text-xs text-sentinel-dim uppercase tracking-[0.2em]">Enterprise Core</span>
            </div>
          </div>

          <nav className="flex-1 space-y-2">
            {[
              { id: 'dashboard', icon: Activity, label: 'Executive Overview' },
              { id: 'revenue', icon: DollarSign, label: 'Revenue Streams' },
              { id: 'users', icon: Users, label: 'User Base' },
              { id: 'security', icon: Lock, label: 'Security & Compliance' },
              { id: 'system', icon: Database, label: 'System Health' },
            ].map(item => (
              <button
                key={item.id}
                onClick={handleDemoClick}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group
                  ${activeTab === item.id 
                    ? 'bg-sentinel-accent/20 text-white border border-sentinel-accent/50 shadow-[0_0_20px_rgba(124,58,237,0.3)]' 
                    : 'hover:bg-sentinel-panel hover:text-white text-sentinel-dim'}`}
              >
                <item.icon size={18} className="group-hover:scale-110 transition-transform" />
                <span>{item.label}</span>
                {item.id !== 'dashboard' && <Lock size={12} className="ml-auto opacity-50" />}
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-sentinel-dim/20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-sentinel-success animate-ping" />
              <span className="text-xs text-sentinel-success font-bold">SYSTEM ONLINE</span>
            </div>
            <p className="text-xs text-sentinel-dim">v3.0.1 (Business Ed.)</p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col gap-4 overflow-hidden">
          {/* Top Bar */}
          <header className="h-16 bg-sentinel-panel/60 backdrop-blur-md rounded-2xl border border-sentinel-dim/20 flex items-center justify-between px-6 shadow-lg">
            <div className="flex items-center gap-4 text-sentinel-dim">
              <Globe size={18} />
              <span>Global Cluster (EU/US/asia)</span>
              <span className="w-px h-4 bg-sentinel-dim/20" />
              <span className="text-sentinel-success flex items-center gap-2">
                <Wifi size={14} /> 99.99% Uptime
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="px-3 py-1 rounded-full bg-sentinel-accent/10 border border-sentinel-accent/30 text-xs text-sentinel-accent font-bold">
                ENTERPRISE PLAN
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sentinel-accent to-blue-500 border-2 border-white/10" />
            </div>
          </header>

          {/* Grid Layout */}
          <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-4">
            
            {/* Widget 1: Revenue Growth */}
            <div className="col-span-2 bg-sentinel-panel/40 backdrop-blur-md rounded-2xl border border-sentinel-dim/10 p-6 relative overflow-hidden group hover:border-sentinel-accent/50 transition-colors">
              <h3 className="text-sm uppercase tracking-wider text-sentinel-dim mb-4 flex items-center gap-2">
                <DollarSign size={16} /> Revenue Trajectory (Last 14 Days)
              </h3>
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="day" hide />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#13131f', borderColor: '#10b981' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Widget 2: Security & Compliance */}
            <div className="bg-sentinel-panel/40 backdrop-blur-md rounded-2xl border border-sentinel-dim/10 p-6 flex flex-col justify-center items-center relative group hover:border-blue-500/50 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-40 h-40">
                {/* Shield Animation */}
                <div className="absolute inset-0 border-2 border-sentinel-dim/20 rounded-full" />
                <div className="absolute inset-[15%] border border-sentinel-dim/10 rounded-full" />
                <div className="absolute inset-[30%] border border-sentinel-dim/5 rounded-full" />
                <div className="absolute w-full h-[2px] bg-blue-500/50 top-1/2 left-0 animate-[spin_4s_linear_infinite]" />
                <Shield className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-10 h-10" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">Fortress Active</h3>
              <p className="text-blue-400 text-sm flex items-center gap-1 mt-1">
                <CheckCircle size={14} /> GDPR & SOC2 Compliant
              </p>
            </div>

            {/* Widget 3: Live System Operations */}
            <div className="col-span-1 bg-sentinel-panel/40 backdrop-blur-md rounded-2xl border border-sentinel-dim/10 p-6 relative overflow-hidden flex flex-col">
              <h3 className="text-sm uppercase tracking-wider text-sentinel-dim mb-4 flex items-center gap-2">
                <Terminal size={16} /> Operations Log
              </h3>
              <div className="flex-1 overflow-hidden font-mono text-xs space-y-3 mask-image-b-0">
                {logs.map((log, i) => (
                  <div key={i} className={`p-2 rounded border-l-2 pl-3 animate-in fade-in slide-in-from-right-4 duration-500
                    ${log.includes('Security') ? 'border-sentinel-accent bg-sentinel-accent/10 text-purple-200' : 
                      log.includes('Payment') ? 'border-green-500 bg-green-500/10 text-green-200' : 
                      'border-blue-500 bg-blue-500/10 text-blue-200'}`}>
                    {log}
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 4: Active Modules */}
            <div className="col-span-2 bg-sentinel-panel/40 backdrop-blur-md rounded-2xl border border-sentinel-dim/10 p-6 relative overflow-hidden">
               <h3 className="text-sm uppercase tracking-wider text-sentinel-dim mb-4 flex items-center gap-2">
                <Layers size={16} /> Core Infrastrucutre
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Auth Server (OAuth2)', status: 'Active', load: '12%' },
                  { name: 'Payment Gateway (Stripe)', status: 'Processing', load: '45%' },
                  { name: 'Data Warehouse', status: 'Syncing', load: '67%' },
                  { name: 'Notification Engine', status: 'Idle', load: '2%' },
                ].map((bg, i) => (
                  <div key={i} className="bg-sentinel-bg/50 p-4 rounded-xl border border-sentinel-dim/10 flex justify-between items-center group hover:bg-white/5 transition-colors cursor-pointer" onClick={handleDemoClick}>
                    <div>
                      <h4 className="text-white font-medium">{bg.name}</h4>
                      <span className={`text-xs ${bg.status === 'Idle' ? 'text-gray-500' : 'text-sentinel-success'}`}>● {bg.status}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-sentinel-dim">Load</div>
                      <div className="font-mono text-sentinel-accent">{bg.load}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </main>
      </div>

      {/* Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-sentinel-panel border border-sentinel-accent/30 rounded-2xl p-8 max-w-md w-full relative shadow-[0_0_50px_rgba(124,58,237,0.2)]">
            <button 
              onClick={() => setShowDemoModal(false)}
              className="absolute top-4 right-4 text-sentinel-dim hover:text-white"
            >
              <X size={24} />
            </button>
            
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-sentinel-accent/20 rounded-full flex items-center justify-center mx-auto ring-1 ring-sentinel-accent">
                <Lock className="w-8 h-8 text-sentinel-accent" />
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Restricted Access</h2>
                <p className="text-sentinel-dim">
                  This demo represents a live business intelligence environment. Client-specific data is masked for privacy.
                </p>
              </div>

              <div className="bg-sentinel-bg/50 p-4 rounded-xl border border-white/5 text-left text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-sentinel-dim">Client:</span>
                  <span className="text-white font-mono">CONFIDENTIAL_LLC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sentinel-dim">Data Clearance:</span>
                  <span className="text-sentinel-warning font-mono">LEVEL_3_REQUIRED</span>
                </div>
              </div>

              <button 
                onClick={() => setShowDemoModal(false)}
                className="w-full py-3 bg-sentinel-accent hover:bg-sentinel-accent/90 text-white font-bold rounded-xl transition-all shadow-[0_4px_14px_0_rgba(124,58,237,0.39)] hover:translate-y-[-2px]"
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
