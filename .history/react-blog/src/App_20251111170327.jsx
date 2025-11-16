import React from 'react'

import Header from './components/Header';
import Mobileverification from './pages'
import Otpverification from './pages/Otpverification'
import PersonalInfo from './pages/PersonalInfo'
import AddressForm from './pages/AddressForm'
import ContactEmploymentForm from './pages/ContactEmploymentForm'
import UploadDocumentsForm from './pages/UploadDocumentsForm '
import ThankYouMessage from './pages/ThankYouMessage'
import WelcomePage from './pages/WelcomePage'
import { BrowserRouter,Routes ,Route} from 'react-router-dom'
import SelfSignUp from './pages/SelfSignUp'



const App = () => {
  return (
  
<div className='absolute left-[200px] w-[1920px] h-[1354px] '>
    <Header/>
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/otp-verification" element={<Otpverification />} />
        <Route path="/mobile-verification" element={<Mobileverification />} />
        <Route path="/personal-info" element={<PersonalInfo />} />
        <Route path="/address-form" element={<AddressForm />} />
        <Route path="/contact-employment" element={<ContactEmploymentForm />} />
        <Route path="/upload-documents" element={<UploadDocumentsForm />} />
        <Route path="/thank-you" element={<ThankYouMessage />} />
        <Route path="/sign-up" element={<SelfSignUp/>}/>
      </Routes> 
      </BrowserRouter>
      {/* <Footer/>  */}
    </div>
      
    
  )
}

export default App