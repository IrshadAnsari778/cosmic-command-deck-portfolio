import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal as TerminalIcon, 
  Volume2, 
  VolumeX, 
  ExternalLink, 
  Sparkles, 
  Radio, 
  Cpu, 
  Globe, 
  MapPin, 
  Layers as LayersIcon, 
  ArrowUpRight, 
  Compass, 
  Activity
} from 'lucide-react';

/* =========================================================================
   1. PORTFOLIO CONFIGURATION
   ========================================================================= */
const portfolioConfig = {
  name: "ALEX VANCE",
  callsign: "AV-904",
  role: "ASTRO-FRONTEND SPECIALIST & UI ARCHITECT",
  location: "BENGALURU, IN // 12.9716° N, 77.5946° E",
  status: "SYSTEM READY // AVAILABLE FOR CONTRACTS",
  bio: "Architecting zero-latency frontend engines, ultra-fluid reactive micro-interactions, and cinematic web application telemetry.",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:alex.vance@example.com"
  },
  skills: [
    { name: "React 19", level: "98%", category: "Core" },
    { name: "TypeScript", level: "95%", category: "Core" },
    { name: "Tailwind CSS", level: "99%", category: "Interface" },
    { name: "Framer Motion", level: "92%", category: "Animation" },
    { name: "Node.js", level: "88%", category: "Runtime" },
    { name: "Three.js / Canvas", level: "85%", category: "Graphics" },
    { name: "Next.js", level: "90%", category: "Framework" },
    { name: "Design Systems", level: "96%", category: "Design" },
  ],
  projects: [
    {
      id: "PRJ-01",
      title: "Cosmic SaaS Monitor",
      subtitle: "Telemetry & Mission Ops Dashboard",
      description: "Mission control portal with sub-second WebSocket telemetry, multi-stream data ingestion, and custom shader visualizers.",
      tags: ["React", "TypeScript", "Tailwind", "Canvas API"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      badge: "FEATURED CORE",
      type: "dashboard"
    },
    {
      id: "PRJ-02",
      title: "Quantum Prototype Engine",
      subtitle: "Haptic Motion & Physics System",
      description: "Generative UI system with spring-physics gesture sheets, canvas particle tracers, and instant asset compile pipelines.",
      tags: ["Framer Motion", "React", "Web Audio", "Vite"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      badge: "EXPERIMENTAL",
      type: "prototype"
    },
    {
      id: "PRJ-03",
      title: "Hyperion Variant Hub",
      subtitle: "Component Architecture Matrix",
      description: "Zero-dependency design system library orchestrating 50+ polymorphic tokens with dynamic ambient lighting.",
      tags: ["TypeScript", "Tailwind", "Accessibility", "Storybook"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      badge: "STABLE",
      type: "system"
    }
  ],
  timeline: [
    {
      phase: "PHASE 03",
      period: "2025 - PRESENT",
      role: "Lead Frontend Engineer",
      station: "TechNova Orbital Labs",
      highlights: [
        "Constructed low-latency web telemetry consoles reducing client frame drops to zero.",
        "Created an internal design token system adopted across 8 distributed product teams."
      ]
    },
    {
      phase: "PHASE 02",
      period: "2024 - 2025",
      role: "UI/UX Engineering Intern",
      station: "Studio Pulse Bangalore",
      highlights: [
        "Converted 40+ high-fidelity Figma prototypes into production React & Tailwind views.",
        "Optimized asset pipelines, driving Google Lighthouse performance scores to 99/100."
      ]
    },
    {
      phase: "PHASE 01",
      period: "2022 - 2024",
      role: "Research & Systems Associate",
      station: "Apex University Tech Division",
      highlights: [
        "Authored algorithms for real-time automated browser telemetry and face-mesh verification.",
        "Graduated top percentile with focused honors in Computer Applications & Architecture."
      ]
    }
  ]
};

/* =========================================================================
   2. SYNTHESIZED WEB AUDIO ENGINE
   ========================================================================= */
class SciFiAudioEngine {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;

  private init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playBlip(freq = 800, duration = 0.05) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + duration);
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio safety
    }
  }

  playRadarPing() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1400, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.35);
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.35);
    } catch {
      // Audio safety
    }
  }

  playWarpEngage() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(120, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.4);
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.4);
    } catch {
      // Audio safety
    }
  }
}

const audio = new SciFiAudioEngine();

/* =========================================================================
   3. SONAR RADAR CANVAS COMPONENT (FLUSH FLEX HEIGHT)
   ========================================================================= */
function SonarRadar() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeBlips, setActiveBlips] = useState(3);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let angle = 0;

    const targets = [
      { r: 0.38, a: 0.75, size: 4, label: "SAT-1" },
      { r: 0.65, a: 2.3, size: 5, label: "PROJ-CORE" },
      { r: 0.82, a: 4.1, size: 3.5, label: "NODE-X" },
      { r: 0.52, a: 5.4, size: 4.5, label: "INCOMING" },
    ];

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      const cx = width / 2;
      const cy = height / 2;
      const maxRadius = Math.min(cx, cy) - 10;

      ctx.clearRect(0, 0, width, height);

      [0.25, 0.5, 0.75, 1.0].forEach((ratio) => {
        ctx.beginPath();
        ctx.arc(cx, cy, maxRadius * ratio, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(52, 211, 153, 0.15)';
        ctx.stroke();
      });

      ctx.beginPath();
      ctx.moveTo(cx, cy - maxRadius);
      ctx.lineTo(cx, cy + maxRadius);
      ctx.moveTo(cx - maxRadius, cy);
      ctx.lineTo(cx + maxRadius, cy);
      ctx.strokeStyle = 'rgba(52, 211, 153, 0.12)';
      ctx.stroke();

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, maxRadius);
      gradient.addColorStop(0, 'rgba(52, 211, 153, 0.35)');
      gradient.addColorStop(0.8, 'rgba(52, 211, 153, 0.08)');
      gradient.addColorStop(1, 'rgba(52, 211, 153, 0.0)');

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, maxRadius, 0, Math.PI / 4, false);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(maxRadius, 0);
      ctx.strokeStyle = 'rgba(52, 211, 153, 0.9)';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();

      targets.forEach((tgt) => {
        const tx = cx + Math.cos(tgt.a) * (maxRadius * tgt.r);
        const ty = cy + Math.sin(tgt.a) * (maxRadius * tgt.r);
        const diff = (angle - tgt.a + Math.PI * 4) % (Math.PI * 2);
        const isIlluminated = diff < 0.6;

        ctx.beginPath();
        ctx.arc(tx, ty, tgt.size, 0, Math.PI * 2);
        if (isIlluminated) {
          ctx.fillStyle = '#34d399';
          ctx.shadowColor = '#34d399';
          ctx.shadowBlur = 12;
          ctx.fill();

          ctx.font = '9px monospace';
          ctx.fillStyle = '#6ee7b7';
          ctx.fillText(tgt.label, tx + 8, ty + 3);
        } else {
          ctx.fillStyle = 'rgba(52, 211, 153, 0.4)';
          ctx.shadowBlur = 0;
          ctx.fill();
        }
      });

      angle = (angle + 0.028) % (Math.PI * 2);
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div 
      className="relative flex-1 flex flex-col items-center justify-between p-5 rounded-3xl bg-zinc-950/80 border border-emerald-500/20 group cursor-pointer shadow-xl min-h-[260px]"
      onClick={() => {
        audio.playRadarPing();
        setActiveBlips((b) => (b % 4) + 1);
      }}
    >
      <div className="w-full flex items-center justify-between text-[9px] font-mono text-emerald-400 uppercase tracking-widest px-1">
        <span className="flex items-center gap-1.5">
          <Radio className="w-3 h-3 animate-pulse text-emerald-400" />
          RADAR SCANNER // BLIPS: {activeBlips}
        </span>
        <span className="text-[8px] text-zinc-500">LIVE FEED</span>
      </div>
      
      <canvas 
        ref={canvasRef} 
        width={210} 
        height={210} 
        className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] my-auto"
      />

      <div className="text-[8px] font-mono text-zinc-500 uppercase tracking-wider">
        CLICK SCANNER TO EMIT PING
      </div>
    </div>
  );
}

/* =========================================================================
   4. 3D ATOM CANVAS COMPONENT
   ========================================================================= */
function OrbitalTechAtom() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frameId: number;
    let tick = 0;

    const satellites = [
      { radius: 68, speed: 0.02, color: "#38bdf8", name: "REACT" },
      { radius: 68, speed: 0.02, color: "#34d399", name: "TAILWIND", offset: Math.PI },
      { radius: 105, speed: -0.012, color: "#f472b6", name: "FRAMER" },
      { radius: 105, speed: -0.012, color: "#a78bfa", name: "THREE.JS", offset: Math.PI * 0.7 },
      { radius: 135, speed: 0.008, color: "#fb7185", name: "SYSTEMS", offset: Math.PI * 1.4 },
    ];

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      const cx = width / 2;
      const cy = height / 2;

      ctx.clearRect(0, 0, width, height);

      const coreGrad = ctx.createRadialGradient(cx, cy, 5, cx, cy, 38);
      coreGrad.addColorStop(0, '#34d399');
      coreGrad.addColorStop(0.5, '#059669');
      coreGrad.addColorStop(1, 'rgba(4, 120, 87, 0.05)');

      ctx.beginPath();
      ctx.arc(cx, cy, 32, 0, Math.PI * 2);
      ctx.fillStyle = coreGrad;
      ctx.shadowColor = '#34d399';
      ctx.shadowBlur = 24;
      ctx.fill();
      ctx.shadowBlur = 0;

      [68, 105, 135].forEach((r) => {
        ctx.beginPath();
        ctx.ellipse(cx, cy, r, r * 0.45, Math.PI / 6, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      satellites.forEach((sat) => {
        const offset = sat.offset || 0;
        const currentAngle = tick * sat.speed + offset;

        const baseTilt = Math.PI / 6;
        const rawX = Math.cos(currentAngle) * sat.radius;
        const rawY = Math.sin(currentAngle) * (sat.radius * 0.45);

        const rotX = rawX * Math.cos(baseTilt) - rawY * Math.sin(baseTilt);
        const rotY = rawX * Math.sin(baseTilt) + rawY * Math.cos(baseTilt);

        const px = cx + rotX;
        const py = cy + rotY;

        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fillStyle = sat.color;
        ctx.shadowColor = sat.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.font = '8px monospace';
        ctx.fillStyle = '#cbd5e1';
        ctx.fillText(sat.name, px + 8, py + 3);
      });

      tick += 1;
      frameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-between p-4 rounded-3xl bg-zinc-900/30 border border-zinc-800/80 backdrop-blur-md overflow-hidden h-full min-h-[280px]">
      <div className="w-full flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-2">
        <span className="flex items-center gap-1.5 uppercase tracking-widest text-emerald-400">
          <Cpu className="w-3.5 h-3.5" /> 3D Orbital Tech Core
        </span>
        <span className="text-zinc-600">LIVE RENDER</span>
      </div>
      <canvas ref={canvasRef} width={340} height={220} className="w-full max-w-[320px] h-[190px] my-auto" />
      <div className="text-[9px] font-mono text-zinc-500 pt-1">
        NUCLEUS: REACT // REAL-TIME ORBITAL KINEMATICS
      </div>
    </div>
  );
}

/* =========================================================================
   5. MISSION HUD TERMINAL
   ========================================================================= */
function MissionTerminal() {
  const [history, setHistory] = useState<string[]>([
    "INITIALIZING AV-904 HUD SUBSYSTEM...",
    "TELEMETRY: ALL MODULES NOMINAL.",
    'TYPE "help" TO DISPLAY RECOGNIZED COMMAND MATRIX.'
  ]);
  const [cmd, setCmd] = useState("");
  const endRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cmd.trim()) return;

    audio.playBlip(920, 0.04);
    const cleanCmd = cmd.trim().toLowerCase();
    const newHistory = [...history, `visitor@av-core:~$ ${cmd}`];

    if (cleanCmd === "help") {
      newHistory.push(
        "AVAILABLE PROTOCOLS:",
        "  status    -> Return real-time ship/contract readiness",
        "  skills    -> Enumerate registered technology modules",
        "  projects  -> List mission cargo specifications",
        "  warp      -> Engage warp impulse transition to timeline",
        "  clear     -> Purge terminal log telemetry"
      );
    } else if (cleanCmd === "status") {
      newHistory.push(
        `STATUS: ${portfolioConfig.status}`,
        `LOCATION: ${portfolioConfig.location}`
      );
    } else if (cleanCmd === "skills") {
      newHistory.push(`REGISTERED: ${portfolioConfig.skills.map(s => s.name).join(", ")}`);
    } else if (cleanCmd === "projects") {
      newHistory.push(`CARGO MANIFEST: ${portfolioConfig.projects.map(p => p.title).join(" // ")}`);
    } else if (cleanCmd === "warp") {
      audio.playWarpEngage();
      const el = document.getElementById("timeline-section");
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      newHistory.push("WARP VECTOR COMPUTED -> NAVIGATING TO TIMELINE...");
    } else if (cleanCmd === "clear") {
      setHistory([]);
      setCmd("");
      return;
    } else {
      newHistory.push(`ERR: UNRECOGNIZED COMMAND "${cmd}". TRY "help".`);
    }

    setHistory(newHistory.slice(-14));
    setCmd("");
    setTimeout(() => {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <div className="rounded-3xl border border-emerald-500/20 bg-zinc-950/90 backdrop-blur-md p-4 font-mono text-[11px] flex flex-col justify-between shadow-2xl relative overflow-hidden h-[280px]">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2 text-zinc-400">
        <div className="flex items-center gap-2 text-emerald-400 font-bold text-[10px] tracking-wider">
          <TerminalIcon className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          VESSEL DIAGNOSTIC HUD v4.0.9
        </div>
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500/80" />
          <span className="w-2 h-2 rounded-full bg-amber-500/80" />
          <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-1 pr-1 scrollbar-thin scrollbar-thumb-zinc-800 text-zinc-300">
        {history.map((line, i) => (
          <div key={i} className={line.startsWith("visitor") ? "text-emerald-400 font-bold" : "text-zinc-400"}>
            {line}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-zinc-900 pt-2 mt-2">
        <span className="text-emerald-400 font-bold">$</span>
        <input 
          type="text" 
          value={cmd}
          onChange={(e) => setCmd(e.target.value)}
          placeholder='type "help", "status", or "warp"...'
          className="flex-1 bg-transparent border-none outline-none text-emerald-300 placeholder:text-zinc-700 font-mono text-xs"
        />
        <button 
          type="submit" 
          className="px-2.5 py-1 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 uppercase"
        >
          EXEC
        </button>
      </form>
    </div>
  );
}

/* =========================================================================
   6. 3D GYROSCOPIC TILT CARGO CARD
   ========================================================================= */
function ProjectTiltCard({ project }: { project: typeof portfolioConfig.projects[0] }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -8;
    const rY = ((x - centerX) / centerX) * 8;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((p) => ({ ...p, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => audio.playBlip(1100, 0.03)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="relative rounded-3xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/50 to-zinc-950 p-6 flex flex-col justify-between overflow-hidden shadow-2xl group hover:border-emerald-500/50"
    >
      <div 
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: glarePos.opacity,
          background: `radial-gradient(350px circle at ${glarePos.x}px ${glarePos.y}px, rgba(52, 211, 153, 0.15), transparent 80%)`
        }}
      />

      <div className="absolute top-2.5 left-2.5 w-2 h-2 border-t border-l border-emerald-400/50 pointer-events-none" />
      <div className="absolute top-2.5 right-2.5 w-2 h-2 border-t border-r border-emerald-400/50 pointer-events-none" />
      <div className="absolute bottom-2.5 left-2.5 w-2 h-2 border-b border-l border-emerald-400/50 pointer-events-none" />
      <div className="absolute bottom-2.5 right-2.5 w-2 h-2 border-b border-r border-emerald-400/50 pointer-events-none" />

      <div className="space-y-4 relative z-10">
        <div className="flex items-center justify-between text-[10px] font-mono">
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold uppercase tracking-wider">
            {project.badge}
          </span>
          <span className="text-zinc-500 tracking-widest">{project.id} // CARGO</span>
        </div>

        {/* VISUAL MOCKUP PREVIEW CONTAINER */}
        <div className="h-32 w-full rounded-2xl bg-zinc-950/80 border border-zinc-800/80 overflow-hidden relative p-3 flex flex-col justify-between group-hover:border-emerald-500/40 transition-colors">
          <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500">
            <span className="flex items-center gap-1 text-emerald-400">
              <Activity className="w-3 h-3 animate-pulse" /> LIVE STREAM
            </span>
            <span>60 FPS</span>
          </div>

          {project.type === 'dashboard' && (
            <div className="space-y-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
              <div className="grid grid-cols-3 gap-1.5">
                <div className="h-6 rounded bg-emerald-500/20 border border-emerald-500/30" />
                <div className="h-6 rounded bg-zinc-900 border border-zinc-800" />
                <div className="h-6 rounded bg-zinc-900 border border-zinc-800" />
              </div>
              <div className="h-10 rounded bg-zinc-900/90 border border-zinc-800 flex items-end p-1 gap-1">
                <div className="w-1/6 h-3 bg-emerald-400/60 rounded-sm" />
                <div className="w-1/6 h-6 bg-emerald-400/80 rounded-sm" />
                <div className="w-1/6 h-4 bg-emerald-400/50 rounded-sm" />
                <div className="w-1/6 h-7 bg-emerald-400 rounded-sm" />
                <div className="w-1/6 h-5 bg-emerald-400/70 rounded-sm" />
                <div className="w-1/6 h-8 bg-emerald-300 rounded-sm" />
              </div>
            </div>
          )}

          {project.type === 'prototype' && (
            <div className="flex items-center justify-center h-full">
              <div className="w-20 h-20 rounded-full border border-emerald-500/40 flex items-center justify-center animate-spin-slow relative">
                <div className="w-12 h-12 rounded-full border border-indigo-400/40" />
                <div className="w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              </div>
            </div>
          )}

          {project.type === 'system' && (
            <div className="grid grid-cols-2 gap-2 h-full items-center p-1">
              <div className="space-y-1">
                <div className="h-2 w-12 bg-emerald-400/40 rounded" />
                <div className="h-4 w-full bg-zinc-900 border border-zinc-800 rounded" />
              </div>
              <div className="space-y-1">
                <div className="h-2 w-10 bg-indigo-400/40 rounded" />
                <div className="h-4 w-full bg-zinc-900 border border-zinc-800 rounded" />
              </div>
            </div>
          )}

          <div className="text-[8px] font-mono text-zinc-600 text-right uppercase">
            RENDER ID: {project.id}-TX
          </div>
        </div>

        <div>
          <h3 className="text-xl font-black text-white group-hover:text-emerald-300 transition-colors flex items-center gap-1.5">
            {project.title}
            <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
          </h3>
          <p className="text-xs font-mono text-zinc-400 pt-0.5">{project.subtitle}</p>
        </div>

        <p className="text-sm text-zinc-300 leading-relaxed font-sans">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((t, idx) => (
            <span key={idx} className="text-[10px] font-mono text-zinc-400 bg-zinc-950 px-2.5 py-1 rounded-xl border border-zinc-800">
              #{t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-zinc-900/90 pt-4 mt-6 relative z-10">
        <a 
          href={project.githubUrl} 
          target="_blank" 
          rel="noreferrer" 
          className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
          onClick={() => audio.playBlip(750, 0.04)}
        >
          SOURCE_CODE
        </a>
        <a 
          href={project.demoUrl} 
          target="_blank" 
          rel="noreferrer" 
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1.5 rounded-xl bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
          onClick={() => audio.playWarpEngage()}
        >
          DEPLOYED_URL <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

/* =========================================================================
   7. WARP EXPERIENCE TIMELINE (HYPERSPACE CANVAS)
   ========================================================================= */
function WarpExperienceTimeline({ timeline }: { timeline: typeof portfolioConfig.timeline }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedPhase, setSelectedPhase] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frameId: number;
    const stars: { x: number; y: number; z: number; speed: number }[] = [];
    for (let i = 0; i < 80; i++) {
      stars.push({
        x: (Math.random() - 0.5) * 500,
        y: (Math.random() - 0.5) * 500,
        z: Math.random() * 500,
        speed: 5 + Math.random() * 7,
      });
    }

    const render = () => {
      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      stars.forEach((star) => {
        star.z -= star.speed;
        if (star.z <= 0) {
          star.z = 500;
          star.x = (Math.random() - 0.5) * 500;
          star.y = (Math.random() - 0.5) * 500;
        }

        const k = 200 / star.z;
        const px = star.x * k + cx;
        const py = star.y * k + cy;

        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
          const size = Math.max(0.8, (1 - star.z / 500) * 3.5);
          const tailLen = (1 - star.z / 500) * 20;
          
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(px, py - tailLen);
          ctx.strokeStyle = `rgba(52, 211, 153, ${1 - star.z / 500})`;
          ctx.lineWidth = size;
          ctx.stroke();
        }
      });

      frameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section id="timeline-section" className="space-y-6 relative">
      <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
        <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-2">
          <Globe className="w-4 h-4 text-emerald-400 animate-spin-slow" /> Warp Experience Flight Path
        </h2>
        <span className="text-[10px] font-mono text-zinc-500">HYPERSPACE TELEMETRY // ACTIVE</span>
      </div>

      <div className="rounded-3xl border border-emerald-500/30 bg-zinc-950/90 relative overflow-hidden p-6 sm:p-8 shadow-[0_0_50px_rgba(16,185,129,0.08)]">
        <canvas 
          ref={canvasRef} 
          width={800} 
          height={400} 
          className="absolute inset-0 w-full h-full opacity-35 pointer-events-none"
        />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-emerald-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className="md:col-span-4 space-y-3">
            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Select Vector Milestone:</p>
            {timeline.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedPhase(idx);
                  audio.playWarpEngage();
                }}
                className={`w-full text-left p-3.5 rounded-2xl border font-mono transition-all flex items-center justify-between ${
                  selectedPhase === idx 
                    ? 'border-emerald-400 bg-emerald-500/15 text-white shadow-[0_0_20px_rgba(52,211,153,0.2)]' 
                    : 'border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                }`}
              >
                <div>
                  <div className="text-[9px] text-emerald-400 tracking-wider">{item.phase}</div>
                  <div className="text-xs font-bold text-zinc-100">{item.station}</div>
                </div>
                <span className="text-[10px] text-zinc-500">{item.period}</span>
              </button>
            ))}
          </div>

          <div className="md:col-span-8 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                  [STATION COORD // {timeline[selectedPhase].phase}]
                </span>
                <h3 className="text-xl font-black text-white pt-1">
                  {timeline[selectedPhase].role}
                </h3>
                <p className="text-xs font-mono text-emerald-400/80">@ {timeline[selectedPhase].station}</p>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-400">
                {timeline[selectedPhase].period}
              </span>
            </div>

            <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Mission Objectives & Key Deliverables:</p>
            <ul className="space-y-2.5 text-xs text-zinc-300 leading-relaxed font-sans">
              {timeline[selectedPhase].highlights.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-zinc-900/80 flex items-center justify-between text-[10px] font-mono text-zinc-500">
              <span>STATUS: MISSION ARCHIVED</span>
              <span className="text-emerald-400 flex items-center gap-1 font-bold">
                VELOCITY: LIGHTSPEED STABLE
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   8. MAIN ORBITAL DECK APPLICATION
   ========================================================================= */
export default function App() {
  const [audioMuted, setAudioMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setCurrentTime(now.toTimeString().split(' ')[0] + " UTC");
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleAudio = () => {
    audio.enabled = audioMuted;
    setAudioMuted(!audioMuted);
    if (audioMuted) audio.playBlip(880, 0.05);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-zinc-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 relative overflow-x-hidden pb-24">
      
      {/* Background Star Ambient Radiance */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(16,185,129,0.15),transparent_70%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Floating Status Nav Bar */}
      <nav className="sticky top-4 z-50 max-w-5xl mx-auto px-4">
        <div className="backdrop-blur-xl bg-zinc-950/80 border border-emerald-500/25 rounded-2xl px-5 py-3 flex items-center justify-between shadow-[0_0_30px_rgba(52,211,153,0.1)]">
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="w-3 h-3 rounded-full bg-emerald-400 block animate-ping absolute inset-0 opacity-75" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 block relative" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-white tracking-widest">{portfolioConfig.callsign} // ORBITAL DECK</span>
              <span className="hidden sm:inline-block text-[10px] font-mono text-emerald-400 ml-2">● SYSTEM ONLINE</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="hidden md:flex items-center gap-1.5 text-zinc-400">
              <Compass className="w-3.5 h-3.5 text-emerald-400 animate-spin-slow" />
              <span>{currentTime || "00:00:00 UTC"}</span>
            </div>

            <button 
              onClick={toggleAudio}
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
              title="Toggle Audio Feedback"
            >
              {audioMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
              <span className="text-[10px] hidden sm:inline">{audioMuted ? "MUTED" : "AUDIO ON"}</span>
            </button>

            <a 
              href={portfolioConfig.socials.email}
              onClick={() => audio.playWarpEngage()}
              className="px-3.5 py-1.5 rounded-xl bg-emerald-500 text-zinc-950 font-bold text-xs hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
            >
              TRANSMIT
            </a>
          </div>
        </div>
      </nav>

      {/* Main Mission Control Body */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 space-y-12 relative z-10">
        
        {/* TOP HERO BENTO GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Pilot Dossier */}
          <div className="lg:col-span-7 rounded-3xl border border-zinc-800/90 bg-gradient-to-br from-zinc-900/50 via-zinc-950 to-zinc-950 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
                {portfolioConfig.status}
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">[PRIMARY DESIGNATION]</span>
                <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-none">
                  {portfolioConfig.name}
                </h1>
                <p className="text-base sm:text-lg font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent pt-1">
                  {portfolioConfig.role}
                </p>
                <p className="text-xs font-mono text-zinc-500 flex items-center gap-1.5 pt-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {portfolioConfig.location}
                </p>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed max-w-xl font-sans">
                {portfolioConfig.bio}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-8 border-t border-zinc-900 mt-6">
              <a 
                href={portfolioConfig.socials.github} 
                target="_blank" 
                rel="noreferrer" 
                onClick={() => audio.playBlip(700, 0.03)}
                className="px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
              >
                GITHUB
              </a>
              <a 
                href={portfolioConfig.socials.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                onClick={() => audio.playBlip(800, 0.03)}
                className="px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
              >
                LINKEDIN
              </a>
              <a 
                href={portfolioConfig.socials.twitter} 
                target="_blank" 
                rel="noreferrer" 
                onClick={() => audio.playBlip(900, 0.03)}
                className="px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
              >
                TWITTER
              </a>
              <a 
                href={portfolioConfig.socials.email} 
                onClick={() => audio.playWarpEngage()}
                className="px-4 py-2 rounded-xl bg-emerald-500 text-zinc-950 text-xs font-mono font-bold hover:bg-emerald-400 transition-all ml-auto shadow-md shadow-emerald-500/20"
              >
                CONNECT // COMMS
              </a>
            </div>
          </div>

          {/* Sonar Radar Module (Flush gap & balanced flex height) */}
          <div className="lg:col-span-5 flex flex-col gap-4 h-full">
            <SonarRadar />
            <div className="p-4 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 font-mono text-[11px] text-zinc-400 space-y-2 shadow-xl">
              <div className="flex items-center justify-between text-zinc-500 text-[10px]">
                <span className="tracking-wider uppercase">SUBSYSTEM LINK</span>
                <span className="text-emerald-400 font-bold">● ACTIVE</span>
              </div>
              <p className="text-zinc-300 leading-relaxed font-sans text-xs">
                Ready to deploy production web frontends with fluid state transitions and pixel-clean typography.
              </p>
            </div>
          </div>

        </section>

        {/* HUD TERMINAL & 3D ATOM ROW */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          <div className="md:col-span-7">
            <MissionTerminal />
          </div>
          <div className="md:col-span-5">
            <OrbitalTechAtom />
          </div>
        </section>

        {/* TECHNICAL STACK MATRIX */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-2">
              <LayersIcon className="w-4 h-4" /> Integrated Technology Matrix
            </h2>
            <span className="text-[10px] font-mono text-zinc-500">8 PROTOCOLS LOADED</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {portfolioConfig.skills.map((skill, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => audio.playBlip(950 + idx * 40, 0.02)}
                className="p-3.5 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:border-emerald-500/40 transition-all space-y-1.5 group cursor-default"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white group-hover:text-emerald-300">{skill.name}</span>
                  <span className="text-[10px] font-mono text-zinc-500">{skill.level}</span>
                </div>
                <div className="h-1 w-full bg-zinc-950 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 rounded-full" 
                    style={{ width: skill.level }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED CARGO / PROJECTS */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Mission Cargo // Featured Builds
              </h2>
            </div>
            <span className="text-[10px] font-mono text-zinc-500">3 VERIFIED DEPLOYMENTS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioConfig.projects.map((proj) => (
              <ProjectTiltCard key={proj.id} project={proj} />
            ))}
          </div>
        </section>

        {/* WARP TIMELINE / EXPERIENCE */}
        <WarpExperienceTimeline timeline={portfolioConfig.timeline} />

      </main>

      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 mt-16 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>MISSION DECK // {portfolioConfig.name} © {new Date().getFullYear()}</span>
        </div>
        <div className="text-[11px] text-zinc-400">
          POWERED BY REACT, TAILWIND & SYNTHESIZED WEB AUDIO
        </div>
      </footer>

    </div>
  );
}