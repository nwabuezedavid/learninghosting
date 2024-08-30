"use client"
import { UseSitedetail } from '@/app/(component)/context/sitedetail'
import Founders from '@/app/(component)/founders'
import React from 'react'

const page = () => {
    const { datax } = UseSitedetail()
    return (
        <div>
            <main>
                <div>
                    <div>

                        <div class="flex flex-col text-center justify-center items-center gap-3 mt-12">
                            <div class="text-12-b md:text-14-b text-[#7947BF]">About Us
                            </div><h1 class="h4-24-sb md:h3-36-sb">
                                Empowering Cryptocurrency Investments</h1><p class="text-14-r md:body-16-r text-[#8691A4]">Invest with confidence in the digital asset space</p>
                                <img alt="norejd" loading="lazy" width="760" height="430" decoding="async" data-nimg="1" class="mt-10" src="/about/4.webp" />
                            <div class=" md:w-[75rem]">
                                <div class="flex-col mx-4 px-7 py-6 gap-4 md:relative md:py-16 flex md:px-14 md:flex-row justify-between">
                                    <div class="absolute z-10 top-[490px] left-1/2 transform -translate-x-1/2 md:absolute md:z-10 md:top-[-85px] md:left-1/2 md:transform md:-translate-x-1/2">
                                    </div>
                                    <div class="md:relative z-20 flex flex-col items-center"><p class="text-xl font-bold md:h3-36-b bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-700">$25M+</p><p class="text-sm md:h5-20-r text-gray-600 pt-3">Assets Under Management</p>
                                    </div>
                                    <div class="md:relative z-20 flex flex-col items-center"><p class="text-xl font-bold md:h3-36-b bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-700">2M+</p><p class="text-sm md:h5-20-r text-gray-600 pt-3">Invested Users</p>
                                    </div>
                                    <div class="md:relative z-20 flex flex-col items-center"><p class="text-xl font-bold md:h3-36-b bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-700">96%+</p><p class="text-sm md:h5-20-r text-gray-600 pt-3">Customer Satisfaction Score</p>
                                    </div>
                                    <div class="md:relative z-20 flex flex-col items-center"><p class="text-xl font-bold md:h3-36-b bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-700">100+</p><p class="text-sm md:h5-20-r text-gray-600 pt-3">Team Members</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col m-auto items-center justify-center gap-4 md:gap-20 p-6 my-20 bg-[#FBFBFD] md:flex md:flex-row  md:h-[568px] md:my-36 md:w-[1052px] ">
                        <img alt="norejd" loading="lazy" width="434" height="520" decoding="async" data-nimg="1" src="/about/3.webp" />
                        <div class="flex flex-col"><h2 class="h5-20-sb md:h4-24-sb mb-4 text-center md:text-left">About {datax}</h2><p class="text-14-r md:body-16-r text-[#8691A4]">Welcome to {datax} with over 2 Million users on its platform enabling easy, fast and trusted cryptocurrency buying, trading and investing. At {datax}, we are dedicated to empowering our users with advanced, secure, and user-friendly trading solutions. {datax} is a US-headquartered and Bengaluru-based fintech start-up launched in early 2018 with the vision of making crypto accessible to the masses so that ordinary investors can benefit from the massive wave of wealth creation.</p><p class="text-14-r md:body-16-r text-[#8691A4]">{datax} is a Series A funded startup backed by Y-combinator and funds like Village Global, Arkham Ventures and Nexus Venture Partners. {datax} is a global crypto buying, trading and investment platform designed to benefit retail investors to earn better risk-adjusted returns in a volatile market in the long term.</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4 justify-center items-center text-center my-36 container mx-auto"><h4 class="h4-24-b">Our Vision</h4><p class="text-14-r md:body-16-r text-[#8691A4] md:max-w-[770px]">Looking ahead, {datax} aims to continue leading the way in innovation within the crypto trading industry. We strive to introduce new features that enhance user experience and broaden market access, all while maintaining the highest standards of security and compliance.</p><p class="text-14-r md:body-16-r text-[#8691A4] md:max-w-[770px] mt-8">Join us at {datax} and be part of a community that is shaping the future of cryptocurrency trading.</p>
                    </div>
                    <div class="flex flex-col gap-4 justify-center items-center text-center my-36 container mx-auto"><h4 class="h4-24-b">Our Mission</h4><p class="text-14-r md:body-16-r text-[#8691A4]">{datax} was founded with a clear mission: to make cryptocurrency trading accessible, transparent, and secure for everyone. We believe in creating a platform where our users can easily trade a wide range of cryptocurrencies with confidence. Our commitment to security and compliance ensures that your investments are safe and your trading is in line with global standards.</p>
                    </div><h2 class="h4-24-sb flex items-center justify-center mb-3">Our Values</h2>
                    <div class="flex flex-col justify-center items-center mb-36 gap-4">
                        <div class="flex flex-col md:flex-row gap-4">
                            <div class="flex justify-center items-center">
                                <div class="relative flex flex-col text-gray-700 max-w-[350px] bg-[#F8F9FA] md:w-96  rounded-xl bg-clip-border">
                                    <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-44 rounded-xl bg-clip-border">
                                        <img src="/about/5.webp" class="object-contain md:object-cover md:w-auto md:h-auto absolute md:static" alt="Build Trust" />
                                    </div>
                                    <div class="p-6">
                                        <div class="flex items-center justify-between mb-2"><h3 class="block body-16-sb md:h5-20-sb">Build Trust</h3>
                                        </div><p class="block text-14-r md:body-16-r text-[#8691A4]">Building trust requires time and relies on consistent, transparent actions. Trust can easily erode due to misrepresentation, hidden fees, or data opacity.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex md:h-[400px] md:w-[384px] flex-col justify-center items-center overflow-hidden">
                                <div class="relative m-0 flex  max-w-[350px] md:max-w-[392px] rounded-xl ">
                                    <div class="z-10 overflow-hidden rounded-xl">
                                        <img src="/about/1.jpeg" class="object-fill" alt="norejd" />
                                    </div>
                                    <div class="absolute max-w-[307px] md:max-w-[344px] bottom-0 z-[20] m-0 pb-4 ps-4"><h1 class="body-16-sb md:h5-20-sb text-white shadow-xl">Play as Team</h1><h1 class="text-14-r md:body-16-r text-white shadow-xl">Foster teamwork with active listening, candid feedback, and fair processes to navigate disruptions effectively.</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-center items-center">
                                <div class="relative flex flex-col text-gray-700 max-w-[350px] bg-[#F8F9FA] md:w-96  rounded-xl bg-clip-border">
                                    <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-44 rounded-xl bg-clip-border">
                                        <img src="/about/2.jpeg" class="object-contain md:object-cover md:w-auto md:h-auto absolute md:static" alt="Bias Towards Action" />
                                    </div>
                                    <div class="p-6">
                                        <div class="flex items-center justify-between mb-2"><h3 class="block body-16-sb md:h5-20-sb">Bias Towards Action</h3>
                                        </div><p class="block text-14-r md:body-16-r text-[#8691A4]">Encourage proactive decision-making based on data and truth, embracing calculated risks and continuous learning.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row gap-4">
                            <div class="flex md:h-[400px] md:w-[384px] flex-col justify-center items-center overflow-hidden">
                                <div class="relative m-0 flex  max-w-[350px] md:max-w-[392px] rounded-xl ">
                                    <div class="z-10 overflow-hidden rounded-xl">
                                        <img src="/about/6.jpeg" class="object-fill" alt="norejd" />
                                    </div>
                                    <div class="absolute max-w-[307px] md:max-w-[344px] bottom-0 z-[20] m-0 pb-4 ps-4"><h1 class="body-16-sb md:h5-20-sb text-white shadow-xl">Perseverance</h1><h1 class="text-14-r md:body-16-r text-white shadow-xl">Prioritize perseverance, belief in problem-solving, and dedication to operational excellence over luck or skill.</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-center items-center">
                                <div class="relative flex flex-col text-gray-700 max-w-[350px] bg-[#F8F9FA] md:w-96  rounded-xl bg-clip-border">
                                    <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-44 rounded-xl bg-clip-border">
                                        <img src="/about/7.jpg" class="object-contain md:object-cover md:w-auto md:h-auto absolute md:static" alt="Act in {datax}'s Best Interest" />
                                    </div>
                                    <div class="p-6">
                                        <div class="flex items-center justify-between mb-2"><h3 class="block body-16-sb md:h5-20-sb">Act in {datax}'s Best Interest</h3>
                                        </div><p class="block text-14-r md:body-16-r text-[#8691A4]">Promote responsible choices, uphold '{datax} First' principles, practice intellectual honesty, and manage resources responsibly, including leave management.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex md:h-[400px] md:w-[384px] flex-col justify-center items-center overflow-hidden">
                                <div class="relative m-0 flex  max-w-[350px] md:max-w-[392px] rounded-xl ">
                                    <div class="z-10 overflow-hidden rounded-xl">
                                        <img src="/about/10.png" class="object-fill" alt="norejd" />
                                    </div>
                                    <div class="absolute max-w-[307px] md:max-w-[344px] bottom-0 z-[20] m-0 pb-4 ps-4"><h1 class="body-16-sb md:h5-20-sb text-white shadow-xl">Compound Everything</h1><h1 class="text-14-r md:body-16-r text-white shadow-xl">Commit to small, incremental improvements for sustainable, long-lasting success, avoiding feature abandonment and neglecting mentorship.</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4 justify-center items-center text-center my-36 container mx-auto"><h4 class="h4-24-b">Why Trust {datax}</h4><p class="text-14-r md:body-16-r text-[#8691A4]">Trust is the cornerstone of {datax}. We are recognized and featured by leading financial authorities like Forbes, Economic Times, and Moneycontrol. These partnerships affirm our commitment to providing a trustworthy and robust trading platform.</p><p class="text-14-r md:body-16-r text-[#8691A4]">Our adherence to international compliance standards and transparent practices ensures that your trading experience is safe and reliable. {datax} operates in complete compliance with local regulatory bodies such as with Financial Intelligence Unit (FIU) in India, Virtual Asset Service Provider (VASP) in the European Union, and Organismo Agenti e Mediatori (OAM) in Italy.</p>
                    </div>
                    <div class="flex flex-col text-center  md:justify-center md:items-center"><h2 class="h4-24-sb pb-3 text-center">Our Founders</h2><p class="body-16-r text-[#8691A4] px-4  md:max-w-[696px] md:px-0 text-center">Meet the visionary behind {datax}, whose passion for crypto sparked a revolution. they're leading us on an exhilarating journey to make crypto investments accessible to all.</p>
                            <Founders/>
                    </div>
                    <div class="flex flex-col text-center px-5 justify-center items-center mt-36"><h2 class="h4-24-sb pb-3">Backed by world class Investors &amp; Builders</h2><p class="body-16-r text-[#8691A4] max-w-[696px] text-center">We are backed by some of the most forward-thinking firms, angel investors, founders, and operators in crypto and fin tech.</p>
                        <div class="flex flex-col justify-center items-center md:flex md:flex-row md:justify-evenly gap-9 my-12">
                            <div class="flex flex-row gap-9">
                                <img loading="lazy" width="150" height="58" decoding="async" data-nimg="1" src="/found/f4.jpg" />
                            <img loading="lazy" width="150" height="58" decoding="async" data-nimg="1" src="/found/f5.jpg" />
                            </div>
                            <div class="flex flex-row">
                                <img loading="lazy" width="150" height="58" decoding="async" data-nimg="1" src="/found/22.jpg" />
                            <img loading="lazy" width="150" height="58" decoding="async" data-nimg="1" src="/found/f6.jpg" />
                            </div>
                            <img loading="lazy" width="150" height="58" decoding="async" data-nimg="1" src="/found/f1.jpg" />
                        </div>
                    </div>
                    <div class="flex flex-col justify-center items-center relative my-16 md:my-36 ">
                        <div class="w-full h-[340px] md:h-[460px] md:w-[1070px] relative">
                            
                            <img loading="lazy" decoding="async" data-nimg="fill" src="/found/f2.jpg" />
                        </div>
                        <div class="absolute top-[16.5rem] md:absolute md:z-[999] md:top-[22rem]">
                            <div class="w-[348px] h-[221px] md:w-[566px] md:h-[212px] p-6 bg-white bg-opacity-80 rounded-xl backdrop-blur-[36px] flex-col justify-start items-center gap-6 inline-flex">
                                <div class="flex-col justify-start items-center gap-3 flex"><h2 class="text-center text-gray-900 h5-20-sb md:h4-24-sb">Join our growing team</h2><p class=" text-center text-slate-400 text-14-r md:body-16-r md:w-[518px]">We're putting together a team of stellar individuals with different ideas and backgrounds to shape the future of Starlight.</p>
                                </div><a target="_blank" href="https://{datax}.freshteam.com/jobs"><button class="py-3 px-4 text-sm font-semibold rounded-[6px] bg-gradient-brand-dark hover:opacity-90 undefined   undefined">
                                    <div class="flex gap-2 items-center justify-center"><p class="text-white undefined">View open roles</p>
                                    </div></button></a>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col items-center my-44 md:my-36">
                    </div>
                </div></main>

        </div>
    )
}

export default page
