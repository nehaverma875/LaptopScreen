import React from 'react'


import ImagesLogo from '../assets/imags.png' ;
import {  AiOutlineEyeInvisible } from "react-icons/ai";
 import  DataReport from '../assets/Data-report.png';
 import CompanyLogo from '../assets/logo.png';
 
//abc
//dhugu
const Loginpage = () => {
  return (
    <div  className=' md:overflow-hidden ' >
      
      <section >
      <section className=' w-full max-h-screen    '>

        {/* Login-Image  */}
       <section className=' '  >
      <span className=' ' >
        <img src={ImagesLogo} alt='login-Img' width='300px' height='90px'  className=' mt-14 ml-14'   />
        </span>
      
      </section>

      <div className='flex  flex-row  justify-center  ' >
        
    
{/*  LogIn Form */}
      <section className='min-w-[570px] min-h-[692px]    '>
        <form className="flex flex-col   mt-[5rem]  relative -left-40    " >



        <div>
          <span className='text-4xl text-[#020C6B]  '    >Login</span>
          <p className='text-[1.3rem] font-medium'>Please login to continue</p>
          <br/>

        </div>
{/*  input box*/}
        <div className='min-w-[440px] min-h-[320px]  '>

          <span className=" ">
          <input type='mail' placeholder="Email" 
              className={`w-[446px] h-[68px] border-2 text-2xl rounded-md border-slate-400 flex justify-items-center 
     `}
                        
                        
                      />
                      <br/>

                       <input type='password' placeholder="Password" 
              className={`w-[446px] h-[68px] border-2 text-2xl rounded-md
               border-slate-400 flex justify-items-center md:w-[316px] md:h-[48px]  md:text-[1.2rem] `}
                        />
                        <span className=' cursor-pointer'><AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' className='-mt-10  ml-[23rem] md:ml-[18rem]'/>
                        {/* <AiOutlineEye fontSize={24} fill='#AFB2BF'/>*/}</span> 
          </span>
          {/*  radio button*/}
          <br/>

         <div  className=' flex gap-[4.3rem] mt-2'>
          <span>
          <label  className='w-full flex '>
           
          <input type="checkbox" id="checkvbox" name="checkbox" value=" checkbox"   />
          <p className='text-[1.1rem]'>Keep Me Logged In</p>
           </label>

          
                     </span>
                     <br/>
                     <span className='flex text-[1.1rem] '>
                      Forget Password ?
                     </span>


          </div>
          {/*  It's Login button*/}
          
          <span className=''>
            <button className='text-3xl  min-w-[446px] min-h-[68px] mt-4 bg-[#020C6B] rounded-[8px] font-medium text-white'>
              LOGIN
            </button>
            <br/>
            <br/>
            <p className='text-[18px] text-gray-500 text-center  -ml-28 '>By logining up, you agree to our<span className='text-blue-700'> Terms of Service</span> and <br/><span className='text-blue-700'> Privacy Policy</span></p>
          </span>
          

        </div>

        </form>

       
      </section>


    <section  className='  flex   -mt-18   '>
    <div class="border border-gray-300  -mt-30 mr-10 h-[590px] "></div>


    
    </section>
    {/* data */}


    <div className=' -mt-30 ' >
    <section className=' flex  flex-col items-center  justify-end  w-[700px] h-[700px] '>
  <h2 className='text-4xl md:text-[23px] font-medium  md:-mt-10 '>Data Visualized, Decisions Amplified</h2>
  <br/>

<img src={DataReport} alt='DataReport'  className='w-[729px] h-[580px] '/>
<p className='text-[16px] text-gray-500 flex  justify-end items-end  '>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  cat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

</p>


    </section>





    </div>
    
   
      </div>
      <div className='flex justify-end ' >
      <img src={CompanyLogo} alt='company-logo' className=''/>
    </div>
    
      </section>



         
      </section>
      
                 </div>
  )
}

export default Loginpage
