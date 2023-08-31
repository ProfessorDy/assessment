import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin, BiLogoInstagram } from 'react-icons/bi'
import { BsInstagram } from 'react-icons/bs'

export const Socials = ({ main }: { main: boolean }) => {
    return (
        < >
            {
                main
                    ? <div className="flex gap-[.62rem]">
                        <div className='grid place-items-center bg-[#131313] w-8 aspect-square rounded-[10.7px]'>
                            <BiLogoFacebook color="white" />
                        </div>
                        <div className='grid place-items-center bg-[#131313] w-8 aspect-square rounded-[10.7px]'>
                            <BiLogoInstagram color="white" />
                        </div>
                        <div className='grid place-items-center bg-[#131313] w-8 aspect-square rounded-[10.7px]'>
                            <BiLogoTwitter color="white" />
                        </div>
                        <div className='grid place-items-center bg-[#131313] w-8 aspect-square rounded-[10.7px]'>
                            <BiLogoLinkedin color="white" />
                        </div>
                    </div>
                    : <div className="flex gap-[.62rem]">
                        <div className='grid place-items-center bg-white w-8 aspect-square rounded-[10.7px]'>
                            <BiLogoFacebook color="black" />
                        </div>
                        <div className='grid place-items-center bg-white w-8 aspect-square rounded-[10.7px]'>
                            <BiLogoInstagram color="black" />
                        </div>
                        <div className='grid place-items-center bg-white w-8 aspect-square rounded-[10.7px]'>
                            <BiLogoTwitter color="black" />
                        </div>
                        <div className='grid place-items-center bg-white w-8 aspect-square rounded-[10.7px]'>
                            <BiLogoLinkedin color="black" />
                        </div>
                    </div>
            }
        </>
    )
}
