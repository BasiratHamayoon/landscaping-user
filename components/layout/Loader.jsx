'use client';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="relative">
        {/* Orbit rings */}
        <div className="w-20 h-20 rounded-full border-2 border-primary/20 border-t-primary animate-spin"></div>
        <div
          className="absolute inset-2 rounded-full border-2 border-accent/20 border-b-accent animate-spin"
          style={{ animationDirection: 'reverse', animationDuration: '1.2s' }}
        ></div>
        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}