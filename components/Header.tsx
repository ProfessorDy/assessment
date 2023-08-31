"use client"

import Container from "./ui/container"
import Searchbar from "./ui/searchbar"
import User from "./ui/user"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { AiOutlineMenu } from "react-icons/ai"

import Logo from '@/public/Logo Crop 2.png'
import Image from "next/image"
import Link from "next/link"

const Header = () => {

    const routes = [
        {
            href: "/store",
            label: "Store",
        },
        {
            href: "/about",
            label: "About",
        },
        {
            href: "/contact",
            label: "Contact",
        },
        {
            href: "/blog",
            label: "Blog",
        },
    ];


    return (

        <header className=" py-2 px-6 lg:px-8 shadow-2xl bg-[#F9F9F9]">
            <Container>

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4 sm:gap-8">
                        <Sheet>
                            <SheetTrigger>
                                <AiOutlineMenu className="w-6 lg:hidden" />
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                                <nav className="flex flex-col gap-4">
                                    {routes.map((route,) => (
                                        <Link
                                            key={route.label}
                                            href={route.href}
                                            className="block px-2 py-1 text-lg"
                                        >
                                            {route.label}
                                        </Link>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                        <Link href='/'>
                            <Image
                                src={Logo}
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <nav className="lg:flex gap-8 hidden ">
                        {routes.map((route) => (
                            <Link className="px-[.625rem] text-[#131313] hover:text-[#F36F00] transition-colors" key={route.label} href={route.href}>{route.label}</Link>
                        )
                        )}
                    </nav>
                    <Searchbar />
                    <User />
                </div>
            </Container>

        </header>

    )
}

export default Header