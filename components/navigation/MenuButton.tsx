interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MenuButton = ({ isOpen, onClick }: MenuButtonProps) => (
  <button
    onClick={onClick}
    type="button"
    className="inline-flex items-center justify-center p-2 rounded-md text-pitkerBlue hover:text-pitkerRed focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pitkerBlue"
    aria-controls="mobile-menu"
    aria-expanded={isOpen}
  >
    <span className="sr-only">Open main menu</span>
    {isOpen ? (
      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
); 