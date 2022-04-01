import Link from 'next/link'


const IndexPage = () => 
  <>
  {/* 1st layer */}
  <nav className=' h-20 bg-red-600 flex flex-row justify-around items-center py-5'>
  <div className=' relative right-36'>
   <img className=' w-32' src="https://i.ibb.co/5F8GX3P/275695272-306152975005517-7744725845089821097-n.png" alt="" />
 </div>

<div className='flex flex-row text-white justify-around items-center w-60 h-10 relative left-32'>

  
 <div className=' flex flex-row'>
 <p>Home</p>

<span className='mx-5'>&#124;</span>
 </div>
<div className=' flex flex-row h-10 items-center'>
<div className='w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center'>
<img className=" h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""  />
</div>
<div>
<span className='ml-2 border-b pb-0.5'>Jasim uddin</span>
</div>
</div>
   

</div>
  
</nav>

{/* 1st part end  */}

<main className=' mt-16'>
  {/* top part */}
  <div className='bg-red-300 w-3/4 h-40 mx-auto flex items-center '>
<div>
<img className='w-32 mx-5 ' src="https://i.ibb.co/5F8GX3P/275695272-306152975005517-7744725845089821097-n.png" alt="" />
</div>
<div>
<h3 className='font-extrabold text-3xl ml-14'>Jazeerat dubai visa application form</h3>
</div>
  </div>
</main>

{/* 2nd layer */}
<div className=' h-72 flex flex-row w-3/4 mx-auto space-x-10 mt-6'>
  <div><img className='h-72 ' src="https://live.staticflickr.com/8599/16337413461_9e83d5af7d_c.jpg" alt="" /></div>
  <div><img className='h-72 ' src="https://upload.wikimedia.org/wikipedia/commons/5/51/The_data_page_of_the_Azerbaijani_biometric_passport.jpg" alt="" />
</div>

{/* 2nd layer 3rd column  */}
  <div className=' flex flex-col  w-3/5 justify-between items-center'>
<div></div>
{/* picture start  */}
    <div className=' flex flex-row space-x-1 justify-center items-center'>
    <img className=" h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""  />
   <span className=' text-3xl font-semibold'>Jasim Uddin</span>
    </div>

  {/* picture end  */}

    <div className=' w-full shadow-lg shadow-gray border-2 align-bottom h-44 flex flex-row space-x-3 justify-evenly'>

        
        <div className=' flex flex-col justify-center items-center'>
          <div className=' border-2 w-20 h-20 flex justify-center items-center'><img className=' h-8 w-8' src="https://i.ibb.co/HXnZ0Mh/debit-card.png" alt="" /></div>
          <p className=' text-sm mt-1'>Payment status <br /> <span className=' text-green-500 font-medium'>Paid</span>(City Bank)</p>
        </div>
        <div className=' flex flex-col justify-center items-center'>
          <div className=' border-2  w-20 h-20 flex justify-center items-center'><img className=' h-10 w-10' src="https://i.ibb.co/RpPr2VR/approved.png" alt="" /></div>
          <p className=' text-sm mt-1 text-center'>Approved Status <br /> <span className=' text-green-500 font-medium'>Approved</span></p>
        </div>
        <div className=' flex flex-col justify-center items-center'>
          <div className=' border-2  w-20 h-20 flex justify-center items-center'><img className=' h-8 w-8' src="https://i.ibb.co/K64KfXs/detail.png" alt="" /></div>
          <p className=' text-sm mt-1 text-center'>Payment details <br /> <span className=' text-blue-500 font-medium'> Click</span> to check here</p>
        </div>
        <div className=' flex flex-col justify-center items-center'>
          <div className=' bg-gray-400  w-20 h-20 flex justify-center items-center'><img className=' h-8 w-8' src="https://i.ibb.co/pxPhFsb/check.png" alt="" /></div>
          <p className=' text-sm mt-1 text-center'>Unverified<br /> <span className=' text-blue-500 font-medium'>Click</span> to accept for verify</p>
        </div>

        </div>    
  </div>
</div>
{/* 3rd Layer */}
<div className=' space-y-3 my-4 text-gray-500'>
  <div className=' w-3/4 mx-auto bg-red-200 h-12 rounded-md flex items-center justify-between'>
    <p className="relative left-7 ">First Name : Jasim</p>
    <p className="relative right-32">Last Name : Uddin</p>
    <p className="relative right-44">Mobile no : 01454545454</p>
  </div>
  <div className=' w-3/4 mx-auto bg-red-200 h-12 rounded-md flex items-center justify-between'>
  <p className="relative left-7 ">Email : Jasimuddin21@gmail.com</p>
    <p className="relative right-40">Date of birth : 01/01/1998</p>
    <p className="relative right-48">Place of birth : Sirajgonj</p>
  </div>

  <div className=' grid grid-cols-3 w-3/4 mx-auto gap-x-6 gap-y-7'>
  <div className=' bg-red-200 h-12 rounded-md flex items-center'>
<p className="relative left-7">Address(present) : Sirajganj,BD</p>
  </div>
  <div className=' bg-red-200 h-12 rounded-md flex items-center'>
  <p className="relative left-3">Police station : Sirajganj</p>
  </div>
  <div className=' bg-red-200 h-12 rounded-md flex items-center'>
  <p className="relative left-24">Zip code : 6700</p>
  </div>
  <div className=' bg-red-200 h-12 rounded-md flex items-center'>
  <p className="relative left-7">Full Address (Permanent)</p>
  </div>
  <div className=' bg-red-200 h-12 rounded-md flex items-center'>
  <p className="relative left-3">Police station</p>
  </div>
  <div className=' bg-red-200 h-12 rounded-md flex items-center'>
  <p className="relative left-24">Zip code</p>
  </div>
  <div className=' bg-red-200 h-12 rounded-md flex items-center'>
  <p className="relative left-7">District</p>
  </div>
  <div className=' bg-red-200 h-12 rounded-md flex items-center'>
  <p className="relative left-3">Country</p>
  </div>
  <div className=' bg-red-200 h-12 rounded-md flex items-center'>
  <p className="relative left-24">Country code</p>
  </div>
  <div className=' bg-red-200 h-12 rounded-md flex items-center'>
  <p className="relative left-7">Deposit(City Bank)</p>
  </div>
  <div className=' bg-red-200 h-12 rounded-md flex items-center'>
  <p className="relative left-3">Multiple entry</p>
  </div>
  <div className=' bg-red-200 h-12 rounded-md flex items-center'>
  <p className="relative left-24">1 months entry</p>
  </div>
  <div className=' bg-red-700 h-12 rounded-md flex items-center justify-center'>
  <p className="text-white">Print</p>
  </div>
  <div className=' bg-red-700 h-12 rounded-md flex items-center justify-center'>
  <p className="text-white">Back to home</p>
  </div>
    
  </div>
</div>
</>
export default IndexPage
