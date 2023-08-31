
const Form = () => {
    return (
        <div className='p-6 sm:p-10 lg backdrop-blur-[50px] bg-[#131313]/10   max-w-[54.2135rem] rounded-tr-[2rem] rounded-br-[2rem]'>
            <form className="flex flex-col   gap-4 sm:gap-6">
                <div >
                    <h1 className="text-[2rem] font-bold tracking-[0.06rem] text-black leading-normal ">Get in touch</h1>
                    <p className="text-[1rem] font-normal leading-[1.375rem] tracking-[.03rem] text-[#626262] ">Your Questions and Feedback Matter to Us - Reach Out, Let's Connect, and
                        <br />Explore Together to Ensure Your Rare Eat Fresh Experience Is Exceptional and Delightful.</p>
                </div>

                <div className="flex  max-lg:flex-col gap-5  ">
                    <label htmlFor="">
                        <input className="w-full px-5 py-[0.62rem] text-[.875rem] font-medium leading-normal rounded-[3.125rem] bg-white border border-[#EFF2F6]" type="text" placeholder="First Name" />
                    </label>
                    <label htmlFor="">
                        <input className="w-full px-5 py-[0.62rem] text-[.875rem] font-medium leading-normal rounded-[3.125rem] bg-white border border-[#EFF2F6]" type="text" placeholder="Last Name" />
                    </label>
                </div>
                <label htmlFor="">
                    <input className="w-full px-5 py-[0.62rem] text-[.875rem] font-medium leading-normal rounded-[3.125rem] bg-white border border-[#EFF2F6]" type="email" placeholder="Email Address" />
                </label>
                <label htmlFor="">
                    <textarea className="w-full py-[1.88rem] px-5 rounded-[1.25rem] " name="" id="" placeholder="Describe your issues" rows={10} />
                </label>
                <input type="submit" value="Send" />

            </form>

        </div>
    )
}

export default Form