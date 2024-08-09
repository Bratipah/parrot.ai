import React from 'react'

export const Navbar = () => {
    return (
        <div className='flex'>
            <div class="flex items-start justify-center mr-10 w-64">
                <div class="px-2 bg-purple-600 shadow-lg rounded-2xl mb-5 hover:w-64">
                    <div class="h-96 col-span-1 w-14 pt-10">
                        <div class="flex-auto hover:w-64 group">
                            <a href="#" class="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-white-500">
                                <span class="block px-1 py-1 border border-transparent group-hover:border-purple-500 rounded-full group-hover:flex-grow">
                                    <i class="far fa-home text-2xl text-white pt-1"></i><span class="hidden group-hover:inline-block ml-3 align-bottom pb-1 text-white">Home</span>
                                </span>
                            </a>
                        </div>
                        <div class="flex-auto hover:w-64 group pt-6">
                            <a href="#" class="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-white-500">
                                <span class="block px-1 py-1 border border-transparent group-hover:border-indigo-500 rounded-full group-hover:flex-grow">
                                    <i class="far fa-compass text-2xl pt-1 text-white"></i><span class="hidden group-hover:inline-block ml-3 align-bottom pb-1 text-white">Explore</span>
                                </span>
                            </a>
                        </div>
                        <div class="flex-auto hover:w-64 group pt-6">
                            <a href="#" class="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-white-500">
                                <span class="block px-1 py-1 border border-transparent group-hover:border-indigo-500 rounded-full group-hover:flex-grow">
                                    <i class="far fa-search text-2xl pt-1 text-white"></i><span class="hidden group-hover:inline-block ml-3 align-bottom pb-1 text-white">Search</span>
                                </span>
                            </a>
                        </div>
                        <div class="flex-auto hover:w-64 group pt-10">
                            <a href="#" class="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-white-500">
                                <span class="block px-1 py-1 border border-transparent group-hover:border-indigo-500 rounded-full group-hover:flex-grow">
                                    <i class="far fa-cog text-2xl pt-1 text-white"></i><span class="hidden group-hover:inline-block ml-3 align-bottom pb-1 text-white">Settings</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="h-96 col-span-4  rounded-md flex items-center">
                <div class="ml-20 w-80">
                    <img src="../assets/image.png" alt=""></img>
                    <h2>Courses</h2>
                    <p></p>
                    <h3>Syllabus</h3>
                    <div class="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
                        <h1 class="text-center text-5xl pb-12">Industries we serve</h1>
                        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
                            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                <a href="#" class="block">
                                    <div class="h-28">
                                        <div
                                            class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                                            <img src="https://epicpadprinting.com/public/img/indus/Automotive.png"
                                                class="w-36 h-36  mt-6 m-auto" alt="Automotive" title="Automotive" loading="lazy"
                                                width="200" height="200" />
                                        </div>
                                    </div>
                                    <div class="p-6   z-10 w-full   ">
                                        <p
                                            class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                                            Automotive
                                        </p>
                                    </div>
                                </a>
                            </div>

                            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                <a href="#" class="block">
                                    <div class="h-28">
                                        <div
                                            class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                                            <img src="https://epicpadprinting.com/public/img/indus/Toys-and-Baby-Products.png"
                                                class="w-36 h-36  mt-6 m-auto" alt="Toys and Baby Products"
                                                title="Toys and Baby Products" loading="lazy" width="200" height="200" />
                                        </div>
                                    </div>
                                    <div class="p-6   z-10 w-full   ">
                                        <p
                                            class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                                            Toys and Baby Products
                                        </p>
                                    </div>
                                </a>
                            </div>

                            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                <a href="#" class="block">
                                    <div class="h-28">
                                        <div
                                            class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                                            <img src="https://epicpadprinting.com/public/img/indus/MEDICAL.png"
                                                class="w-36 h-36  mt-6 m-auto" alt="Medical" title="Medical" loading="lazy" width="200"
                                                height="200" />
                                        </div>
                                    </div>
                                    <div class="p-6   z-10 w-full   ">
                                        <p
                                            class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                                            Medical
                                        </p>
                                    </div>
                                </a>
                            </div>

                            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                <a href="#" class="block">
                                    <div class="h-28">
                                        <div
                                            class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                                            <img src="https://epicpadprinting.com/public/img/indus/Glass.png"
                                                class="w-36 h-36  mt-6 m-auto" alt="Glass" title="Glass" loading="lazy" width="200"
                                                height="200" />
                                        </div>
                                    </div>
                                    <div class="p-6   z-10 w-full   ">
                                        <p
                                            class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                                            Glass
                                        </p>
                                    </div>
                                </a>
                            </div>

                            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                <a href="#"
                                    class="block">
                                    <div class="h-28">
                                        <div
                                            class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                                            <img src="https://epicpadprinting.com/public/img/indus/Jewelry-coins-and-medallions.png"
                                                class="w-36 h-36  mt-6 m-auto" alt="Jewelry Coins and Medallions"
                                                title="Jewelry Coins and Medallions" loading="lazy" width="200" height="200" />
                                        </div>
                                    </div>
                                    <div class="p-6   z-10 w-full   ">
                                        <p
                                            class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                                            Jewelry Coins and Medallions
                                        </p>
                                    </div>
                                </a>
                            </div>

                            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                <a href="#"
                                    class="block">
                                    <div class="h-28">
                                        <div
                                            class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                                            <img src="https://epicpadprinting.com/public/img/indus/Electric.png"
                                                class="w-36 h-36  mt-6 m-auto" alt="Electric" title="Electric" loading="lazy"
                                                width="200" height="200" />
                                        </div>
                                    </div>
                                    <div class="p-6   z-10 w-full   ">
                                        <p
                                            class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                                            Electric
                                        </p>
                                    </div>
                                </a>
                            </div>

                            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                <a href="#"
                                    class="block">
                                    <div class="h-28">
                                        <div
                                            class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                                            <img src="https://epicpadprinting.com/public/img/indus/Packaging-FMCG.png"
                                                class="w-36 h-36  mt-6 m-auto" alt="Packaging / FMCG" title="Packaging / FMCG"
                                                loading="lazy" width="200" height="200" />
                                        </div>
                                    </div>
                                    <div class="p-6   z-10 w-full   ">
                                        <p
                                            class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                                            Packaging / FMCG
                                        </p>
                                    </div>
                                </a>
                            </div>

                            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                <a href="#"
                                    class="block">
                                    <div class="h-28">
                                        <div
                                            class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                                            <img src="https://epicpadprinting.com/public/img/indus/Footwear.png"
                                                class="w-36 h-36  mt-6 m-auto" alt="Footwear" title="Footwear" loading="lazy"
                                                width="200" height="200" />
                                        </div>
                                    </div>
                                    <div class="p-6   z-10 w-full   ">
                                        <p
                                            class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                                            Footwear
                                        </p>
                                    </div>
                                </a>
                            </div>

                            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                <a href="#"
                                    class="block">
                                    <div class="h-28">
                                        <div
                                            class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                                            <img src="https://epicpadprinting.com/public/img/indus/Backpacks-and-umbrella.png"
                                                class="w-36 h-36  mt-6 m-auto" alt="Backpacks and Umbrella"
                                                title="Backpacks and Umbrella" loading="lazy" width="200" height="200" />
                                        </div>
                                    </div>
                                    <div class="p-6   z-10 w-full   ">
                                        <p
                                            class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                                            Backpacks and Umbrella
                                        </p>
                                    </div>
                                </a>
                            </div>

                            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                <a href="#"
                                    class="block">
                                    <div class="h-28">
                                        <div
                                            class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                                            <img src="https://epicpadprinting.com/public/img/indus/Caps-and-Closures.png"
                                                class="w-36 h-36  mt-6 m-auto" alt="Caps and Closures" title="Caps and Closures"
                                                loading="lazy" width="200" height="200" />
                                        </div>
                                    </div>
                                    <div class="p-6   z-10 w-full   ">
                                        <p
                                            class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                                            Caps and Closures
                                        </p>
                                    </div>
                                </a>
                            </div>

                            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                <a href="@" class="block">
                                    <div class="h-28">
                                        <div
                                            class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                                            <img src="https://epicpadprinting.com/public/img/indus/Confectionery.png"
                                                class="w-36 h-36  mt-6 m-auto" alt="Confectionery" title="Confectionery" loading="lazy"
                                                width="200" height="200" />
                                        </div>
                                    </div>
                                    <div class="p-6   z-10 w-full   ">
                                        <p
                                            class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                                            Confectionery
                                        </p>
                                    </div>
                                </a>
                            </div>

                            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                <a href="#" class="block">
                                    <div class="h-28">
                                        <div
                                            class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                                            <img src="https://epicpadprinting.com/public/img/indus/Cosmetics.png"
                                                class="w-36 h-36  mt-6 m-auto" alt="Cosmetics" title="Cosmetics" loading="lazy"
                                                width="200" height="200" />
                                        </div>
                                    </div>
                                    <div class="p-6   z-10 w-full   ">
                                        <p
                                            class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                                            Cosmetics
                                        </p>
                                    </div>
                                </a>
                            </div>

                            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                <a href="#"
                                    class="block">
                                    <div class="h-28">
                                        <div
                                            class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                                            <img src="https://epicpadprinting.com/public/img/indus/Electronics.png"
                                                class="w-36 h-36  mt-6 m-auto" alt="Electronics" title="Electronics" loading="lazy"
                                                width="200" height="200" />
                                        </div>
                                    </div>
                                    <div class="p-6   z-10 w-full   ">
                                        <p
                                            class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                                            Electronics
                                        </p>
                                    </div>
                                </a>
                            </div>

                            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                <a href="#"
                                    class="block">
                                    <div class="h-28">
                                        <div
                                            class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                                            <img src="https://epicpadprinting.com/public/img/indus/Mobile.png"
                                                class="w-36 h-36  mt-6 m-auto" alt="Consumer Electronics" title="Consumer Electronics"
                                                loading="lazy" width="200" height="200" />
                                        </div>
                                    </div>
                                    <div class="p-6   z-10 w-full   ">
                                        <p
                                            class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                                            Consumer Electronics
                                        </p>
                                    </div>
                                </a>
                            </div>

                            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                <a href="#" class="block">
                                    <div class="h-28">
                                        <div
                                            class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                                            <img src="https://epicpadprinting.com/public/img/indus/Promotional.png"
                                                class="w-36 h-36  mt-6 m-auto" alt="Promotional" title="Promotional" loading="lazy"
                                                width="200" height="200" />
                                        </div>
                                    </div>
                                    <div class="p-6   z-10 w-full   ">
                                        <p
                                            class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                                            Promotional
                                        </p>
                                    </div>
                                </a>
                            </div>

                            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                <a href="#"
                                    class="block">
                                    <div class="h-28">
                                        <div
                                            class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                                            <img src="https://epicpadprinting.com/public/img/indus/Sports.png"
                                                class="w-36 h-36  mt-6 m-auto" alt="Sports" title="Sports" loading="lazy" width="200"
                                                height="200" />
                                        </div>
                                    </div>
                                    <div class="p-6   z-10 w-full   ">
                                        <p
                                            class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                                            Sports
                                        </p>
                                    </div>
                                </a>
                            </div>

                            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                <a href="#" class="block">
                                    <div class="h-28">
                                        <div
                                            class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                                            <img src="https://epicpadprinting.com/public/img/indus/Stationery.png"
                                                class="w-36 h-36  mt-6 m-auto" alt="Stationery" title="Stationery" loading="lazy"
                                                width="200" height="200" />
                                        </div>
                                    </div>
                                    <div class="p-6   z-10 w-full   ">
                                        <p
                                            class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                                            Stationery
                                        </p>
                                    </div>
                                </a>
                            </div>

                            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                <a href="#" class="block">
                                    <div class="h-28">
                                        <div
                                            class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                                            <img src="https://epicpadprinting.com/public/img/indus/Tools.png"
                                                class="w-36 h-36  mt-6 m-auto" alt="Tools" title="Tools" loading="lazy" width="200"
                                                height="200" />
                                        </div>
                                    </div>
                                    <div class="p-6   z-10 w-full   ">
                                        <p
                                            class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                                            Tools
                                        </p>
                                    </div>
                                </a>
                            </div>

                            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                <a href=" "
                                    class="block">
                                    <div class="h-28">
                                        <div
                                            class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                                            <img src="https://epicpadprinting.com/public/img/indus/Utensils.png"
                                                class="w-36 h-36  mt-6 m-auto" alt="Utensils" title="Utensils" loading="lazy"
                                                width="200" height="200" />
                                        </div>
                                    </div>
                                    <div class="p-6   z-10 w-full   ">
                                        <p
                                            class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                                            Utensils
                                        </p>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
        
        

    )
}
