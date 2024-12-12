// pages/settings.tsx
import { useState } from 'react'
import SwitcherOne from '../FormElements/Switchers/SwitcherOne';
import ButtonDefault from "@/components/Buttons/ButtonDefault";

interface MediaType {
  id: string;
  label: string;
  enabled: boolean;
}

interface AlbumPermission {
  id: string;
  title: string;
  description: string;
  selected: boolean;
}

export default function Moderation() {
  const [manualApproval, setManualApproval] = useState(false)
  const [disableDownload, setDisableDownload] = useState(false)
  
  const [mediaTypes, setMediaTypes] = useState<MediaType[]>([
    { id: 'photos', label: 'Photos', enabled: true },
    { id: 'videos', label: 'Videos', enabled: true },
    { id: 'text', label: 'Text', enabled: true },
  ])

  const [permissions, setPermissions] = useState<AlbumPermission[]>([
    {
      id: 'view-upload',
      title: 'View & Upload',
      description: 'Guests can upload new photos & view existing ones',
      selected: true
    },
    {
      id: 'view-only',
      title: 'View Only',
      description: "Guests can view existing photos but can't upload new ones",
      selected: false
    },
    {
      id: 'upload-only',
      title: 'Upload Only',
      description: "Guests can upload new photos but can't view existing ones",
      selected: false
    }
  ])

  const selectPermission = (id: string) => {
    setPermissions(permissions.map(permission => ({
      ...permission,
      selected: permission.id === id
    })))
  }

  return (
    <div className="mx-auto p-8 space-y-8">
      {/* Welcome Screen Section */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Welcome Screen</h2>
        <p className="text-gray-500 mb-4">Set up an introductory screen for guests' first visit, with a form to collect their info.</p>
        <ButtonDefault
          label="Edit Welcome Screen"
          link="#"
          customClasses="border border-green text-green rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10"
        />
      </div>

      {/* Manual Approval Section */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div>
            <h2 className="text-lg font-semibold">Manually Approve Guest Uploads</h2>
            <p className="text-gray-500">
              Manually approve uploads made by guests before it's shown on your Slideshow and Digital Album.
              <span className="text-green-500 ml-2 cursor-pointer">More Info</span>
            </p>
          </div>
          <SwitcherOne />
        </div>
      </div>

      {/* Allowed Media Types */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Allowed Media Types</h2>
        <p className="text-gray-500 mb-4">Control what type of media can be uploaded to your event.</p>
        <div className="flex gap-4">
          {mediaTypes.map(type => (
            <button
              key={type.id}
              className={`px-6 py-2 rounded-lg ${
                type.enabled 
                ? 'bg-green-50 text-gray-700' 
                : 'bg-gray-100 text-gray-500'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {/* Digital Album Permissions */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Digital Album Permissions</h2>
        <p className="text-gray-500 mb-4">Control how guests can interact with your event's digital album.</p>
        <div className="grid grid-cols-3 gap-4">
          {permissions.map(permission => (
            <div
              key={permission.id}
              onClick={() => selectPermission(permission.id)}
              className={`p-4 rounded-lg cursor-pointer ${
                permission.selected
                ? 'border-2 border-green-500 bg-green-50'
                : 'border border-gray-200 bg-gray-50'
              }`}
            >
              <h3 className="font-medium mb-2">{permission.title}</h3>
              <p className="text-sm text-gray-500">{permission.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Disable Downloads */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div>
            <h2 className="text-lg font-semibold">Disable Guests Download</h2>
            <p className="text-gray-500">
              Hide the download button to prevent guests from downloading photos/videos in the album page.
            </p>
          </div>
          <SwitcherOne />
        </div>
      </div>

      {/* Update Button */}
      <div>
        <ButtonDefault
        label="Update"
        link="#"
          customClasses="bg-green text-white rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10"
        />
      </div>
    </div>
  )
}