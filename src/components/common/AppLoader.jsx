import { useEffect, useState } from "react";
import AppRouter from "../../router/AppRouter";
import LoadingScreen from "./LoadingScreen";

export default function AppLoader() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // simulasi proses inisialisasi (bisa fetch data, preload gambar, dll)
    const timeout = setTimeout(() => {
      setIsReady(true);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return isReady ? <AppRouter /> : <LoadingScreen />;
}
