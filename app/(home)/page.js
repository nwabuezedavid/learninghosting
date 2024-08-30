
import HheaderFind from '../(component)/header';
import LevelOnehead from './../(component)/level-onehead';
import Link  from 'next/link';
import Image from "next/image"
import PplanPsk from './../(component)/plan';
import SiteInte from '../(component)/intro';
import Testimonal from '../(component)/testimonal';
import Referrak from '../(component)/investor';
import FoTter from '../(component)/footer';


export default  function Home() {
const plan = [
  {min:"100", max:"999",name:"basic" ,percen:"4",forx:"4"},
  {min:"1000", max:"9999",name:"standard" ,percen:"4",forx:"6"},
  {min:"10000", max:"99999",name:"permuin" ,percen:"4",forx:"6"},
  {min:"100000", max:"nill",name:"sliver" ,percen:"5",forx:"6"},
]
  return (
<>

<section>
<LevelOnehead/>
<SiteInte/>

<main className=" items-center justify-center flex flex-col  w-full h-fit m-auto  mt-[12%] ">
  <img src='/bg-img.webp'  height={10} width={20}  className="flex w-[90%] max-sm:hidden h-[60vh]"/>
<div className="flex w-[80%] max-md:w-full flex-wrap items-center justify-evenly object-contain  p-[1.3%] h-auto  bg-blue-50 rounded mb-3 mt-4">
  <big className="text-[30px] font-bold h-[190px] max-sm:flex-grow  flex text-center  flex-col b">

<h1 className="bg-gradient-to-r text-[60px] from-blue-500 to-purple-600 bg-clip-text text-transparent">
$25M+
</h1>
<p className='text-[50%] text-gray-500'>Assets Under Management</p>
  </big>
  <big className="text-[30px] font-bold h-[190px]  max-sm:flex-grow flex text-center  flex-col b">

<h1 className="bg-gradient-to-r text-[60px] from-blue-500 to-purple-600 bg-clip-text text-transparent">
2M+
</h1>
<p className='text-[50%] text-gray-500'>Invested Users</p>
  </big>
  <big className="text-[30px] font-bold h-[190px]  max-sm:flex-grow flex text-center  flex-col b">

<h1 className="bg-gradient-to-r text-[60px] from-blue-500 to-purple-600 bg-clip-text text-transparent">
96%
</h1>
<p className='text-[50%] text-gray-500'>Customer Satisfaction Score</p>
  </big>
</div>
</main>

<main className='w-full h-fit flex flex-col justify-center items-center '>
  <center className='text-4xl font-bold my-8'>We make crypto investing easy for you</center>
  <div className='w-full h-fit ratio flex flex-wrap items-center justify-evenly mb-6 '>
    <span className='w-[320px] flex flex-col  shadow-inner text-center   p-3 rounded font-bold '>
      <img src="/secure/1.webp" className='w-[290px] h-[70%] ' alt="as" />
      <h2 className='text-2xl'>1/1 expert support</h2>
      <p className='text-xs capitalize text-gray-500 w-full'>The easiest investment you'll ever make, with expert support just one call away</p>
    </span>
    <span className='w-[320px] flex flex-col  shadow-inner text-center   p-3 rounded font-bold '>
      <img src="/secure/2.webp" className='w-[290px] h-[70%] ' alt="as" />
      <h2 className='text-2xl'>100% compliant</h2>
      <p className='text-xs capitalize text-gray-500 w-full'>Registered with FIU-India and fully compliant by Indian and European standards</p>
    </span>
    <span className='w-[320px] flex flex-col  shadow-inner text-center   p-3 rounded font-bold '>
      <img src="/secure/3.webp" className='w-[290px] h-[70%] ' alt="as" />
      <h2 className='text-2xl'>Safe and insured funds</h2>
      <p className='text-xs capitalize text-gray-500 w-full'>None of your assets or funds are used by Mudrex without your permission</p>
    </span>
  </div>
</main>

<center className='text-blue-950 mt-10 font-bold text-4xl uppercase'>Investment Plan</center>
<main className="flex w-full max-md:w-[100%] rounded max-md:flex-wrap   h-fit max-md:flex-col">
  <div className='w-1/2 max-md:w-full  '>
    <img src="/coin.webp" className='w-full h-full object-contain' alt="norejd" />
  </div>
<div id="plansection" className='flex w-1/2 flex-grow max-md:w-full max-md:m-auto  mt-[12%] bg-gradient-to-tr from-black to-blue-400  items-center justify-center h-full gap-4 flex-wrap'>
{plan?.map((e,id) => <PplanPsk data={e}  key={id} />)}


  </div>
</main>
<Testimonal/>
<Referrak/>
<div className='p-3 '>
<gecko-coin-price-static-headline-widget locale="en" transparent-background="true" outlined="true" coin-ids="sundog,solana,aave,pepe,bellscoin,zano,gems-vip,sun-token,popcat,tron,io,matic-network,maga,bitcoin,zksync" initial-currency="usd"></gecko-coin-price-static-headline-widget></div>
</section>
</>
  );
}


