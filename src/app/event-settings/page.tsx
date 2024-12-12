"use client";
import DefaultLayout from '@/components/Layouts/DefaultLaout';
// pages/index.tsx
import Tabs from './Tabs';
import DatePickerOne from '@/components/FormElements/DatePicker/DatePickerOne';
import ButtonDefault from '@/components/Buttons/ButtonDefault';
import EventSettings from '@/components/EventSettings/EventSettings';
import Slideshow from '@/components/Slideshow/Slideshow';
import Moderation from '@/components/Moderation/Moderation';

const Home: React.FC = () => {
  const tabs = [
    {
      label: 'General',
      content: 
      <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
        <div className="flex flex-col gap-5.5 p-6.5">
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Event Name <br />
              <span className="text-body-xs text-dark-5 dark:text-white">It'll be used through the app and will be showed to your guests.</span>
            </label>
            <input
              type="text"
              placeholder="Default Input"
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
              value={'Dara & Arifin Weddings'}
            />
          </div>

          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Event Date <br />
              <span className="text-body-xs text-dark-5 dark:text-white">Set when your event is scheduled to start.</span>
            </label>
            <DatePickerOne />
          </div>

          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Event Type <br />
              <span className="text-body-xs text-dark-5 dark:text-white">We'll adjust the experience according to your event type.</span>
            </label>
            <ButtonDefault
              label="Wedding"
              link="/"
              customClasses="border border-green text-green rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10 mr-4"
            />
            <ButtonDefault
              label="Conference"
              link="/"
              customClasses="border border-dark text-dark rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10 mr-4"
            />
            <ButtonDefault
              label="Birthday"
              link="/"
              customClasses="border border-dark text-dark rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10 mr-4"
            />
            <ButtonDefault
              label="Others"
              link="/"
              customClasses="border border-dark text-dark rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10 mr-4"
            />
          </div>
          <ButtonDefault
            label="Update"
            link="/"
            customClasses="bg-green text-white rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10"
          />
        </div>
      </div>,
    },
    {
      label: 'Appearance',
      content: 
      <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
        <EventSettings 
          onUpdate={() => console.log('Settings updated')}
        />
      </div>,
    },
    {
      label: 'Slideshow',
      content: 
      <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
        <Slideshow 
          onUpdate={() => console.log('Settings updated')}
        />
      </div>,
    },
    {
      label: 'Moderation',
      content: 
      <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
        <Moderation />
      </div>,
    },
    {
      label: 'Collaborators',
      content: 
      <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
        <div className="flex flex-col gap-5.5 p-6.5">
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Invite <br />
              <span className="text-body-xs text-dark-5 dark:text-white">Invite other members who can access and manage this event.</span>
            </label>
            <ButtonDefault
              label="Invite"
              link="/"
              customClasses="border border-green text-green rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10 mr-4"
            />
          </div>
          <div>
            <div className="flex flex-col">
              <div className="grid grid-cols-3 sm:grid-cols-5">
                <div className="px-2 pb-3.5">
                  <h5 className="text-sm font-medium text-dark xsm:text-base">
                    Email
                  </h5>
                </div>
                <div className="px-2 pb-3.5 text-center">
                  <h5 className="text-sm font-medium text-dark xsm:text-base">
                    Role
                  </h5>
                </div>
              </div>
                <hr />
              <div className={`grid grid-cols-3 sm:grid-cols-5 border-b border-stroke dark:border-dark-3`} >
                <div className="flex items-center gap-3.5 px-2 py-4">
                  <p className="hidden font-medium dark:text-white sm:block">
                    johndoe@gmail.com
                  </p>
                </div>

                <div className="flex items-center justify-center px-2 py-4">
                  <p className="font-medium text-purple-500 dark:text-purple-500">
                    OWNER
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>,
    },
  ];

  return (
    <DefaultLayout>
      <div className="container mx-auto p-4">
        <Tabs tabs={tabs} />
      </div>
    </DefaultLayout>
  );
};

export default Home;