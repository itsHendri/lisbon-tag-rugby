export type Lang = "en" | "pt";

export interface PhotoItem {
  src: string;
  alt: string;
  caption?: string;
  tall?: boolean;
}

export interface Content {
  meta: { title: string; description: string };
  nav: { wordmark: string; sub: string; instagram: string };
  hero: {
    kicker: string;
    titleA: string;
    titleB: string;
    sub: string;
    cta: string;
    scroll: string;
  };
  about: {
    kicker: string;
    title: string;
    p1: string;
    p2: string;
    photos: PhotoItem[];
  };
  rules: {
    kicker: string;
    title: string;
    intro: string;
    cards: { title: string; body: string }[];
    facts: string[];
    note: string;
  };
  where: {
    kicker: string;
    title: string;
    when: string;
    venue: string;
    body: string;
    rain: string;
    directions: string;
    mapEmbed: string;
    mapLink: string;
  };
  gear: {
    kicker: string;
    title: string;
    items: { name: string; body: string; img: PhotoItem }[];
  };
  kit: {
    kicker: string;
    title: string;
    body: string;
    badge: string;
    cta: string;
    ctaHref: string;
  };
  join: {
    kicker: string;
    title: string;
    steps: { title: string; body: string }[];
    whatsappLabel: string;
    whatsappHref: string;
    whatsappTbd: boolean;
    instagramLabel: string;
    instagramHref: string;
    invite: string;
  };
  photos: { kicker: string; title: string; items: PhotoItem[] };
  footer: { tagline: string; made: string; credits: string };
  popup: { title: string; note: string; close: string };
}
