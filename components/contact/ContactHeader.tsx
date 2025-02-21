import Image from 'next/image';

const ContactHeader: React.FC = () => {
  return (
    <header className="relative w-screen h-[25rem]">
      <Image
        src="/contact.jpg"
        alt="Immeuble Haussmannien à Paris"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      <div className="absolute inset-0 flex items-end justify-center p-4 md:p-8">
        <div className="w-3/4">
          <h1 className="text-pitkerRed uppercase text-4xl md:text-xl text-start">
            Contact
          </h1>
          <p className="text-white text-base md:text-xl mt-2 mb-12 text-start">
          Our team is at your disposal to discuss your leadership challenges.
          </p>
        </div>
      </div>
    </header>
  );
};

export default ContactHeader; 