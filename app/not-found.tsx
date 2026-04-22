"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center bg-white">
      <style>{`
        @keyframes corgi-bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-16px); }
        }
        @keyframes tail-wag {
          0%, 100% { transform: rotate(-38deg); }
          50%       { transform: rotate(28deg); }
        }
        @keyframes tongue-bop {
          0%, 100% { transform: translateY(0) scaleY(1); }
          50%       { transform: translateY(5px) scaleY(1.15); }
        }
        @keyframes ear-wiggle {
          0%, 60%, 100% { transform: rotate(0deg); }
          65%  { transform: rotate(-14deg); }
          75%  { transform: rotate(9deg); }
          88%  { transform: rotate(-7deg); }
          95%  { transform: rotate(4deg); }
        }
        .corgi-bounce  { animation: corgi-bounce 1.3s ease-in-out infinite; }
        .corgi-tail    { transform-box: fill-box; transform-origin: 50% 100%; animation: tail-wag 0.45s ease-in-out infinite; }
        .corgi-tongue  { transform-box: fill-box; transform-origin: 50% 0%;   animation: tongue-bop 0.65s ease-in-out infinite; }
        .corgi-ear     { transform-box: fill-box; transform-origin: 50% 100%; animation: ear-wiggle 3.2s ease-in-out infinite; }
      `}</style>

      <p className="text-xs tracking-[0.18em] uppercase text-[#999] mb-4">Uh oh</p>

      <h1 className="text-[96px] md:text-[130px] font-extrabold tracking-tight leading-none text-[#1a56ff] mb-2">
        404
      </h1>

      {/* Corgi — side / 3/4 view, tri-colour */}
      <div className="corgi-bounce my-2">
        <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">

          {/* ── Tail (back-left, upright, wagging) ── */}
          <g className="corgi-tail">
            {/* Black tail with white fluffy tip */}
            <path d="M44 128 Q36 106 40 88 Q44 78 52 82 Q58 90 54 112 Z" fill="#1C1C1C"/>
            <ellipse cx="46" cy="84" rx="7" ry="9" fill="#F8F5F2"/>
          </g>

          {/* ── Far back leg ── */}
          <rect x="72" y="158" width="16" height="32" rx="8" fill="#8B5010"/>
          <ellipse cx="80" cy="190" rx="10" ry="5" fill="#D0CBC6"/>

          {/* ── Near back leg ── */}
          <rect x="92" y="156" width="18" height="34" rx="9" fill="#C87820"/>
          <ellipse cx="101" cy="190" rx="11" ry="5" fill="#F8F5F2"/>

          {/* ── Body — black saddle top, white belly ── */}
          <ellipse cx="140" cy="128" rx="90" ry="50" fill="#1C1C1C"/>
          {/* White belly */}
          <ellipse cx="140" cy="148" rx="68" ry="28" fill="#F8F5F2"/>
          {/* Tan flank hint on left side */}
          <ellipse cx="68" cy="130" rx="18" ry="30" fill="#C87820" opacity="0.45"/>

          {/* ── Far front leg ── */}
          <rect x="175" y="158" width="16" height="32" rx="8" fill="#8B5010"/>
          <ellipse cx="183" cy="190" rx="10" ry="5" fill="#D0CBC6"/>

          {/* ── Near front leg ── */}
          <rect x="194" y="156" width="18" height="34" rx="9" fill="#C87820"/>
          <ellipse cx="203" cy="190" rx="11" ry="5" fill="#F8F5F2"/>

          {/* ── White chest / collar ruff ── */}
          <ellipse cx="212" cy="138" rx="22" ry="30" fill="#F8F5F2"/>
          {/* Neck */}
          <ellipse cx="210" cy="118" rx="18" ry="20" fill="#1C1C1C"/>
          {/* White collar highlight */}
          <ellipse cx="210" cy="108" rx="13" ry="14" fill="#F8F5F2"/>

          {/* ── Far (left) ear — mostly black, peeking behind head ── */}
          <path d="M198 56 L202 22 Q214 14 220 24 L216 58Z" fill="#1C1C1C" opacity="0.8"/>

          {/* ── Head — tan base ── */}
          <circle cx="224" cy="86" r="48" fill="#C87820"/>

          {/* ── Black cap on top / back of head ── */}
          <path d="M180 72 Q188 36 222 33 Q256 33 264 62 Q268 84 250 96 Q230 110 200 108 Q180 100 180 72Z" fill="#1C1C1C"/>

          {/* ── Near (right) ear — tan outside, pink inside ── */}
          <g className="corgi-ear">
            <path d="M250 66 L260 24 Q274 14 280 28 L268 70Z" fill="#C87820"/>
            <path d="M253 66 L262 28 Q273 20 278 31 L266 68Z" fill="#FF8FA3"/>
          </g>

          {/* ── White blaze down forehead / nose bridge ── */}
          <path d="M222 36 Q228 33 233 37 L236 65 Q231 70 226 70 Q221 70 218 65Z" fill="#F8F5F2"/>

          {/* ── White muzzle ── */}
          <ellipse cx="254" cy="108" rx="18" ry="13" fill="#F8F5F2"/>

          {/* ── Tan cheek (below eye, stays tan since black cap stops higher) ── */}
          {/* The tan base circle already handles this */}

          {/* ── Tan eyebrow dot ── */}
          <circle cx="236" cy="78" r="5" fill="#E8A030"/>

          {/* ── Happy squint eye ── */}
          <path d="M228 88 Q237 80 246 88" stroke="#1A0F0A" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
          {/* Eye shine */}
          <circle cx="244" cy="85" r="2.5" fill="white"/>

          {/* ── Nose ── */}
          <ellipse cx="262" cy="102" rx="8" ry="6" fill="#1A0F0A"/>
          <ellipse cx="260" cy="101" rx="2.5" ry="2" fill="white" opacity="0.3"/>

          {/* ── Mouth ── */}
          <path d="M248 114 Q256 122 264 114" stroke="#1A0F0A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

          {/* ── Tongue ── */}
          <g className="corgi-tongue">
            <ellipse cx="256" cy="124" rx="11" ry="9" fill="#FF6B8A"/>
            <path d="M256 115 L256 133" stroke="#D94070" strokeWidth="2" strokeLinecap="round"/>
          </g>

        </svg>
      </div>

      <p className="text-2xl font-bold text-[#111] mb-3">Page not found</p>
      <p className="text-sm text-[#888] leading-relaxed mb-10 max-w-[280px]">
        Looks like this page took the corgi for a walk and never came back.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full bg-[#1a56ff] text-white hover:bg-[#1240d6] hover:shadow-[0_4px_20px_rgba(26,86,255,0.35)] active:scale-95 transition-all duration-200"
      >
        Take me home →
      </Link>
    </main>
  );
}
