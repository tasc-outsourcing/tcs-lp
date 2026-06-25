import { useEffect } from "react";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          portalId: string;
          formId: string;
          region: string;
          target: string;
        }) => void;
      };
    };
    __hsFormsScriptLoading?: Promise<void>;
  }
}

const HUBSPOT_SCRIPT_ID = "hubspot-forms-v2-script";

function loadHubSpotScript() {
  if (window.hbspt) {
    return Promise.resolve();
  }

  if (window.__hsFormsScriptLoading) {
    return window.__hsFormsScriptLoading;
  }

  window.__hsFormsScriptLoading = new Promise<void>((resolve, reject) => {
    const existing = document.getElementById(HUBSPOT_SCRIPT_ID) as
      | HTMLScriptElement
      | null;

    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error("Failed to load HubSpot script")),
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.id = HUBSPOT_SCRIPT_ID;
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.src = "https://js.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load HubSpot script"));
    document.body.appendChild(script);
  });

  return window.__hsFormsScriptLoading;
}

type HubSpotFormProps = {
  containerId: string;
  theme: "dark" | "light";
  className?: string;
};

export function HubSpotForm({ containerId, theme, className }: HubSpotFormProps) {
  useEffect(() => {
    let cancelled = false;

    const mountForm = async () => {
      await loadHubSpotScript();
      if (cancelled || !window.hbspt) {
        return;
      }

      const container = document.getElementById(containerId);
      if (!container) {
        return;
      }

      container.innerHTML = "";
      window.hbspt.forms.create({
        portalId: "20309062",
        formId: "31e4af3a-f1a3-4b0b-8f48-1a8401db16ef",
        region: "na1",
        target: `#${containerId}`,
      });
    };

    void mountForm();

    return () => {
      cancelled = true;
    };
  }, [containerId]);

  return (
    <div className={`hubspot-form-container hubspot-form-container--${theme} ${className ?? ""}`}>
      <div id={containerId} />
    </div>
  );
}
