import { useState, useRef, useEffect } from "react";

// Import video dan gambar fallback
import aboutVideo from "/src/assets/about-animation.mp4";

export default function AboutUs() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);

  // Preload dan optimasi video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsVideoLoaded(true);
      // Coba play video setelah metadata loaded
      video.play().catch(() => {
        console.log("Autoplay prevented, waiting for user interaction");
      });
    };

    const handleError = () => {
      console.error("Video loading error");
      setHasError(true);
    };

    // Preload strategy
    video.preload = "metadata";
    video.load();

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <section id="about" className="w-full py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Kolom kiri: teks */}
          <div className="flex-1 text-center lg:text-left lg:max-w-prose">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Our Story, Our Passion
            </h2>
            <p className="text-gray-600 md:text-lg leading-relaxed mb-6">
              From apple orchards to the international bonsai stage,{" "}
              <span className="font-semibold text-green-700">Pak Arpai</span>{" "}
              proves that bonsai is more than just art—it's a legacy. Artha
              Bonsai was born to nurture beauty, shape patience, and grow a new
              generation of nature lovers.
            </p>

            <a
              href="/about"
              className="inline-block px-8 py-3 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition"
            >
              Read Our Story
            </a>
          </div>

          {/* Kolom kanan: Video */}
          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden bg-gray-100">
              {/* Loading State */}
              {!isVideoLoaded && !hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse z-10">
                  <div className="text-gray-500 text-sm">Loading video...</div>
                </div>
              )}

              {/* Error State */}
              {hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-20">
                  <div className="text-gray-500 text-center">
                    <div className="text-lg mb-2">Video tidak dapat dimuat</div>
                    <button
                      onClick={() => window.location.reload()}
                      className="text-sm text-green-600 hover:text-green-800"
                    >
                      Coba lagi
                    </button>
                  </div>
                </div>
              )}

              {/* Video Element dengan Optimasi */}
              <video
                ref={videoRef}
                src={aboutVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className={`
                  w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover
                  transition-opacity duration-500
                  ${isVideoLoaded ? "opacity-100" : "opacity-0"}
                `}
                // Optimasi performa
                style={{
                  transform: "translateZ(0)", // Hardware acceleration
                  backfaceVisibility: "hidden",
                }}
              >
                Your browser does not support the video tag.
              </video>

              {/* Fallback image jika video gagal */}
              {hasError && (
                <img
                  src=""
                  alt="About Artha Bonsai"
                  className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover absolute inset-0 z-30"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
