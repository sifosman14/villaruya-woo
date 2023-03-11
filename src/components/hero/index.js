import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative h-screen overflow-hidden">
      <Image
        src="https://backend.villaruya.co.za/wp-content/uploads/2023/03/Beach-Towel.webp"
        alt="Hero background image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-opacity-50 bg-black"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-5xl font-medium mb-4">Welcome to Villaruya!</h1>
          <p className="text-white text-xl mb-8">
            We offer the finest Turkish towels for your luxury lifestyle.
          </p>
          <button className="bg-white text-black rounded px-8 py-4 font-bold hover:bg-gray-200">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
