import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ClickOutside from "@/components/ClickOutside";
import ButtonDefault from "@/components/Buttons/ButtonDefault";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="h-12 w-12 rounded-full">
          <Image
            width={112}
            height={112}
            src="/images/user/user-03.png"
            style={{
              top: "198px",
              left: "325px",
              width: "43px",
              height: "43px",
              background: "transparent url('img/emergency-medical-technician_889227-31510.png') 0% 0% no-repeat padding-box",
              borderRadius: "7px",
              opacity: 1,
            }}
            alt="User"
            className="overflow-hidden"
          />
        </span>

        <span className="flex items-center gap-2 font-medium text-dark dark:text-dark-6">
          <span className="hidden lg:block">Dara & Arifin Weddings</span>

          <svg
            className={`fill-current duration-200 ease-in ${dropdownOpen && "rotate-180"}`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.6921 7.09327C3.91674 6.83119 4.3113 6.80084 4.57338 7.02548L9.99997 11.6768L15.4266 7.02548C15.6886 6.80084 16.0832 6.83119 16.3078 7.09327C16.5325 7.35535 16.5021 7.74991 16.24 7.97455L10.4067 12.9745C10.1727 13.1752 9.82728 13.1752 9.59322 12.9745L3.75989 7.97455C3.49781 7.74991 3.46746 7.35535 3.6921 7.09327Z"
              fill=""
            />
          </svg>
        </span>
      </Link>

      {/* <!-- Dropdown Star --> */}
      {dropdownOpen && (
        <div
          className={`absolute left-0 mt-7.5 flex w-[380px] flex-col border-[0.5px] border-stroke bg-white shadow-default dark:border-dark-3 dark:bg-gray-dark`}
          style={{ borderRadius: "28px" }}
        >
          <ul className="flex flex-col gap-1 border-y-[0.5px] border-stroke p-2.5 dark:border-dark-3">
            <li>
              <Link
                href="#"
                className="flex w-full items-center gap-2.5 rounded-[7px] p-2.5 text-sm font-medium text-dark-4 duration-300 ease-in-out hover:bg-gray-2 hover:text-dark dark:text-dark-6 dark:hover:bg-dark-3 dark:hover:text-white lg:text-base"
              >
                <Image
                  width={112}
                  height={112}
                  src="/images/user/user-32.png"
                  style={{
                    top: "198px",
                    left: "325px",
                    width: "43px",
                    height: "43px",
                    background: "transparent url('img/emergency-medical-technician_889227-31510.png') 0% 0% no-repeat padding-box",
                    borderRadius: "7px",
                    opacity: 1,
                  }}
                  alt="User"
                  className="overflow-hidden"
                />
                Birthday Party
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="flex w-full items-center gap-2.5 rounded-[7px] p-2.5 text-sm font-medium text-dark-4 duration-300 ease-in-out hover:bg-gray-2 hover:text-dark dark:text-dark-6 dark:hover:bg-dark-3 dark:hover:text-white lg:text-base"
              >
                <Image
                  width={112}
                  height={112}
                  src="/images/user/user-03.png"
                  style={{
                    top: "198px",
                    left: "325px",
                    width: "43px",
                    height: "43px",
                    background: "transparent url('img/emergency-medical-technician_889227-31510.png') 0% 0% no-repeat padding-box",
                    borderRadius: "7px",
                    opacity: 1,
                  }}
                  alt="User"
                  className="overflow-hidden"
                />
                Dara & Arifin Weddings
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="flex w-full items-center gap-2.5 rounded-[7px] p-2.5 text-sm font-medium text-dark-4 duration-300 ease-in-out hover:bg-gray-2 hover:text-dark dark:text-dark-6 dark:hover:bg-dark-3 dark:hover:text-white lg:text-base"
              >
                <Image
                  width={112}
                  height={112}
                  src="/images/user/user-31.png"
                  style={{
                    top: "198px",
                    left: "325px",
                    width: "43px",
                    height: "43px",
                    background: "transparent url('img/emergency-medical-technician_889227-31510.png') 0% 0% no-repeat padding-box",
                    borderRadius: "7px",
                    opacity: 1,
                  }}
                  alt="User"
                  className="overflow-hidden"
                />
                Store Opening
              </Link>
            </li>
          </ul>
          <div className="p-2.5 flex justify-between">
            <Link
              href="#"
              className="flex items-center gap-2.5 rounded-[7px] p-2.5 text-sm font-medium text-dark-4 underline duration-300 ease-in-out hover:bg-gray-2 hover:text-dark dark:text-dark-6 dark:hover:bg-dark-3 dark:hover:text-white lg:text-base"
            >
              View All
            </Link>
            <ButtonDefault
              label="Create New Event"
              link="/pricings"
              customClasses="border border-[#0BB90B] text-green rounded-[12px] px-10 py-3.5 lg:px-8 xl:px-10 bg-[#FFFFFF] h-[43px] opacity-100"
            />
          </div>
        </div>
      )}
      {/* <!-- Dropdown End --> */}
    </ClickOutside>
  );
};

export default DropdownUser;
