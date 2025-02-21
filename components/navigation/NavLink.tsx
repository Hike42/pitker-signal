import Link from 'next/link';

interface NavLinkProps {
  href: string;
  label: string;
  className?: string;
}

export const NavLink = ({ href, label, className }: NavLinkProps) => (
  <Link
    href={href}
    className={`text-pitkerBlue hover:text-pitkerRed border-b-2 border-transparent hover:border-pitkerBlue transition-colors duration-300 ${className}`}
  >
    {label}
  </Link>
); 