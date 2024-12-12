// pages/index.tsx
import { FC } from 'react';
import Image from 'next/image';
import { Monitor, Tv, Laptop } from 'lucide-react';
import DefaultLayout from '@/components/Layouts/DefaultLaout';
import Link from 'next/link';

interface WeddingEventProps {
  names: string;
  date: string;
  planType: string;
  albumUrl: string;
  slideshowUrl: string;
}

const WeddingEvent: FC<WeddingEventProps> = ({
  names,
  date,
  planType,
  albumUrl,
  slideshowUrl,
}) => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-gray-200 rounded-lg">
          <Image
            width={224}
            height={224}
            src="/images/user/user-03.png"
            style={{
              top: "198px",
              left: "325px",
              width: "50px",
              height: "50px",
              background: "transparent url('img/emergency-medical-technician_889227-31510.png') 0% 0% no-repeat padding-box",
              borderRadius: "7px",
              opacity: 1,
            }}
            alt="User"
            className="overflow-hidden"
          />
        </div>
        <div>
          <h1 className="text-xl font-semibold">{names}</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Event start: {date}</span>
            <span className="px-2 py-1 text-sm bg-green-100 text-green-800 rounded">
              Plan: {planType}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Shared Album Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Shared Album</h2>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gray-600 flex-grow">{albumUrl}</span>
            <button className="px-3 py-1 text-green-500 border border-green-500 rounded">
              COPY
            </button>
            <button className="px-3 py-1 text-white bg-green-500 rounded">
              OPEN
            </button>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            The digital album lets your guests upload new photos or view existing ones. 
            Share it with your guests via a direct link or using its unique QR code 
            (print it or display it digitally).
          </p>
          <div className="flex gap-8 items-center justify-center mb-6">
            <div className="w-32 h-32">
              <Image
                src="/images/user/user-33.png"
                alt="QR Code"
                width={128}
                height={128}
                className="w-full h-full"
              />
            </div>
            <div className="w-24 h-24 border p-2">
              <Image
                src="/images/user/user-33.png"
                alt="QR Card"
                width={96}
                height={96}
                className="w-full h-full"
              />
              <Link rel="stylesheet" href="#" >
                <p className="text-center underline text-xs text-gray-500 mt-4">Edit Card</p>
              </Link>
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <button className="px-4 py-2 bg-green-500 text-white rounded">
              DOWNLOAD QR CODE
            </button>
            <button className="px-4 py-2 border border-green-500 text-green-500 rounded">
              DOWNLOAD QR CARD
            </button>
          </div>
        </div>

        {/* SlideShow Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">SlideShow</h2>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gray-600 flex-grow">{slideshowUrl}</span>
            <button className="px-3 py-1 text-green-500 border border-green-500 rounded">
              COPY
            </button>
            <button className="px-3 py-1 text-white bg-green-500 rounded">
              OPEN
            </button>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Every upload to your digital album automatically appears on your 
            SlideShow. Connect it to video projectors, TVs, or anywhere your 
            guests can easily find it.
          </p>
          <div className="bg-black p-6 rounded-lg mb-6">
            <div className="w-full max-w-xs mx-auto">
              <div className="w-12 h-12 bg-purple-500 rounded-full mb-4 mx-auto"></div>
              <p className="text-white text-center mb-4">Scan to view or Add photos!</p>
              <div className="w-48 h-48 mx-auto">
                <Image
                  src="/images/user/user-33.png"
                  alt="Slideshow QR Code"
                  width={192}
                  height={192}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">Display on</div>
            <div className="flex gap-4">
              <Monitor className="w-6 h-6 text-gray-400" />
              <Tv className="w-6 h-6 text-gray-400" />
              <Laptop className="w-6 h-6 text-gray-400" />
            </div>
            <a href="#" className="text-green-500 text-sm">How to do it?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <WeddingEvent
      names="Dara & Arifin Weddings"
      date="13 Aug 2024"
      planType="Lite"
      albumUrl="fotoslide.com/nu38hy"
      slideshowUrl="fotoslide.com/show/nu38hy"
    />
  );
}