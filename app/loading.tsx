'use client';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-blue-700 animate-bounce drop-shadow-lg tracking-wide">
        Loading...
      </h1>

      <DotLottieReact
        src="/animations/loading.json"
        loop
        autoplay
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
}
