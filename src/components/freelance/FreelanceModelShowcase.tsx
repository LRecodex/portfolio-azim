import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function FreelanceModelShowcase() {
  const [hasError, setHasError] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (customElements.get("model-viewer")) {
      return;
    }

    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    script.async = true;
    script.onerror = () => setHasError(true);
    document.head.appendChild(script);
  }, []);

  return (
    <div className="rounded-2xl ring-1 ring-white/15 overflow-hidden min-h-[250px] sm:min-h-[300px] bg-transparent">
      {hasError ? (
        <div className="h-full min-h-[250px] sm:min-h-[300px] flex items-center justify-center p-6 text-center text-sm text-slate-300">
          3D preview failed to load. Refresh the page to try again.
        </div>
      ) : (
        <model-viewer
          src="/glb/animation.glb"
          camera-controls
          auto-rotate={!reduceMotion}
          auto-rotate-delay="1800"
          rotation-per-second="12deg"
          autoplay
          ar={false}
          disable-pan
          interaction-prompt="auto"
          camera-orbit="-25deg 78deg 20%"
          min-camera-orbit="auto auto 40%"
          max-camera-orbit="auto auto 85%"
          field-of-view="22deg"
          min-field-of-view="15deg"
          max-field-of-view="30deg"
          shadow-intensity="1"
          exposure="1"
          style={{
            width: "100%",
            height: "100%",
            minHeight: "250px",
            background: "transparent",
          }}
        />
      )}
    </div>
  );
}
