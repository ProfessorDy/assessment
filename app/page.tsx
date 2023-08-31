import { Socials } from '@/components/Socials'
import Container from '@/components/ui/container'
import background from '@/public/image/frame.png'
import logo from "@/public/Logo Crop 2.png"
import Form from '@/components/ui/form'


import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-[#F9F9F9] px-6 sm:px-8 lg:px-16 '>
      <Container>
        <div className='py-[4.25rem] relative flex max-lg:flex-col gap-8 lg:items-start '>
          <Image
            src={background}
            alt='telephone'
            className='sm:absolute' />
          <article className='p-6 sm:p-10 backdrop-blur-[50px] bg-[#131313]/10 flex flex-col justify-center gap-4 rounded-tr-[2rem] rounded-bl-[2rem] sm:max-w-[25.5rem] sm:ml-auto lg:ml-0 lg:self-end '>
            <Image
              src={logo}
              alt='Logo'
              width={110}
            />
            <div className='text-base font-normal leading-[1.375rem] tracking-[0.03rem] '>
              <p>
                RARE EAT FRESH represents a range of unique ingredients and the vibrancy of different Cultures, every product in the Rare Eat range has a story inspired by different Cultures
              </p>
              <p className='font-bold leading-normal'>020 7205 4031</p>
              <p className='font-bold leading-normal'>support@rareeatfresh.com</p>

            </div>
            <Socials main={true} />
          </article>
          <Form />
        </div>
      </Container>
    </main>
  )
}
