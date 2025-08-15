export const motivationalMessages = [
  "“La libertad es la soberanía que tienes sobre tu propia vida.” - Epicteto. Bitcoin es un paso hacia esa soberanía.",
  "“El conocimiento es poder.” - Francis Bacon. Aprender sobre Bitcoin te da poder sobre tu futuro financiero.",
  "“La mejor manera de predecir el futuro es creándolo.” - Peter Drucker. Con cada transacción, construyes un nuevo sistema financiero.",
  "“No es la especie más fuerte la que sobrevive, ni la más inteligente, sino la que mejor responde al cambio.” - Charles Darwin. Adáptate a la nueva era del dinero.",
  "“El viaje de mil millas comienza con un solo paso.” - Lao Tse. Tu viaje hacia la soberanía financiera comienza con el primer satoshi.",
  "“La tecnología es solo una herramienta. En términos de conseguir que los niños trabajen juntos y se motiven, el profesor es el más importante.” - Bill Gates. Usa la tecnología para construir un futuro mejor.",
  "“La inflación es el ladrón invisible que roba el valor de tu dinero. Bitcoin es el guardián que lo protege.” - Adaptado de varios autores.",
  "“No confíes, verifica.” - Un principio fundamental de Bitcoin. Aprende a ser tu propio banco.",
  "“El futuro del dinero es digital, descentralizado y soberano. El futuro es ahora.”",
  "“Tejiendo la soberanía financiera de Bolivia, un byte a la vez.” - Manifiesto Alpaka."
];

export const getRandomMessage = () => {
  return motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
};
