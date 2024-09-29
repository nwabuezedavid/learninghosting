
export const History = () => {
    const isx = true
  return (
    <section className="w-full  flex flex-col items-center  justify-center">
        <h2 className="w-full p-4 border text-3xl">Reference tree</h2>
        
        <main className='flex w-[70%] max-md:w-full min-h-[300px] border shadow-sm p-2 rounded shadow-black m-4 capitalize flex-col  '>
<header className="flex uppercase max-md:*:w-1/2 *:border *:p-1  max-md:text-[70%]  md:*:w-[130px] *:flex-grow">
    <b>id</b>
    <b>date</b>
    <b>amount($)</b>
    <b>type</b>
    <b>statue</b>
</header>
<div className="flex capitalize max-md:*:w-1/2 *:text-[70%] *:border max-md:text-[70%] *:p-3 md:*:w-[130px] *:flex-grow">
    <b>UU sjshsjj</b>
    <b>23day ago</b>
    <b>USD300</b>
    <b>deposit</b>
    <b className="border-none ">
        <span className="w-4  h-4 p-2 border-r-2 border-t-2 text-white delay-500 animate-accordion-down bg-cyan-500 rounded-full border-red-400">
            pending....
        </span>
        </b>
</div>
<div className="flex capitalize *:text-[70%] max-md:*:w-1/2 max-md:text-[70%] *:border *:p-3 w-full *:w-[130px] *:flex-grow">
    <b>UU sjshsjj</b>
    <b>23day ago</b>
    <b>USD300</b>
    <b>deposit</b>
    <b className="border-none ">
        <span className="w-4  h-4 p-2 border-r-2 border-t-2 text-red-500 delay-500 animate-accordion-down bg-snow-500 rounded-full border-red-400">
            approved
        </span>
        </b>
</div>
        </main>
    </section>
  )
}
