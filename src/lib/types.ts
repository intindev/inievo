/**
 * Shared TypeScript interfaces for Inievo Technologies.
 *
 * Keep these immutable (`readonly`) where they describe content the UI only
 * displays — so a stray mutation can never quietly corrupt a data source.
 */

export type IconName = "linkedin" | "github" | "twitter" | "dribbble" | "instagram" | "facebook";

export interface NavLink {
  readonly label: string;
  readonly href: string;
  readonly description?: string;
}

export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly icon: IconName;
}

export interface ServiceCard {
  readonly id: string;
  readonly title: string;
  readonly summary: string;
  readonly href: string;
  readonly icon?: string;
  readonly bullets?: readonly string[];
}

export interface TeamMember {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly bio: string;
  readonly photoUrl?: string;
  readonly socials?: readonly SocialLink[];
}

export interface BlogPost {
  readonly slug: string;
  readonly title: string;
  readonly excerpt: string;
  readonly publishedAt: string;
  readonly readingMinutes: number;
  readonly author: string;
  readonly coverUrl?: string;
  readonly tags?: readonly string[];
}

export interface FAQ {
  readonly question: string;
  readonly answer: string;
}

export interface Testimonial {
  readonly id: string;
  readonly quote: string;
  readonly author: string;
  readonly role: string;
  readonly company?: string;
  readonly avatarUrl?: string;
}
