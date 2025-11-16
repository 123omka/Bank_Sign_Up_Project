import React from 'react'
import card from "../assets/card.png";
const WelcomePage = () => {
  return (
      
          <main className="flex-grow">
            <section className="max-w-7xl mx-auto py-16 px-8">
              <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">Self Sign-up</h1>
    
              <div className="flex items-start justify-between">
                <div className="max-w-lg">
                  <h2 className="text-2xl font-bold mb-2">Welcome</h2>
                  <p className="text-gray-700 mb-6">Open your account in a few easy steps</p>
    
                  <p className="font-semibold mb-2">Here’s what you’ll need before you start:</p>
                  <ul className="space-y-2 text-sm">
                    <li>✅ South African mobile number</li>
                    <li>✅ 18 years or older</li>
                    <li>✅ SA ID, Passport, or Asylum/Refugee document (permit if required)</li>
                    <li>✅ Proof of address (not older than 3 months)</li>
                    <li>✅ A selfie holding your ID</li>
                  </ul>
    
                  <div className="mt-8">
                    <button className="bg-lime-400 border border-lime-700 px-6 py-2 rounded-full text-sm font-semibold hover:bg-lime-300">
                     Start my application →
                    </button>
                  </div>
    
                  <p className="text-xs mt-4 text-gray-500">
                    By clicking “Start my application”, you accept all IMB terms and conditions
                    <br />
                    imb.datafree.co/legal/
                  </p>
                </div>
    
                <div className="w-1/2 flex justify-end">
                  <img src={card} alt="IMB Card" className="w-[400px]" />
                </div>
              </div>
            </section>
          </main>
  )
}

export default WelcomePage;