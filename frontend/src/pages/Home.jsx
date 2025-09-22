import React from 'react'

function Home() {
  return (
<section className="bg-white p-1 xs:p-8 mt-20">
  <div className=" max-w-96 sm:max-w-4xl mx-auto border border-[#4D7C0F] rounded-lg p-8">
    <h2 className="sm:text-xl text-[12px] font-bold mb-6">Create Your ROOM HERE </h2>
    <form>
      <div className="space-y-6">
        <div>
          <label htmlFor="email" className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Email 
            
             </label>
             <input type="email" id="email" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="email" placeholder='write your email' />
        </div>
       

{/* room number  */}


  <div>
          <label htmlFor="room" className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Room
            
             </label>
             <input type="room" id="room" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="room" placeholder='write your Room'  />
        </div>
       






     
      </div>
      <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end">
        <button type="submit" className=" sm:w-[86px] w-full h-[50px] text-xs sm:text-base bg-[#4D7C0F] rounded-[5px] p-[13px_25px] gap-[10px] text-white">Next</button>
      </div>
    </form>
  </div>
</section>

  )
}

export default Home