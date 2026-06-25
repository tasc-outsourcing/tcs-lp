import { useEffect } from "react";

type HubSpotFormProps = {
  portalId: string;
  formId: string;
  region: string;
  targetId: string;
  className?: string;
};

declare global {
  interface Window {
    hbspt?: {
      forms?: {
        create: (config: {
          portalId: string;
          formId: string;
          region: string;
          target: string;
        }) => void;
      };
    };
  }
}

const SCRIPT_ID = "hubspot-forms-embed";

export function HubSpotForm({
  portalId,
  formId,
  region,
  targetId,
  className,
}: HubSpotFormProps) {
  useEffect(() => {
    const createForm = () => {
      const target = document.getElementById(targetId);
      if (!target || target.dataset.hubspotRendered === "true") {
        return;
      }

      target.innerHTML = "";
      window.hbspt?.forms?.create({
        portalId,
        formId,
        region,
        target: `#${targetId}`,
      });
      target.dataset.hubspotRendered = "true";
    };

    if (window.hbspt?.forms?.create) {
      createForm();
      return;
    }

    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.onload = () => createForm();
      document.body.appendChild(script);
      return;
    }

    script.addEventListener("load", createForm, { once: true });
    const fallbackTimer = window.setTimeout(() => createForm(), 0);
    return () => {
      script?.removeEventListener("load", createForm);
      window.clearTimeout(fallbackTimer);
    };
  }, [formId, portalId, region, targetId]);

  return <div id={targetId} className={className} />;
}
