import React from 'react';
import { Pencil, Upload } from 'lucide-react';
import DefaultLayout from '@/components/Layouts/DefaultLaout';
import Image from 'next/image';

interface Album {
  id: string;
  title: string;
  coverImage: string;
  photoCount: number;
}

interface AlbumCardProps {
  title: string;
  coverImage: string;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ title, coverImage }) => (
  <div className="w-32 h-40 rounded-lg overflow-hidden relative cursor-pointer">
    <Image
      src={coverImage || "/api/placeholder/128/160"}
      alt={title}
      className="w-full h-32 object-cover"
    />
    <div className="p-2 bg-white">
      <p className="text-xs font-medium truncate">{title}</p>
    </div>
  </div>
);

const PhotoAlbum: React.FC = () => {
  const albums: Album[] = [
    {
      id: '1',
      title: 'Dara & Arifin Weddings',
      coverImage: '/images/user/user-34.png',
      photoCount: 78
    },
    {
      id: '2',
      title: 'Beach Club Party with Colleagues',
      coverImage: '/images/user/user-35.png',
      photoCount: 78
    },
    {
      id: '3',
      title: 'Night',
      coverImage: '/images/user/user-36.png',
      photoCount: 78
    }
  ];

  return (
    <DefaultLayout>
      <div className="max-w-6xl mx-auto p-6">
        {/* Album Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-4">Album</h1>
          <div className="flex gap-4">
            {albums.map((album) => (
              <AlbumCard
                key={album.id}
                title={album.title}
                coverImage={album.coverImage}
              />
            ))}
            <div className="w-32 h-40 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer">
              <div className="text-center">
                <div className="text-gray-400 mb-1">+ Create Album</div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Album Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold">Beach Club Party with Colleagues</h2>
              <Pencil className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                <Upload className="w-4 h-4" />
                Upload
              </button>
              <span className="text-gray-600">78 photos of Unlimited Photos</span>
              <button className="border border-green-500 text-green-500 px-4 py-2 rounded-lg">
                Album Cover
              </button>
              <button className="border border-green-500 text-green-500 px-4 py-2 rounded-lg">
                Download
              </button>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="aspect-square bg-gray-100 rounded-lg">
                <div className="w-full h-full bg-gray-200 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default PhotoAlbum;