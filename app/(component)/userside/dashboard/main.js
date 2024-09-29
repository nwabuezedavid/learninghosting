import React from 'react'
import { Firststep, SecBox } from './box'
import { History } from './history'

const Dmain = () => {
  const ss2adds = [
    {'icon':'', 'name':'Current plan', 'bal':'' },
    {'icon':'', 'name':'Pending invest', 'bal':'' },
    {'icon':'', 'name':'Pending withdraw', 'bal':'' },
    {'icon':'', 'name':'Refferal earn', 'bal':'' },
  
  ]
  return (
    <div className='w-full overflow-auto  flex flex-col'>
      
      <Firststep />
<SecBox />
<main className='flex flex-col w-full gap-3 p-3'>
  <h1>Referral Link</h1>
  <div className="flex w-full sm:w-[70%] border-2 border-blue-400 rounded text-blue-900  items-center justify-center">
    <input type="text" readOnly value='https://user.spacexelon.com/register/nwabueze' className='flex-1 outline-none p-3 border-none'/>
    <b className='h-full w-fit px-3 bg-red-500 text-whitec flex items-center text-white justify-center'>copy</b>
  </div>
</main>
<History/>
    </div>
  )
}

export default Dmain