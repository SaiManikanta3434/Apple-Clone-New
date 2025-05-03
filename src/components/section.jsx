import React from 'react';
import 'boxicons/css/boxicons.min.css';
import Pro from '../assets/Store.jpg';
import Store2 from '../assets/Store2.jpg';
import Store3 from '../assets/store3.jpg';
import Decoration from '../assets/Decoration.jpg';
import Orange from '../assets/Orange.jpg';
import Prime from '../assets/Mag.jpeg';
import HP from '../assets/HP.jpeg';
import Decor from '../assets/Decor.jpeg';
import PD from '../assets/Pd1.jpeg';
import PDT from '../assets/pd2.jpeg';
import Pencil from '../assets/Pencil.jpeg';
import PicOne from '../assets/Picone.png';
import Pictwo from '../assets/Pictwo.png';
import Picthree from '../assets/Picthree.png';
import Picfour from '../assets/Picfour.png';









    



const section = () => {
    const colors = [
        'bg-indigo-400',
        'bg-pink-300',
        'bg-green-200',
        'bg-red-400',
        'bg-yellow-300',
        'bg-indigo-600',
      ];
    
  return (
    <section className='bg-gray-100 pt-20'>
        <div className='flex gap-4 pl-33 bg-gray-100 lg:flex-row md:flex-col sm:flex-col '>
                  {/* One */}
                    <div className='hover:scale-105 bg-black hover:border-b-gray-400 transform transition-transform duration-300 hover:shadow-xl/40 w-6xl rounded-2xl overflow-hidden relative shadow-md'>
                        <img src={Pro} alt='Man' className='w-full h-full object-scale-down pt-20'/>
                        <div className='absolute top-0 left-0 p-6 text-gray-800'>
                        <p className='text-white text-2xl font-SFmedium'>iPhone 16 Pro<p className='bg-gradient-to-r from-blue-700 to-red-600 via-pink-600 bg-clip-text text-transparent text-lg'>Apple Intelligence<span className='align-super text-[10px] ml-0.5'>∆</span><p className='text-lg text-white'>From ₹119900.00<span className='align-super ml-0.5'>‡</span></p></p></p>

                        </div>
                    </div>
                    {/* Two */}
                    <div className="hover:scale-105 hover:border-b-gray-400  transform transition-transform duration-300 hover:shadow-xl/40 w-6xl rounded-2xl overflow-hidden relative bg-white shadow-md">
                      <img src={Store2} alt="Apple session" className="w-full h-auto object-cover"/>
                        <div className="absolute top-0 left-0 p-6 text-gray-800">
                        <p className='text-black text-2xl font-SFmedium'>Apple Watch Series 10<p className='text-lg'>Thinstant Classic.<p className='text-lg text-black'>From ₹46900.00<span className='align-super ml-0.5'>‡</span></p></p></p>
 
                        </div>
                    </div>
                    {/* Three */}
                    <div className='hover:scale-105 hover:border-b-gray-400  transform transition-transform duration-300 hover:shadow-xl/40 w-6xl rounded-2xl overflow-hidden relative bg-black shadow-md'>
                        <img src={Store3} alt='Iphone' className='w-full h-auto object-cover'/>
                        <div className='absolute top-0 left-0 p-6 text-gray-800'>
                        <p className='text-black text-2xl font-SFmedium'>iPad Air<p className='bg-gradient-to-r from-blue-700 to-red-600 via-pink-600 bg-clip-text text-transparent text-lg'>Apple Intelligence<span className='align-super ml-0.5'>∆</span><p className='text-lg text-black'>From ₹46900.00<span className='align-super ml-0.5'>‡</span></p></p></p>
                        </div>
                    </div>
                </div>


        <div className='pt-20 px-35'>
            <p className='text-3xl font-SFbold text-orange-600'>Accessories. <span className='text-gray-500'> Put a bow on Mother's Day</span></p>

        </div>

{/*Down one */}

        <div className='flex gap-6 px-4 pt-5 md:flex-col sm:flex-col lg:flex-row md:justify-center sm:justify-center'>
            
            {/* First box */}
            <div className='hover:shadow-xl/40 md:justify-center sm:justify-center rounded-lg hover:scale-105 hover:border-b-gray-400  transform transition-transform duration-300 bg-white w-lvh h-auto lg:ml-30 md:ml-0 sm:ml-0'>
                <div className='px-8 pt-5'>
                    <p className='text-gray-400 text-xs font-sans'>MOTHER'S DAY<p className='text-black text-3xl font-SFsemibold'>Pairs Perfectly with Mom<p className='text-lg text-white'>From ₹119900.00<span className='align-super ml-0.5'>‡</span></p></p></p>
                </div>
                <div>
                    <img src={Decoration} alt='phone' className='object-cover pb-3 rounded-lg w-3xl h-96 -mt-8'/>
                </div>
            </div>
         
         {/* second box */}

            <div className='border-gray-200 hover:border-b-gray-400 hover:scale-105  transform transition-transform duration-300 border hover:shadow-xl/40 rounded-lg bg-white w-md h-auto'>
                
                <div>
                    <img src={Orange} alt='phone' className='rounded-lg w-60 pl-10 h-72'/>
                </div>
                <div className='flex items-center space-x-2 ml-20 mt-5'>

                    <div className='w-3 h-3 rounded-full'>
                        <div className='h-1/2 w-full bg-gray-600 rounded-tl-full rounded-tr-full'></div>
                        <div className='h-1/2 w-full bg-gray-400 rounded-bl-full rounded-br-full'></div>
                    </div>

                    <div className='w-3 h-3 rounded-full'>
                        <div className='h-1/2 w-full bg-gray-300 rounded-tl-full rounded-tr-full'></div>
                        <div className='h-1/2 w-full bg-gray-400 rounded-bl-full rounded-br-full'></div>
                    </div>
                    <div className='w-3 h-3 rounded-full bg-black'></div>

                    <div className='w-3 h-3 rounded-full'>
                        <div className='h-1/2 w-full bg-orange-100 rounded-tl-full rounded-tr-full'></div>
                        <div className='h-1/2 w-full bg-gray-300 rounded-bl-full rounded-br-full'></div>
                    </div>

                    <div className='w-3 h-3 rounded-full'>
                        <div className='h-1/2 w-full bg-orange-400 rounded-tl-full rounded-tr-full'></div>
                        <div className='h-1/2 w-full bg-amber-700 rounded-bl-full rounded-br-full'></div>
                    </div>                
                </div>
                <div className='pt-4 pl-6'>
                    <p className='text-sm font-SFmedium text-amber-700'>New colours
                    <p className='text-black text-lg font-SFmedium'>AirPods Max - Orange</p>
                    <p className='pt-13 text-md font-sans text-black pb-5'>MRP ₹59900.00 (Incl. of all taxes)</p>
                    </p>
                </div>
            </div>

         {/* Third box */}

         <div className='border-gray-200 hover:border-b-gray-400 hover:scale-105  transform transition-transform duration-300 border hover:shadow-xl/40 rounded-lg bg-white w-md h-auto'>
                
                <div>
                    <img src={Prime} alt='phone' className='rounded-lg w-64 pl-4 pt-12 h-[68]'/>
                </div>
                <div className='flex items-center space-x-2 ml-18 mt-5'>

                 {colors.map((color, index) => (
                <div
                 key={index}
                className={`w-3 h-3 rounded-full ${color}`}
                ></div>
                ))}
     
      <div className="w-3 h-3 rounded-full bg-white flex items-center justify-center text-gray-600 text-sm">
        +
      </div>
             
                </div>
                <div className='pt-4 pl-6'>
                    <p className='text-sm font-SFmedium text-amber-700'>New
                    <p className='text-black text-lg font-SFmedium'>iPhone 16 Plus Silicone Case<p>with MagSafe - Peony</p></p>
                    <p className='pt-6 text-md font-sans text-black pb-5'>MRP ₹4900.00 (Incl. of all taxes)</p>
                    </p>
                </div>
            </div>

        {/*Fourth Box */}

        <div className='border-gray-200 border hover:scale-105 hover:border-b-gray-400  transform transition-transform duration-300 hover:shadow-xl/40 rounded-lg bg-white w-md h-auto'>
                
                <div>
                    <img src={HP} alt='phone' className='rounded-lg w-64 pl-4 pt-12 h-[68]'/>
                </div>
                <div className='flex items-center space-x-2 ml-22 mt-5'>
                    <div className='w-3 h-3 rounded-full bg-gray-600'></div>
                    <div className='w-3 h-3 rounded-full bg-yellow-400'></div>
                    <div className='w-3 h-3 rounded-full bg-black'></div>
                    <div className='w-3 h-3 rounded-full bg-white border border-gray-200'></div>
                    <div className='w-3 h-3 rounded-full bg-orange-500'></div>
                </div>
                <div className='pt-4 pl-6'>
                    <p className='text-sm font-SFmedium text-amber-700'>
                    <p className='text-black text-lg font-SFmedium pt-5'>HomePod mini - White</p>
                    <p className='pt-13 text-md font-sans text-black pb-5'>MRP ₹59900.00 (Incl. of all taxes)</p>
                    </p>
                </div>
            </div>

        
        </div>

  {/* Second one */}

    <div className='pt-20'>
        <p className='text-3xl font-SFsemibold lg:pl-35 md:pl-0 text-orange-600'>Personalisation.<span className='text-gray-600'> Add something that really says Mom.</span></p>
    </div>


    <div className='flex gap-6 px-4 pt-5 md:flex-col sm:flex-col lg:flex-row'>
            
            {/* First box */}
            <div className='hover:shadow-xl/40 rounded-lg hover:scale-105 hover:border-b-gray-400  transform transition-transform duration-300 bg-white w-lvh h-auto lg:ml-30 md:ml-0 sm:ml-0'>
                <div className='px-8 pt-10'>
                    <p className='text-gray-400 text-xs font-sans'>FREE ENGRAVING<p className='text-black text-3xl font-SFsemibold'>Truly just for them<p className='text-lg text-white'><span className='align-super ml-0.5'></span></p></p></p>
                </div>
                <div>
                    <img src={Decor} alt='phone' className='object-cover pb-5 rounded-lg w-5xl h-96'/>
                </div>
            </div>
         
         {/* second box */}

            <div className='border-gray-200 hover:border-b-gray-400 hover:scale-105  transform transition-transform duration-300 border hover:shadow-xl/40 rounded-lg bg-white w-md h-auto'>
                
                <div>
                    <img src={PD} alt='phone' className='rounded-lg pt-13 w-full pl-10 h-[70]'/>
                </div>
                

                   

                <div className='pt-4 pl-6'>
                    <p className='text-sm font-SFmedium text-amber-700'>Free Engraving
                    <p className='text-black text-lg font-SFmedium'>AirPods 4 with Active Noise<a> Cancellation</a></p>
                    <p className='pt-13 text-md font-sans text-black pb-5'>MRP ₹17900.00 (Incl. of all taxes)</p>
                    </p>
                </div>
            </div>

         {/* Third box */}

         <div className='border-gray-200 hover:border-b-gray-400 hover:scale-105  transform transition-transform duration-300 border hover:shadow-xl/40 rounded-lg bg-white w-md h-auto'>
                
                <div>
                    <img src={PDT} alt='phone' className='rounded-lg w-64 pl-4 pt-12 h-[68]'/>
                </div>
                
                <div className='pt-4 pl-6'>
                    <p className='text-sm font-SFmedium text-amber-700'>Free Engraving
                    <p className='text-black text-lg font-SFmedium'>AirPods Pro 2</p>
                    <p className='pt-20 text-md font-sans text-black pb-5'>MRP ₹24900.00 (Incl. of all taxes)</p>
                    </p>
                </div>
            </div>

        {/*Fourth Box */}

        <div className='border-gray-200 border hover:scale-105 hover:border-b-gray-400  transform transition-transform duration-300 hover:shadow-xl/40 rounded-lg bg-white w-md h-auto'>
                
                <div>
                    <img src={Pencil} alt='phone' className='rounded-lg w-64 pl-4 pt-12 h-[68]'/>
                </div>
                
                <div className='pt-4 pl-6'>
                    <p className='text-sm font-SFmedium text-amber-700'>Free Engraving
                    <p className='text-black text-lg font-SFmedium '>Apple Pencil Pro</p>
                    <p className='pt-19 text-md font-sans text-black pb-5'>MRP ₹11900.00 (Incl. of all taxes)</p>
                    </p>
                </div>
            </div>

        
        </div>
        

        

        <div className='pt-10 lg:pl-33 md:pl-0 sm:pl-0'>
            <p className='text-3xl font-SFsemibold text-orange-600 '>The Apple Store difference. <span className='text-gray-600'>Even more reasons to shop with us.</span></p>
        </div>
        
        <div className='flex gap-4 pt-20 lg:pl-33 sm:pl-0 md:pl-0 md:flex-col sm:flex-col lg:flex-row pb-20 '>

        <div className=' transform transition-transform duration-300 hover:scale-105 hover:shadow-xl/30 bg-white rounded-lg w-80 h-60 pt-4 pl-6 pb-10 pr-8 md:ml-10 sm:ml-10'>
            <a href='#'><img src={PicOne} alt='Icon' className='w-18 h-12'/><p className='text-2xl font-SFsemibold'>No Cost EMI. <span className='align-super font-SFlight text-'>§</span> Plus<p> Instant Cashback.<span className='align-super'>§§</span></p></p></a>
        </div>

        <div className=' transform transition-transform duration-300 hover:scale-105 hover:shadow-xl/30 bg-white rounded-lg w-80 h-60 pt-4 pl-6 pb-10 pr-8 md:ml-10 sm:ml-10'>
            <a href='#'><img src={Pictwo} alt='Icon' className='w-18 h-12'/><p className='text-2xl font-SFsemibold text-orange-500'>Enjoy free delivery, or<p >easy pickup<span className='text-black'> from an</span></p><p className='text-black'>Apple Store.</p></p></a>
        </div>

        <div className=' transform transition-transform duration-300 hover:scale-105 hover:shadow-xl/30 bg-white rounded-lg w-80 h-60 pt-4 pl-6 pb-10 pr-8 md:ml-10 sm:ml-10'>
            <a href='#'><img src={Picthree} alt='Icon' className='w-18 h-12'/><p className='text-2xl font-SFsemibold text-orange-500 pt-2'>Customise their Mac <p className='text-black'>with<span className='text-orange-500'>everything from</span></p>graphics <span className='text-black'>to</span> Storage</p></a>
        </div>

        <div className=' transform transition-transform duration-300 hover:scale-105 hover:shadow-xl/30 bg-white rounded-lg w-80 h-60 pt-4 pl-6 pb-10 pr-8 md:ml-10 sm:ml-10'>
            <a href='#'><img src={Picfour} alt='Icon' className='w-15 h-12'/><p className='text-2xl font-SFsemibold'>No Cost EMI. <span className='align-super font-SFlight text-'>§</span> Plus<p> Instant Cashback.<span className='align-super'>§§</span></p></p></a>
        </div>


        </div>

        
    


        
    </section>
  )
}

export default section
