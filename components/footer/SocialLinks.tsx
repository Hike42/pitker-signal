import Link from 'next/link';

const SOCIAL_LINKS = {
  LINKEDIN: 'https://www.linkedin.com/company/pitker'
} as const;

export const SocialLinks = () => (
  <div className="flex space-x-4">
    <Link
      href={SOCIAL_LINKS.LINKEDIN}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
      aria-label="LinkedIn"
    >
      <svg
        className="h-8 w-8 fill-white group-hover:fill-pitkerRed transition-colors duration-300"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.966 0-1.75-.78-1.75-1.74s.784-1.74 1.75-1.74 1.75.78 1.75 1.74-.784 1.74-1.75 1.74zm13.5 10.29h-3v-4.5c0-1.07-.021-2.45-1.491-2.45-1.49 0-1.718 1.164-1.718 2.37v4.58h-3v-9h2.881v1.23h.041c.401-.762 1.379-1.563 2.839-1.563 3.038 0 3.6 2 3.6 4.6v4.733z" />
      </svg>
    </Link>
  </div>
); 