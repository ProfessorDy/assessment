import Container from "./ui/container"
import logo from '@/public/Logo Crop 2.png'
import Image from "next/image"
import Link from "next/link"
import { Socials } from "./Socials"

const date = new Date()
const year = date.getFullYear()

const Footer = () => {
    return (
        <footer className="px-6 sm:px-8 lg:px-16 py-8 bg-[#131313] text-white">
            <Container>
                <div className="flex flex-col gap-8">
                    <Image
                        src={logo}
                        alt="logo"
                        className="max-lg:mx-auto" />

                    <ul className="mb-10 flex max-sm:flex-col max-lg:flex-wrap justify-between gap-8 max-sm:text-center">
                        <li className="flex flex-col gap-4">
                            <h3 className="text-[1.25rem] text-[#F36F00]  font-bold leading-normal tracking-[.0375rem] ">Company</h3>

                            <Link className="hover:text-[#F36F00] text-[1rem] font-normal leading-[1.375rem] tracking-[.03rem] " href='/'>About Us</Link>
                            <Link className="hover:text-[#F36F00] text-[1rem] font-normal leading-[1.375rem] tracking-[.03rem] " href='/'>Store</Link>
                            <Link className="hover:text-[#F36F00] text-[1rem] font-normal leading-[1.375rem] tracking-[.03rem] " href='/'>Blog</Link>

                        </li>
                        {/*  */}
                        <li className="flex flex-col gap-4">
                            <h3 className="text-[1.25rem] text-[#F36F00]  font-bold leading-normal tracking-[.0375rem] ">Legal</h3>

                            <Link className="hover:text-[#F36F00] text-[1rem] font-normal leading-[1.375rem] tracking-[.03rem] " href='/'>Terms and Conditions</Link>
                            <Link className="hover:text-[#F36F00] text-[1rem] font-normal leading-[1.375rem] tracking-[.03rem] " href='/'>Privacy Policy</Link>
                            <Link className="hover:text-[#F36F00] text-[1rem] font-normal leading-[1.375rem] tracking-[.03rem] " href='/'>Shipping Policy</Link>
                            <Link className="hover:text-[#F36F00] text-[1rem] font-normal leading-[1.375rem] tracking-[.03rem] " href='/'>Returns & Refunds</Link>
                            <Link className="hover:text-[#F36F00] text-[1rem] font-normal leading-[1.375rem] tracking-[.03rem] " href='/'>Cookies</Link>

                        </li>
                        {/*  */}
                        <li className="flex flex-col gap-4">
                            <h3 className="text-[1.25rem] text-[#F36F00]  font-bold leading-normal tracking-[.0375rem] ">Need Help?</h3>

                            <Link className="hover:text-[#F36F00] text-[1rem] font-normal leading-[1.375rem] tracking-[.03rem] " href='/'>Track Order</Link>
                            <Link className="hover:text-[#F36F00] text-[1rem] font-normal leading-[1.375rem] tracking-[.03rem] " href='/'>FAQs</Link>
                        </li>
                        {/*  */}
                        <li className="flex flex-col gap-4">
                            <h3 className="text-[1.25rem] text-[#F36F00]  font-bold leading-normal tracking-[.0375rem] ">Contact Us</h3>

                            <div className="text-[.875rem] font-normal leading-[1.255rem] tracking-[.02625rem] ">
                                <p>support@rareeatfresh.com</p>
                                <p>020 7205 4031</p>
                                <p>International House, 64 Nile Street, London,
                                    <br />N1 7SR, United Kingdom</p>

                            </div>
                            <Socials main={false} />
                        </li>

                    </ul>
                </div>
                <hr className="h-px bg-[#BEBCBD] opacity-40 mb-6 " />
                <p className="text-center text-[#94A3B8] ">Copyright © {year} Rare Eat Fresh. All rights reserved.</p>
            </Container>
        </footer>
    )
}

export default Footer