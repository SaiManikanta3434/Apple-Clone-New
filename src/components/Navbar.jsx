import React from 'react';
import 'boxicons/css/boxicons.min.css';
import Image from '../assets/Apple.png';
import Icon from '../assets/icon.jpg';
//images
import Mac from '../assets/Mac.png';
import Phone from '../assets/IPhone.png';
import Ipad from '../assets/iPad.png';
import Watch from '../assets/Watch.png';
import Pods from '../assets/Pods.png';
import Airtag from '../assets/Tag.png';
import TV from '../assets/Tv.png';
import Hpod from '../assets/Homepod.png';
import Access from '../assets/Accessories.png';




const Navbar = () => {
  return (
    <container>
        <div className='flex gap-12 justify-center border border-gray-100 bg-gray-100  py-1.5'>
            <div>
                <a href='#' className='text-xl'><i class='bx bxl-apple'></i></a>
            </div>
            <div className='flex gap-8 text-xs font-SFregular text-gray-700 pt-2'>
                <a href='#' className='tracking-widest'>Store</a>
                <a href='#' className='tracking-widest'>Mac</a>
                <a href='#' className='tracking-widest'>iPad</a>
                <a href='#' className='tracking-widest'>iPhone</a>
                <a href='#' className='tracking-widest'>Watch</a>
                <a href='#' className='tracking-widest'>AirPods</a>
                <a href='#' className='tracking-widest'>TV & Home</a>
                <a href='#' className='tracking-widest'>Entertainment</a>
                <a href='#' className='tracking-widest'>Accessories</a>
                <a href='#' className='tracking-widest'>Support</a>
            </div>
            <div>
                <button className='text-lg pt-1'><i class='bx bx-search text-gray-600'></i></button>
            </div>
            <div className='pt-0.5'>
                <a href='#' className='text-lg '><i class='bx bx-shopping-bag text-gray-500'></i></a>
            </div>
        </div>
        <div className='flex justify-center mt-3 mb-4 font-sans text-sm text-gray-800'>
            <p>Get up to 12 months of No Cost EMI<span className='align-super text-[10px] ml-0.5'>§</span> plus upto ₹8000.00 instant cashback<span className='align-super text-[10px] ml-0.5'>§§</span>on selected products with eligible cards.<a className=' text-blue-600'>See Offers</a><span className='text-blue-600'><i class='bx bx-plus-circle' ></i></span></p>
        </div>

        <div className='flex justify-around pt-20 bg-gray-100'>
            <div className='mt-5 '>
                <p className='text-5xl font-semibold'><span className='text-black'>Store.</span><a className='text-gray-500'>The best way to buy the</a><p className='text-gray-500'>Products you love.</p></p>
            </div>
            <div>
                <div className='flex gap-4 mt-8'>
                    <div>
                        <button><img src={Icon} alt='Image' className='w-8 mt-2 h-8 mr-2'/></button>
                    </div>
                    <div>
                        <span className='text-md font-medium'>Need Shopping help</span><p className='text-blue-500 block'>Ask a Specialist<a>↗</a></p>
                    </div>
                </div>
                <div className='flex gap-4 mt-4'>
                    <div>
                        <button><img src={Image} alt='Image' className='w-10 mt-2 h-10 '/></button>
                    </div>
                    <div>
                        <span className='text-md font-medium'>Visit An Apple Store</span><p className='text-blue-500 block'>Find one near you<a>↗</a></p>
                    </div>
                </div>
            </div>
        </div>

        <div className='justify-center bg-gray-100 pt-24 pl-40 pr-none'>
            <div className='flex gap-10 justify-center font-medium'>
                <button><img src={Mac} alt='Mac' className='w-28 h-16 mb-4'/><p>Mac</p></button>
                <button><img src={Phone} alt='Mac' className='w-28 h-16  mb-4'/><p>iPhone</p></button>
                <button><img src={Ipad} alt='Mac' className='w-28 h-16  mb-4'/><p>iPad</p></button>
                <button><img src={Watch} alt='Mac' className='w-28 h-16 mb-4'/><p>Apple Watch</p></button>
                <button><img src={Pods} alt='Mac' className='w-28 h-16 mb-4'/><p>AirPods</p></button>
                <button><img src={Airtag} alt='Mac' className='w-28 h-16 mb-4'/><p>AirTag</p></button>
                <button><img src={TV} alt='Mac' className='w-28 h-16 mb-4'/><p>Apple TV 4K</p></button>
                <button><img src={Hpod} alt='Mac' className='w-28 h-16 mb-4'/><p>HomePod</p></button>
                <button><img src={Access} alt='Mac' className='w-28 h-16 mb-4'/><p>Accessories</p></button>
                <a href='#' className='pt-5' ><i className='border border-gray-100 hover:bg-gray-300 rounded-full bx bx-chevron-right text-6xl text-gray-600 '></i></a>
            </div>
        </div>

        <div className='pt-20 bg-gray-100'>
            <div className='text-3xl font-SFsemibold pl-40'>
                <p>The latest.<span className='text-gray-500'>Take a look at what's new right now.</span></p>
            </div>
        </div>
    </container>
  )
}

export default Navbar
