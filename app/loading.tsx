'use client';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState } from 'react';

export default function Loading() {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-blue-700 animate-bounce drop-shadow-lg tracking-wide">
        Loading...
      </h1>

      <div
        className={`transition-opacity duration-700 ease-in-out ${
          isReady ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <DotLottieReact
          src="/animations/loading.json"
          loop
          autoplay
          onLoad={() => setIsReady(true)}
          style={{ width: 200, height: 200 }}
        />
      </div>
    </div>
  );
}
