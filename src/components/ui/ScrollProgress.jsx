import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const totalScrollable = scrollHeight - clientHeight;
      const value = totalScrollable > 0 ? (scrollTop / totalScrollable) * 100 : 0;
      setProgress(value);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1 overflow-hidden pointer-events-none">
      <div
        className="h-full bg-primary shadow-[0_0_20px_rgba(37,99,235,0.35)] transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
