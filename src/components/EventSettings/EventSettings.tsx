import { useState } from 'react';
import Image from 'next/image';

interface EventSettingsProps {
  onUpdate?: () => void;
}

const EventSettings = ({ onUpdate }: EventSettingsProps) => {
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
          {/* Event Logo Section */}
          <div className="space-y-2">
            <h2 className="text-lg font-medium">Event Logo</h2>
            <p className="text-sm text-gray-500">
              Brand your event with a logo that will be publically shown through out the event. 
              For best results, use square photos (1:1).
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
                  <div className="relative w-32 h-32">
                    <Image
                      src={logoUrl}
                      alt="Event logo"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                    <button
                      onClick={handleRemoveLogo}
                      className="absolute -bottom-8 left-0 text-sm text-gray-500 hover:text-gray-700"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Display Language Section */}
          <div className="space-y-2">
            <h2 className="text-lg font-medium">Display Language</h2>
            <p className="text-sm text-gray-500">
              Localize the experience according your audience language.
            </p>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full p-2 bg-gray-50 border border-gray-300 rounded-md"
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </div>

          {/* Caption Theme Section */}
          <div className="space-y-2">
            <h2 className="text-lg font-medium">Caption Theme</h2>
            <p className="text-sm text-gray-500">
              {"Choose a theme color for your brand. We'll use that throughout the public pages (Photo Wall, Album, etc.)"}
            </p>
            <div className="flex items-center space-x-2">
              <div
                className="w-8 h-8 rounded"
                style={{ backgroundColor: themeColor }}
              />
              <input
                type="text"
                value={themeColor}
                onChange={(e) => setThemeColor(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-8">
          {/* Theme Toggle Section */}
          <div className="space-y-2">
            <h2 className="text-lg font-medium">Caption Theme</h2>
            <p className="text-sm text-gray-500">
              Change the theme color of the photo/video caption (if it has one)
            </p>
            <div className="inline-flex rounded-md border border-gray-300">
              <button
                onClick={() => setCaptionTheme('Light')}
                className={`px-4 py-2 text-sm ${
                  captionTheme === 'Light'
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-gray-700'
                }`}
              >
                Light
              </button>
              <button
                onClick={() => setCaptionTheme('Dark')}
                className={`px-4 py-2 text-sm ${
                  captionTheme === 'Dark'
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-gray-700'
                }`}
              >
                Dark
              </button>
            </div>
          </div>

          {/* Text Post Backgrounds Section */}
          <div className="space-y-2">
            <h2 className="text-lg font-medium">Text Post Backgrounds</h2>
            <p className="text-sm text-gray-500">
              Customize the backgrounds that can be used for uploading Text Posts.
            </p>
            <button className="px-4 py-2 text-sm text-green-500 border border-gray-300 rounded-md hover:bg-gray-50">
              Edit Background
            </button>
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

export default EventSettings;