
import Ibmcard from '../components/Ibmcard'
import { useNavigate } from 'react-router-dom'
import ProgressBar from "../components/ProgressBar";
import Footer from '../components/Footer';
import { useState } from 'react';




const Mobileverification = () => {
  const [Phone, setPhone] = useState('')
  const navigate=useNavigate()
  const gotoOtSend=()=>{
    navigate("/otp-verification")
  }
  return (
    
    <>
    <div className="flex flex-col items-center justify-center py-12 bg-white">
      <h2 className="text-3xl font-[open_Sans] font-bold text-blue-700 mb-4">Self Sign-up</h2>
      <ProgressBar currentStep={0} /></div> 
     
    <div  className='absolute top-[374px] left-[374px] '>
        <strong className='w-[358px] h-[28px]  font-bold text-[24px] leading-[28px]font-[Open_Sans]'> Verify Your Mobile Number</strong>
        <p className='text-[#040404] font-[open_Sans]'>Enter your mobile number</p>
        <form onSubmit={(e)=>{}
          e.preventDefault()
          console.log(Phone)
        
        }>
            <input
            // value={Phone}
             onChange={(e)=>setPhone(e.target.value)}
             type="text" 
             placeholder='South Africian Mobile Number'
              className='  w-[358px] h-[84px0] rounded-xl p-[10px] border border-[#040404] bg-[#f1f1f1]'
              
              />
            <p className='font-[open_Sans]' >We'll send you a One-Time-PIN(OTP) via SMS to verify<br/> your number</p>
            <button  
            type='submit'
            onClick={gotoOtSend}
            className='w-[157.125px] h-[51px] mt-[30px] opacity-100 rounded-[1000px] font-[open_Sans] border-2 px-[20px] py-[10px] bg-lime-500'>send otp </button>
        </form>
        
    </div>
<Ibmcard/>
      
      <div className="absolute top-[905px]"><Footer/></div>
      </>
  )
}

export default Mobileverification