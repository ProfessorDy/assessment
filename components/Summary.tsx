

const Summary = () => {
    return (
        <section className='w-full py-8  text-center text-[#131313]'>
            <h1 className='text-[2rem] font-bold leading-normal tracking-[0.06rem] mb-4'>
                Join Our Newsletter: Stay Connected, Savor Exclusives!
            </h1>
            <p className="mb-6 text-[1rem] font-normal leading-[1.375rem] tracking-[.0.03rem] opacity-80 ">Subscribe to our newsletter and be a part of the vibrant Rare Eat Fresh community. Stay connected with the <br />latest updates, exclusive offers, and exciting promotions on rare West African food ingredients.</p>
            <form className="flex gap-4 justify-center items-center">
                <label htmlFor="">
                    <input className="py-[.625rem] px-5 rounded-[3.125rem] border border-[#131313] text-[1rem] font-normal leading-[1.375rem] tracking-[.03rem] " type="email" placeholder="Email address" />
                </label>
                <input className="w-[13.75rem] cursor-pointer py-3 bg-[#F36F00] hover:opacity-80 text-white text-[.875rem] rounded-[1.875rem]" type="submit" value="Subscribe" />

            </form>
        </section>
    )
}

export default Summary   