import { contact } from '../data/siteContent';

/** Gera o link wa.me com a mensagem inicial já codificada. O envio sempre depende do visitante. */
export function waLink(message: string): string {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
