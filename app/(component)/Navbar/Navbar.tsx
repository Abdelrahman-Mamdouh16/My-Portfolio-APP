"use client";
import React, { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const navigation = [
    { name: 'About', href: '/#About', current: false },
    { name: 'Experience', href: '/#Experience', current: false },
    { name: 'Projects', href: '/#Projects', current: false },
    { name: 'Contact Me', href: '/#ContactMe', current: false },
];

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
    const pathName = usePathname();
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Disclosure as="nav" className={`transition-colors duration-500 ${pathName === '/' ? `fixed z-[999999] ${scrollPosition > 0 ? 'bg-gray-800' : 'bg-inherit'}` : 'bg-gray-800'} w-full`}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <Link href={'/'} className="flex flex-shrink-0 items-center">
                            <h1 className='font-semibold text-lg'>
                                <span className='text-red-500'>My</span>
                                <span className='text-white'>port</span>
                                <span className='text-blue-700'>folio</span>
                            </h1>
                        </Link>
                        <div className="hidden mx-auto md:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.href === pathName ? 'page' : undefined}
                                        className={classNames(
                                            item.href === pathName ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium'
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                        <Link
                            href={'https://wa.me/201553739206'}
                            className="relative rounded-full bg-inherit p-1 text-gray-400 hover:text-white "
                        >
                            <FaWhatsapp />
                        </Link>
                        <Link
                            href={'mailto:abdelrahman.mamdouh.161020@gmail.com'}
                            className="relative rounded-full bg-inherit p-1 text-gray-400 hover:text-white ">
                            <IoMdMail />
                        </Link>

                        <Link
                            href={'https://github.com/Abdelrahman-Mamdouh16'}
                            className="relative rounded-full bg-inherit p-1 text-gray-400 hover:text-white "
                        >
                            <FaGithub />
                        </Link>
                        <Link
                            href={'https://www.linkedin.com/in/abdelrahman-mamdouh161020/'}
                            className="relative rounded-full bg-inherit p-1 text-gray-400 hover:text-white "
                        >
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.href === pathName ? 'page' : undefined}
                            className={classNames(
                                item.href === pathName ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium'
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}
