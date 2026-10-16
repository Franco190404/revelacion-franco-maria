// Invitación de Franco y María: personaliza aquí. No se incluye el sexo del bebé.
window.INVITATION_CONFIG = {
  storageNamespace: "franco-maria-2026",
  names: {
    mom: "María",
    dad: "Franco",
  },
  image: "assets/girl-pink-boy-blue.jpg",
  colors: {
    ivory: "#F6EFE6", // Color de la barra del navegador; el fondo beige está en styles.css
    pink: "#E9C6C4",
    blue: "#C3D5DD",
    ink: "#4A3628",
  },
  // Video disponible desde el inicio de la visita; la TV no revela el resultado.
  video: {
    src: "assets/video-revelacion.mp4", // Video de Franco y María (58 s)
    width: 1920,
    height: 1080,
    muted: false,
  },
  nextSectionId: "television-section",
  parentsSectionId: "parents-message",
  voteSectionId: "vote-section",
  teamSelection: {
    eventId: "franco-maria-revelacion-2026-11-06", // Identificador único y estable de este evento.
    nextSectionId: "baby-predictions",
  },
  capsule: {
    // Orientación opcional; fechas de calendario YYYY-MM-DD. Vacías = sin rango.
    arrivalRange: { earliest: "", latest: "" },
    nextSectionId: "attendance-section",
  },
  attendance: {
    maxGuests: 4, // Máximo por invitación, contando al invitado. Entero entre 1 y 100.
    whatsappNumber: "584247323466", // Número internacional con código de país (ej. 584141234567); vacío = sin botón.
    saveResponse: null, // Función de registro real; consulta el contrato en README.md.
    nextSectionId: "baby-wishes",
  },
  parentsMessage: {
    title: "Un pequeño milagro viene en camino",
    text: "Con el corazón lleno de amor y una ilusión que no cabe en el pecho, queremos compartir contigo uno de los momentos más especiales de nuestras vidas.\n\nUn pequeño milagro viene en camino y llegó la hora de descubrir si será un príncipe o una princesa. 💙💗\n\nNos encantaría que estuvieras con nosotros cuando se revele este dulce secreto, porque las personas que amamos hacen que cada momento sea aún más mágico.",
    // {mom} y {dad} toman los nombres de arriba.
    signature: "Con todo nuestro cariño,\nPapá {dad} y Mamá {mom}",
  },
  familyPhoto: {
    src: "assets/ecografia.jpg", // Ecografía recortada, sin datos personales.
    alt: "Ecografía del bebé de {mom} y {dad}.",
    width: 960,
    height: 1200,
  },
  eventSectionId: "event-section",
  // Fechas ISO con desfase explícito. Venezuela usa UTC-4 todo el año.
  event: {
    name: "Revelación de sexo · Franco y María",
    timeZone: "America/Caracas",
    start: "2026-11-06T17:00:00-04:00",
    end: "2026-11-06T21:30:00-04:00",
    venue: "Colegio de Abogados del Estado Táchira",
    address: "San Cristóbal, Estado Táchira, Venezuela",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Colegio+de+Abogados+del+Estado+T%C3%A1chira%2C+San+Crist%C3%B3bal",
    note: "Te esperamos de 5:00 p. m. a 9:30 p. m.\nPor favor, confírmanos tu asistencia en los 3 días siguientes a recibir esta invitación.",
    description: "Acompáñanos a descubrir si será un príncipe o una princesa.",
    dressCode: {
      enabled: true,
      text: "Te pedimos venir con colores claros: blanco, beige o tonos pastel.",
    },
  },
  // Si más adelante agregas música, usa aquí el ID de su elemento <audio>.
  backgroundMusicId: "background-music",
};
