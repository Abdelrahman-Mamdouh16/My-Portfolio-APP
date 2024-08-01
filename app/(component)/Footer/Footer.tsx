import Link from 'next/link'
import React from 'react'
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

export default function Footer() {
    return (
        <>
            <footer className="bg-white lg:grid lg:grid-cols-5 dark:bg-gray-800 mt-auto">
                <div className="relative block h-32 lg:col-span-2 lg:h-full">
                    <img
                        src="https://images.unsplash.com/photo-1642370324100-324b21fab3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>

                <div className="px-4 py-10 sm:px-6 lg:col-span-3 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <div>
                            <p>
                                <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                    Call us
                                </span>

                                <Link
                                    href="cal:01553739206"
                                    className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl dark:text-white"
                                >
                                    01553739206
                                </Link>
                            </p>

                            <ul className="mt-8 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                                <li>saturday to Thursday : 8am - 5pm</li>
                                <li>Weekend: 12am - 3pm</li>
                            </ul>

                            <ul className="mt-8 flex gap-6">
                                <li>
                                    <Link
                                        href="https://www.facebook.com/profile.php?id=100008881142414"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                    >
                                        <span className="sr-only">Facebook</span>

                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                fillRule="evenodd"
                                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="https://www.instagram.com/abdelraman_mamd_ouh/?next=%2F"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                    >
                                        <span className="sr-only">Instagram</span>

                                        <FaWhatsapp className="h-6 w-6"/>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="https://www.linkedin.com/in/abdelrahman-mamdouh161020/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                    >
                                        <span className="sr-only">LinkedIn</span>

                                        <FaLinkedin className="h-6 w-6" />
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="https://github.com/Abdelrahman-Mamdouh16"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                    >
                                        <span className="sr-only">GitHub</span>

                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                fillRule="evenodd"
                                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="mailto:abdelrahman.mamdouh.161020@gmail.com"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                    >
                                        <span className="sr-only">Gmail</span>
                                        <IoMdMail className="h-6 w-6"/>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <p className="font-medium text-gray-900 dark:text-white">Services</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <Link href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                            1on1 Coaching
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                            Company Review
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                            Accounts Review
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                            HR Consulting
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                            SEO Optimisation
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-medium text-gray-900 dark:text-white">Company</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <Link href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                            About
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                            Meet the Team
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                            Accounts Review
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 pt-10 dark:border-gray-800">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <ul className="flex flex-wrap gap-4 text-xs">
                                <li>
                                    <Link href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
                                        Terms & Conditions
                                    </Link>
                                </li>

                                <li>
                                    <Link href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
                                        Privacy Policy
                                    </Link>
                                </li>

                                <li>
                                    <Link href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
                                        Cookies
                                    </Link>
                                </li>
                            </ul>

                            <p className="mt-8 text-xs text-gray-500 sm:mt-0 dark:text-gray-400">
                                &copy; 2024. Abdelrahman Mamdouh . All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
