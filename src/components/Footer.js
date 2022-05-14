import React from 'react'

function Footer() {
  return (
    <div className='bg-red-600'>
    <div class="grid grid-cols-3 gap-4 bg-red-600 text-white-500 mt-10 top-0 right-44 left-44 place-content-center mx-12 px-28 ">
        <div class="text-white py-5 text-[14px] space-y-3">
            <h5>Customer Service</h5>
            <h5>Terms and Privacy Policy</h5>
            <h5>Return Policy</h5>
        </div>
        <div class="text-white py-5 text-[14px] space-y-3">
            <h5>Language</h5>
            <h5>Myanmar (Unicode)</h5>
            <h5>English</h5>
        </div>
        <div class="text-white py-5 text-[14px] space-y-3">
            <h5>Contact Us</h5>
            <h5>No 178, MyayKha St. Mayagone 6 Miles, Yangon, Myanmar</h5>
            <h5>+959345454345</h5>
        </div>
    </div>
    </div>
    
  )
}

export default Footer