import React from 'react';

import { Disclosure } from '@headlessui/react';
import {
  BellIcon,
  MenuIcon,
  SearchIcon,
  XIcon,
} from '@heroicons/react/outline';
import tw from 'tailwind-styled-components';

import { Input } from '@app/components/base';

import { navigation, profile } from '../Topbar.constants';
import ProfileDropdown from './ProfileDropdown';
import UserDetails from './UserDetails';

function Header(): JSX.Element {
  return (
    <Disclosure
      as="nav"
      className="bg-indigo-600 border-b border-indigo-300 border-opacity-25 lg:border-none"
    >
      {({ open }) => (
        <>
          <Container>
            <Wrapper>
              <LeftContent>
                <div className="flex-shrink-0">
                  <img
                    className="block h-8 w-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
                    alt="Workflow"
                  />
                </div>

                <div className="hidden lg:block lg:ml-10">
                  <div className="flex space-x-4">
                    {navigation.map((item: string) => (
                      <NavigationItem key={item} href="#something">
                        {item}
                      </NavigationItem>
                    ))}
                  </div>
                </div>
              </LeftContent>

              <SearchContainer>
                <Input
                  label="search"
                  showLabel={false}
                  placeholder="Search"
                  Icon={SearchIcon}
                />
              </SearchContainer>

              <div className="flex lg:hidden">
                <Hamburger>
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Hamburger>
              </div>

              <RightContent className="">
                <div className="flex items-center">
                  <NotificationButton type="button">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </NotificationButton>

                  <ProfileDropdown />
                </div>
              </RightContent>
            </Wrapper>
          </Container>

          {/* Mobile Header */}
          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item: string) => (
                <NavigationItem href="#a" key={item} className="block">
                  {item}
                </NavigationItem>
              ))}
            </div>

            <div className="pt-4 pb-3 border-t border-indigo-700">
              <div className="px-5 flex items-center">
                <UserDetails />

                <NotificationButton type="button" className="ml-auto">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </NotificationButton>
              </div>

              <div className="mt-3 px-2 space-y-1">
                {profile.map((item) => (
                  <NavigationItem key={item} href="#later" className="block">
                    {item}
                  </NavigationItem>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

const Container = tw.div`
  max-w-7xl mx-auto px-2 sm:px-4 lg:px-8
`;

const SearchContainer = tw.div`
  flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end
`;

const Wrapper = tw.div`
  relative h-16 flex items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25
`;

const LeftContent = tw.div`
  px-2 flex items-center lg:px-0
`;

const RightContent = tw.div`
  hidden lg:block lg:ml-4
`;

const NotificationButton = tw.div`
  bg-indigo-600 
  flex-shrink-0 
  rounded-full 
  p-1 
  text-indigo-200 
  hover:text-white 
  focus:outline-none 
  focus:ring-2 
  focus:ring-offset-2 
  focus:ring-offset-indigo-600 
  focus:ring-white
`;

const NavigationItem = tw.a`
  text-white rounded-md py-2 px-3 text-sm font-medium hover:bg-indigo-500 hover:bg-opacity-75
`;

const Hamburger = tw(Disclosure.Button)`
  bg-indigo-600 
  p-2 
  rounded-md 
  inline-flex 
  items-center 
  justify-center 
  text-indigo-200 
  hover:text-white 
  hover:bg-indigo-500 
  hover:bg-opacity-75 
  focus:outline-none 
  focus:ring-2 
  focus:ring-offset-2 
  focus:ring-offset-indigo-600 
  focus:ring-white
`;

export default Header;
