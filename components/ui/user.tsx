
import { BsCart } from 'react-icons/bs'
import { CiUser } from 'react-icons/ci'
import { MdKeyboardArrowDown } from "react-icons/md"


import Image from 'next/image'
import ProfileButton from '../ProfileButton'

const User = () => {
    return (
        <div className="flex gap-5 rounded items-center">
            <ProfileButton />
            <button >
                <BsCart />
            </button>
            <button className='flex px-4 py-2 bg-[#FFD7D34D] border border-[#F36F00] justify-center items-center rounded-[6.25rem]'>
                <CiUser />
                <MdKeyboardArrowDown />
            </button>
        </div>
    )
}

export default User