import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        ar?: boolean;
        autoplay?: boolean;
        exposure?: string;
        "camera-controls"?: boolean | string;
        "camera-orbit"?: string;
        "min-camera-orbit"?: string;
        "max-camera-orbit"?: string;
        "field-of-view"?: string;
        "min-field-of-view"?: string;
        "max-field-of-view"?: string;
        "interaction-prompt"?: string;
        "disable-pan"?: boolean | string;
        "shadow-intensity"?: string;
      };
    }
  }
}

export {};
