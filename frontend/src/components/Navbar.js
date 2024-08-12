import React from 'react'

export const Navbar = () => {
    return (

        <div class="flex items-center justify-center mr-10 ml-5 w-64 h-2 ">
            <div class="px-2 bg-purple-600 shadow-lg rounded-2xl mb-5 hover:w-60">
                <div class="h-96 col-span-1 w-14 pt-10">
                    <div class="flex-auto hover:w-60 group">
                        <a href="#" class="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-white-500">
                            <span class="block px-1 py-1 border border-transparent group-hover:border-purple-500 rounded-full group-hover:flex-grow">
                                <i class="far fa-home text-2xl text-white pt-1"></i><span class="hidden group-hover:inline-block ml-3 align-bottom pb-1 text-white">Home</span>
                            </span>
                        </a>
                    </div>
                    <div class="flex-auto hover:w-60 group pt-6">
                        <a href="#" class="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-white-500">
                            <span class="block px-1 py-1 border border-transparent group-hover:border-indigo-500 rounded-full group-hover:flex-grow">
                                <i class="far fa-compass text-2xl pt-1 text-white"></i><span class="hidden group-hover:inline-block ml-3 align-bottom pb-1 text-white">Explore</span>
                            </span>
                        </a>
                    </div>
                    <div class="flex-auto hover:w-60 group pt-6">
                        <a href="#" class="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-white-500">
                            <span class="block px-1 py-1 border border-transparent group-hover:border-indigo-500 rounded-full group-hover:flex-grow">
                                <i class="far fa-search text-2xl pt-1 text-white"></i><span class="hidden group-hover:inline-block ml-3 align-bottom pb-1 text-white">Search</span>
                            </span>
                        </a>
                    </div>
                    <div class="flex-auto hover:w-60 group pt-10">
                        <a href="#" class="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-white-500">
                            <span class="block px-1 py-1 border border-transparent group-hover:border-indigo-500 rounded-full group-hover:flex-grow">
                                <i class="far fa-cog text-2xl pt-1 text-white"></i><span class="hidden group-hover:inline-block ml-3 align-bottom pb-1 text-white">Settings</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>




    )
}
