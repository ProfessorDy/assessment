import Container from '@/components/ui/container'
import background from '@/public/image/frame.png'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-[#F9F9F9] px-6 sm:px-8 lg:px-16 '>
      <Container>
        <div className='py-[4.25rem]'>
          <Image
            src={background}
            alt='telephone' />

        </div>
      </Container>
    </main>
  )
}
