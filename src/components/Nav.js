import React from 'react'
import "./Nav.css";
import img1 from './icons/Asset 45.png';
import nav1 from './icons/Asset 36.png';
import nav2 from './icons/Asset 33.png';
import nav3 from './icons/Asset 34.png';
import nav4 from './icons/Asset 35.png';
// import banner1 from './icons/Banner1.jpg'

function Nav() {
  return (
    <div className='Navbar'>

        <div className=" grid grid-cols-2 gap-4 place-content-center mt-3 pt-3 pb-12 inline-block align-baseline relative">
            
            <div className='search_box flex place-content-center mr-12'>
                <div className='flex search_input p-2 rounded-lg'>
                    <input type="text" className='search_input p-2 rounded-lg align-middle text-white' placeholder='Search Product'/>
                    <img src="https://th.bing.com/th/id/R.0cd080c574ef785891bde4cb17686a69?rik=4Wy744ebSQtcpA&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2f5%2fN%2f0%2fx%2fw%2fj%2fsearch-icon-marine-md.png&ehk=aVHx14S4Lh9yA4epMI3RuuuGEIM1WBdWATZT5iXeeHk%3d&risl=&pid=ImgRaw&r=0" alt="" className="src w-5 h-5 mt-2 mr-3" />
                </div>
                
            </div>
            <div class='navlist flex px-8 align-middle mt-3'>
                <img src='https://th.bing.com/th/id/R.0f4887d3b94e21ead4ea2f9e955bcb51?rik=qdpD4UR0bWGNZw&pid=ImgRaw&r=0' className=' ml-12  w-8 h-7 rounded-md'/>
                <p class='px-4 pr-12 mr-9 align-middle pt-1 text-white'>Ks</p>
                <div className='navdiv pr-7'><img src={nav1} alt="" className="src w-9 h-9 rounded-md" /></div>
                <div className='navdiv pr-7'><img src={nav2} alt="" className="src w-9 h-9 rounded-md" /></div>
                <div className='navdiv pr-7'><img src={nav3} alt="" className="src w-9 h-9 rounded-md" /></div>
                <div className='navdiv pr-7'><img src={nav4} alt="" className="src w-9 h-9 rounded-md" /></div>
                
                
                
            </div>
            
           
        </div>
        
    </div>
  )
}

export default Nav