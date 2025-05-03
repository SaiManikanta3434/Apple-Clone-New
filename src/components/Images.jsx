import React from 'react'
import 'boxicons/css/boxicons.min.css';
import Group from '../assets/Group.jpeg';
import Man from '../assets/Man.jpeg';
import Cell from '../assets/Cell.jpeg';
import Lone from '../assets/Lone.jpeg';
import Ltwo from '../assets/Ltwo.jpeg';
import Lthree from '../assets/Lthree.jpeg';
import Education from '../assets/education.jpeg';


const Images = () => {
  return (
    <container>

        <div className='lg:pl-34 md:pl-0 sm:pl-0 bg-gray-100 pb-10'>
            <p className='text-3xl font-SFsemibold'>Help is here.<span className='text-gray-500'>Whenever and however you need it.</span></p>
        </div>


        <div className='flex gap-4 pl-33 bg-gray-100 lg:flex-row md:flex-col sm:flex-col '>
          {/* One */}
            <div className='hover:scale-105 hover:border-b-gray-400  transform transition-transform duration-300 hover:shadow-xl/40 max-w-md rounded-2xl overflow-hidden relative bg-white shadow-md'>
                <img src={Man} alt='Man' className='w-full h-full object-cover'/>
                <div className='absolute top-0 left-0 p-6 text-gray-800'>
                    <p className='text-xs font-SFsemibold text-gray-500 tracking-wide mb-2'>APPLE SPECIALIST</p>
                    <h2 className='text-2xl font-semibold mb-2'>Shop One on one with a Specialist online</h2>
                </div>
            </div>
            {/* Two */}
            <div className="hover:scale-105 hover:border-b-gray-400  transform transition-transform duration-300 hover:shadow-xl/40 max-w-md rounded-2xl overflow-hidden relative bg-white shadow-md">
              <img src={Group} alt="Apple session" className="w-full h-full object-cover"/>
                <div className="absolute top-0 left-0 p-6 text-gray-800">
                    <p className="text-xs font-semibold text-gray-500 tracking-wide mb-2">TODAY AT APPLE</p><h2 className="text-2xl font-semibold mb-2">Join free sessions at your Apple Store.</h2><p className="text-sm text-gray-600">
                  Learn about the latest features and how to go further with your Apple devices.</p> 
                </div>
            </div>
            {/* Three */}
            <div className='hover:scale-105 hover:border-b-gray-400  transform transition-transform duration-300 hover:shadow-xl/40 max-w-md rounded-2xl overflow-hidden relative bg-black shadow-md'>
                <img src={Cell} alt='Iphone' className='w-full h-auto object-cover'/>
                <div className='absolute top-0 left-0 p-6 text-gray-800'>
                    <p className='text-xs font-SFsemibold text-gray-500 tracking-wide mb-2'>BUSINESS</p><h2 className='text-3xl font-SFbold text-white mb-2'>From Enterprise to small business, we'll work with<p className=''> you.</p> </h2>
                </div>
            </div>


        </div>

        <div className='pl-34 pt-20 bg-gray-100 pb-15'>
            <p className='text-3xl font-SFsemibold'>The Apple experience.<span className='text-gray-500'>Do even more with Apple products and services.</span></p>
        </div>


        <div className='flex gap-6 pl-33 bg-gray-100 lg:flex-row md:flex-col sm:flex-col'>
          {/* One */}
            <div className='hover:scale-105 hover:border-b-gray-400  transform transition-transform duration-300 hover:shadow-xl/40 max-w-md rounded-2xl overflow-hidden relative bg-white shadow-md'>
                <img src={Lone} alt='Man' className='w-full h-full object-cover'/>
                <div className='absolute top-0 left-0 p-6 text-gray-800'>
                    <p className='text-3xl font-SFsemibold bg-gradient-to-r from-blue-500 to-orange-700 via-pink-600 bg-clip-text text-transparent mb-2'>Apple Intelligence.</p>
                    <h2 className='text-3xl font-SFsemibold mb-2'>Write, express yourself and get things done effortlessly.<span className='align-super text-lg'>∆</span></h2>
                </div>
            </div>
          {/* Two */}
            <div className='hover:scale-105 hover:border-b-gray-400  transform transition-transform duration-300 hover:shadow-xl/40 max-w-md rounded-2xl overflow-hidden relative bg-white shadow-md'>
                <img src={Ltwo} alt='Man' className='w-full h-full object-cover'/>
                <div className='absolute top-0 left-0 p-6 text-gray-800'>
                    <p className='text-xs font-SFsemibold text-gray-500 tracking-wide mb-2'>APPLE TV+</p>
                    <h2 className='text-3xl font-SFsemibold tracking-tighter mb-2'>Get 3 months of Apple TV+ free when you buy an Apple device.<span className='align-super text-lg font-medium'>o</span></h2>
                </div>
            </div>

             {/* Three */}
             <div className='hover:scale-105 hover:border-b-gray-400  transform transition-transform duration-300 hover:shadow-xl/40 max-w-md rounded-2xl overflow-hidden relative bg-white shadow-md'>
                <img src={Lthree} alt='Man' className='w-full h-full object-cover'/>
                <div className='absolute top-0 left-0 p-6 text-gray-800'>
                    
                    <h2 className='text-3xl font-semibold tracking-tight pl-6 pt-10 mb-2'>Four Apple services. One easy subscription.</h2>
                </div>
            </div>

            


        </div>

        <div className='pl-34 pt-20 bg-gray-100 pb-15'>
            <p className='text-3xl font-SFsemibold'>Special stores.<span className='text-gray-500'>Exclusive savings for students and educators.</span></p>
        </div>

        <div className='pl-33 bg-gray-100'>
        <div className='hover:scale-105 hover:border-b-gray-400  transform transition-transform duration-300 hover:shadow-xl/40 max-w-96 rounded-2xl overflow-hidden relative bg-white shadow-md'>
                <img src={Education} alt='Man' className='w-full h-full object-cover'/>
                <div className='absolute top-0 left-0 p-6 text-gray-800'>
                    <p className='text-xs font-SFsemibold text-gray-500 tracking-wide mb-2'>EDUCATION</p>
                    <h2 className='text-3xl font-SFsemibold mb-2'>Buy a new Mac or iPad with education savings.<span className='align-super text-lg font-medium'>1</span></h2>
                </div>
            </div>
        </div>
      
    </container>
  )
}

export default Images
