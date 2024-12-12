import { useState } from 'react';
import Image from 'next/image';
import SwitcherOne from '../FormElements/Switchers/SwitcherOne';

interface SlideshowProps {
  onUpdate?: () => void;
}

const Slideshow = ({ onUpdate }: SlideshowProps) => {
  const [logoUrl, setLogoUrl] = useState<string>('/images/user/user-03.png');
  const [captionTheme, setCaptionTheme] = useState<'Light' | 'Dark'>('Light');
  const [language, setLanguage] = useState('English');
  const [themeColor, setThemeColor] = useState('#0BB90B');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setLogoUrl(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveLogo = () => {
    setLogoUrl('');
  };

  return (
    <div className="mx-auto p-6 space-y-8">
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex-1 space-y-8">
          {/* Slideshow Background Section */}
          <div className="space-y-2">
            <h2 className="text-lg font-medium">Slideshow Background</h2>
            <p className="text-sm text-gray-500">
              Customize the background of the Slideshow.
            </p>
            <div className="flex items-center space-x-4">
              <label className="px-4 py-2 bg-white border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                <span className="text-sm text-green-500">Upload</span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/jpeg,image/png"
                  onChange={handleFileUpload}
                />
              </label>
              <span className="text-sm text-gray-500">JPG/PNG Accepted</span>
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                {logoUrl && (
                  <div className="relative w-20 h-20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="61.998" viewBox="0 0 62 61.998">
                      <rect width="62" height="61.998" fill="#f0f0f0" rx="8" ry="8"/>
                      <g transform="translate(4, 4)">
                        <g id="image-_1_" data-name="image- (1)" transform="translate(-1.594 -1.621)" opacity="0.172">
                          <path id="Path_1492" data-name="Path 1492" d="M62.623,35.652,53.271,13.78c-1.7-4-4.243-6.275-7.141-6.424-2.868-.149-5.647,1.853-7.769,5.677L32.684,23.222c-1.2,2.151-2.9,3.436-4.751,3.586-1.883.179-3.765-.807-5.289-2.749l-.657-.837c-2.121-2.659-4.751-3.944-7.44-3.675s-4.99,2.121-6.514,5.139L2.863,34.994A11.9,11.9,0,0,0,13.5,52.235H51.627a11.916,11.916,0,0,0,9.95-5.349A11.7,11.7,0,0,0,62.623,35.652Z" transform="translate(0 11.384)" fill="#b1b1b1"/>
                          <path id="Path_1493" data-name="Path 1493" d="M13.689,21.82a10.1,10.1,0,1,0-10.1-10.1A10.1,10.1,0,0,0,13.689,21.82Z" transform="translate(3.968)" fill="#b1b1b1"/>
                        </g>
                      </g>
                    </svg>
                    <button
                      onClick={handleRemoveLogo}
                      className="left-0 text-sm text-gray-500 hover:text-gray-700"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Slideshow Duration Section */}
          <div className="space-y-2">
            <h2 className="text-lg font-medium">Slideshow Duration</h2>
            <p className="text-sm text-gray-500">
              Adjust how long each media id displayed in the Slideshow.
            </p>
            <div className="flex items-center space-x-2">
                Image
              <div className="flex flex-col items-center">
                <input
                  type="text"
                  value={8}
                  className="px-3 py-1 border border-gray-300 rounded-md mr-4 ml-4"
                />
                <span className="text-xs text-gray-500">seconds</span>
              </div>
                Video
              <div className="flex flex-col items-center">
                <input
                  type="text"
                  value={12}
                  className="px-3 py-1 border border-gray-300 rounded-md mr-4"
                />
                <span className="text-xs text-gray-500">seconds</span>
              </div>
            </div>
          </div>

          {/* Hide Slideshow QRCode Section */}
          <div className="space-y-2">
            <h2 className="text-lg font-medium">Hide Slideshow QRCode</h2>
            <div className="flex items-center">
              <p className="text-sm text-gray-500 mr-20">
                Turn on to remove QRCode from the Slideshow page.
              </p>
              <SwitcherOne />
            </div>
          </div>

          {/* Hide Slideshow Video Sound Section */}
          <div className="space-y-2">
            <h2 className="text-lg font-medium">Hide Slideshow Video Sound</h2>
            <div className="flex items-center">
              <p className="text-sm text-gray-500 mr-16">
                Turn will enable videos sound when played in Slideshow.
              </p>
              <SwitcherOne />
            </div>
          </div>
        </div>
      </div>
      {/* Update Button */}
      <button
        onClick={onUpdate}
        className="w-full sm:w-auto px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        Update
      </button>
    </div>
  );
};

export default Slideshow;