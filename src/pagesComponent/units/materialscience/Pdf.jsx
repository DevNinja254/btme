import React from 'react'
import { BiDownload as Download } from 'react-icons/bi'
import ironsteel from "/src/assets/pdf/mat/iron.pdf"
import heat from "/src/assets/pdf/mat/heattreatment.pdf"
import carbon from "/src/assets/pdf/mat/ironcarbon.pdf"
const Pdf = () => {
  return (
    <div className="m-3" id='pdf'>
        <h2>Notes</h2>
        <div>
            <div className='border-b-2 border-gray-500 border-opacity-20 pb-2 my-3 shadow-sm shadow-gray-400'>
                <div>
                    <img src={require("/src/assets/images/matscie2/ironsteel.png")} className='w-full' alt="" />
                </div>
                <div className='flex justify-between items-center px-3 py-2'>
                    <p className='text-lg capitalize font-bold'>iron and steel</p>
                    <a href={ironsteel} download="iron and steel"><Download className='text-sky-400' size={24}/></a>
                </div>
            </div>
            <div className='border-b-2 border-gray-500 border-opacity-20 pb-2 my-3 shadow-sm shadow-gray-400'>
                <div>
                    <img className='w-full'  src={require("/src/assets/images/matscie2/heattreatment.png")} alt="" />
                </div>
                <div className='flex justify-between items-center px-3 py-2'>
                    <p className='text-lg capitalize font-bold'>Heat treatment processes</p>
                    <a href={heat} download="Heat treatment processes" ><Download size={24} className='text-sky-400'/></a>
                </div>
            </div>
            <div className='border-b-2 border-gray-500 border-opacity-20 pb-2 my-3 shadow-sm shadow-gray-400'>
                <div>
                    <img className='w-full' src={require("/src/assets/images/matscie2/ironandcarbon.png")} alt="" />
                </div>
                <div className='flex justify-between items-center px-3 py-2'>
                    <p className='text-lg capitalize font-bold'>Iron Carbon Equilibrium Diagram</p>
                    <a href={carbon} download="Iron Carbon Equilibrium Diagram"><Download size={24} className='text-sky-400'/></a>
                </div>
                <div>
                    <a href="https://drive.google.com/file/d/1E-5IMdHa-VLrdRuJJy_M8NhLge_uKeKu/view?usp=sharing" target='_blank'>
                        <img src={require("../../../assets/images/units/alloysteel.png")}  className='unit' alt="" />
                        <p className='bg-gray-600 text-gray-100 text-center font-bold py-2 capitalize'>Alloy Steels Higgin materials</p>      
                    </a>
                    <a href="https://drive.google.com/file/d/1sZT2rbAdq6k7pLk8L26Xv-rzx0Uxfaoe/view?usp=sharing" target='_blank'>
                        <img src={require("../../../assets/images/units/heattreat.png")}  className='unit' alt="" />
                        <p className='bg-gray-600 text-gray-100 text-center font-bold py-2 capitalize'>Heat treatment process B</p>      
                    </a>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default Pdf
