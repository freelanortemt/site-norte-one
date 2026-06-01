export const whatsappNumber = "5566992204744";
export const whatsappDisplay = "(66) 99220-4744";

export function whatsappUrl(message = "Olá! Gostaria de solicitar um orçamento com a Norte One.") {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
