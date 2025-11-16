import React from 'react'
import card from "../assets/card.png";

const Otpverification = () => {
  return (
     <>
     <main className=''>
        <section className="max-w-7xl mx-auto py-16 px-8">
            <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">Self Sign-up</h1>
            <div>
                <form >
                     <div>
                <h2 className="font-semibold text-lg">Verify Your Mobile Number</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Enter your mobile number
                </p></div>
                    <div className="space-y-2">
                <input placeholder="South African Mobile Number" className="w-[358px] h-[50px] rounded-[8px] border border-[#040404] bg-[#F1F1F1] opacity-100 p-[10px]" />
                <p className="text-xs text-gray-500">
                  We’ll send you a One-Time PIN (OTP) via SMS to verify your number.
                </p>
              </div >
               <button className='bg-lime-500 rounded-full'>Send Otp</button>
                </form>
                <div className="w-[627px] h-[391px] opacity-100 absolute top-[342px] left-[962px]">
                   <img src={card} alt="IMB Card" className="w-[400px]" />
                 </div>
            </div>
            
        </section>
     </main>
     </>
  )
}

export default Otpverification