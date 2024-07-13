import Image from 'next/image';

export default function SummaryMainHeader() {
  return (
    <div className="flex flex-col md:flex-row text-center md:text-left items-center gap-4 self-center">
      <div className="relative w-40 h-40 overflow-hidden rounded-full">
        <Image
          src="/circle-cropped.png"
          alt="Profile Picture of Alejandro Navarini"
          fill
          style={{
            objectFit: 'cover',
          }}
          priority
        />
      </div>
      <div>
        <h1 className="font-bold text-3xl">Alejandro Manuel Navarini</h1>
        <h2 className="text-xl">Software Developer</h2>
      </div>
    </div>
  );
}
