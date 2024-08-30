"use client"

import { UseSitedetail } from "./context/sitedetail"


const Referrak = () => {
    const {datax} = UseSitedetail()
    return (
        <div className='flex w-full flex-col items-start '>
            <span className="flex flex-col w-full p-2 ">
            <h1 className="text-4xl font-bold p-3">Referral Program</h1>
            <b >Earn Rewards by Referring Friends!</b>
            <p className="w-[70%] text-[gray] max-md:w-full">

            We’re excited to introduce the {datax} Referral Program! Now, you can earn extra rewards by simply sharing {datax} with your friends, family, and network. It’s our way of saying thank you for helping us grow the {datax} community.
            </p>
            </span>
            <section className="flex w-full  max-md:flex-wrap ">
                <main className="w-[70%]  max-md:w-full flex flex-col">
                    <strong className="text-2xl text-blue-900">How It Works:</strong>
                    <div className="">
                        <header className="w-full p-4 bg-blue-50">Get Your Unique Referral Link:</header>
                        <ul className="w-full fex flex-col *:p-2 space-y-2 *:bg-slate-50 p-2 px-6 pt-5">
                            <li>Sign up or log in to your {datax} account.
                            </li>
                            <li>Navigate to the Referral Program  section.</li>
                            <li>Copy your unique referral link.</li>
                        </ul>
                    </div>
                    <div>
                        <header className="w-full p-4 bg-blue-50">Share and Invite:</header>
                        <ul className="w-full fex flex-col *:p-2 space-y-2 *:bg-slate-50 p-2 px-6 pt-5">
                            <li>Share your referral link with friends, family, and on social media
                            </li>
                            <li>Your invitees can use the link to sign up for a {datax} account.</li>
                            
                        </ul>
                    </div>
                    <div>
                        <header className="w-full p-4 bg-blue-50">Earn Rewards:</header>
                        <ul className="w-full fex flex-col *:p-2 space-y-2 *:bg-slate-50 p-2 px-6 pt-5">
                            <li>Once your referral signs up and completes their first transaction, both you and your referral will earn [specific reward, e.g., tokens, percentage bonus, etc.].
                            </li>
                            <li>The more friends you refer, the more rewards you can earn. There’s no limit!</li>
                            
                        </ul>
                    </div>
                    <div>
                        <header className="w-full p-4 bg-blue-50">Referral Rewards:</header>
                        <ol className="w-full fex flex-col *:p-2 space-y-2 *:bg-slate-50 p-2 px-6 pt-5">
                            <li>For Referrers: Earn [5% of the transaction fee, 3% tokens, etc.] for every successful referral.  </li>
                            <li>For Referees: Get a welcome bonus of [3% tokens, discount, etc.] upon signing up and completing their first transaction.</li>
                            
                        </ol>
                    </div>
                </main>
                <img src="/about_us_hero_web.webp" className="flex-grow rounded w-1/2 h-fit sticky top-0" alt="norejd" />
            </section>
        </div>
    )
}

export default Referrak
