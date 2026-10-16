(() => {
  "use strict";
  // Compartir la invitación: menú nativo del teléfono o, si no existe, copiar el enlace.
  const button = document.getElementById("share-invitation");
  const status = document.getElementById("share-status");
  if (!button) return;
  const config = window.INVITATION_CONFIG || {};
  const names = `${config.names?.dad || "Franco"} y ${config.names?.mom || "María"}`;
  const text = `${names} te invitan a descubrir si su bebé será niña o niño. 💙💗`;

  button.addEventListener("click", async () => {
    const url = location.href.split("#")[0];
    if (navigator.share) {
      try { await navigator.share({ title: document.title, text, url }); return; }
      catch (error) { if (error?.name === "AbortError") return; }
    }
    try {
      await navigator.clipboard.writeText(`${text}\n${url}`);
      status.textContent = "Enlace copiado. Pégalo en WhatsApp para compartirlo.";
    } catch (_) {
      status.textContent = `Copia este enlace: ${url}`;
    }
  });
})();
