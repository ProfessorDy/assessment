

const Searchbar = () => {
    return (

        <form className="hidden lg:block">
            <label htmlFor="default-search" className="text-sm font-medium  text-[#131313] sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                    <svg className="w-4 aspect-square text-[#131313]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" id="default-search" className="pl-14 py-[0.62rem] pr-5 text-sm text-[#131313] border border-[#D0D0D0] rounded-[3.125rem] bg-[#F9F9F9] focus:ring-[#131313] focus:border-[#131313] font-medium" placeholder="Search" required />
            </div>
        </form>

    )
}

export default Searchbar