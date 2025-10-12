import { useEffect, useState, Suspense, lazy } from "react";

import LoadingScreen from "./LoadingScreen";

// Lazy load the router untuk code splitting yang lebih baik
const AppRouter = lazy(() => import("../../router/AppRouter"));

export default function AppLoader() {
  const [isReady, setIsReady] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Preload critical resources dengan progress tracking
    const preloadResources = async () => {
      const criticalImages = [
        "/src/assets/images/landing/hero-bg.webp",
        "/src/assets/images/landing/bonsai1.webp",
        "/src/assets/images/landing/bonsai2.webp",
      ];

      let loaded = 0;
      const total = criticalImages.length;

      const imagePromises = criticalImages.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = img.onerror = () => {
            loaded++;
            setLoadingProgress((loaded / total) * 100);
            resolve();
          };
          img.src = src;
        });
      });

      await Promise.all(imagePromises);

      // Tambahan delay kecil untuk smooth transition
      setTimeout(() => {
        setIsReady(true);
      }, 300);
    };

    preloadResources();
  }, []);

  return (
    <Suspense fallback={<LoadingScreen />}>
      {isReady ? <AppRouter /> : <LoadingScreen progress={loadingProgress} />}
    </Suspense>
  );
}
