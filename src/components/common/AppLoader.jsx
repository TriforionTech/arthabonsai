import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";
import AppRouter from "../../router/AppRouter";

export default function AppLoader() {
  const [isReady, setIsReady] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const preloadResources = async () => {
      // Simulate router loading (optional, for smoother progress)
      await new Promise((resolve) => setTimeout(resolve, 200));
      setLoadingProgress(20);

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
            // Start progress from 20% and use the remaining 80% for images
            setLoadingProgress(20 + (loaded / total) * 80);
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

  return isReady ? <AppRouter /> : <LoadingScreen progress={loadingProgress} />;
}
