import Image from 'next/image';

const PeopleHeader = () => {
  return (
    <header className="relative w-screen h-[40vh]">
      <Image
        src="/people-header.jpg"
        alt="Leadership Team"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      <div className="absolute inset-0 flex items-end justify-center p-8">
        <div className="w-3/4">
          <h1 className="text-pitkerRed uppercase text-4xl md:text-xl text-start">
            Notre équipe dirigeante
          </h1>
          <p className="text-white text-base md:text-xl mt-2 mb-24 text-start">
            Une expertise combinée de plus de 60 ans dans le recrutement de dirigeants
          </p>
        </div>
      </div>
    </header>
  );
};

export default PeopleHeader; 