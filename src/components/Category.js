import React from 'react'
import img1 from './icons/Asset42.png';
import img2 from './icons/Asset 43.png';
import img3 from './icons/Asset 44.png';
import img4 from './icons/Asset 45.png';
import img5 from './icons/Asset 46.png';
import'./Category.css';
import Banner from './Banner';

function Category() {
  return (
    <div>
        <div>
            <h2 className=' mt-4 flex place-content-center font-bold text-2xl'>CATEGORIES</h2>
            <div className='flex place-content-center mt-7'>
                <div><img src={img1} alt="" className="src w-14 h-14 mx-5" />
                <p className='pt-3 pb-2 place-content-center pl-5 font-semibold'>Sample <br/>category</p></div>
                
                <div><img src={img2} alt="" className="src w-14 h-14 mx-5" />
                <p className='pt-3 pb-2 font-semibold pl-5'>Sample<br/>category</p></div>
                
                <div><img src={img3} alt="" className="src w-14 h-14 mx-5" />
                <p className='pt-3 pb-2 font-semibold pl-5'>Sample<br/> category</p></div>
                
                <div><img src={img4} alt="" className="src w-14 h-14 mx-5" />
                <p className='pt-3 pb-2 font-semibold pl-5'>Sample <br/>category</p></div>

                <div><img src={img5} alt="" className="src w-14 h-14 mx-5" />
                <p className='pt-3 pb-2 font-semibold pl-5'>Sample<br/> category</p></div>

                <div><img src={img5} alt="" className="src w-14 h-14 mx-5" />
                <p className='pt-3 pb-2 font-semibold pl-5'>Sample<br/> category</p></div>

                <div><img src={img5} alt="" className="src w-14 h-14 mx-5" />
                <p className='pt-3 pb-2 font-semibold pl-5'>Sample<br/> category</p></div>
          
            </div>
        </div>
        <div className=' mt-5'>
        <div className='card_bg relative pt-5'>
            <div className='flex grid grid-cols-2 gap-4 relative pt-5'>
                <h2 className='text-2xl absolute font-bold top-0 left-44'>BUY 1 GET 1</h2>
                <a className='text-sm absolute align-bottom font-medium top-0 right-44'>View More</a>
            </div>
            {/* card */}
            <div className='flex mt-10 top-0 right-44 left-44 place-content-center mx-12 px-28 '>
            <div className='card1 mr-3 ml-4 pb-4'>
                <img src={img1} alt="" className="src w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold'>54,000ks</p>
            </div>

            <div className='card1 pb-4 mr-3'>
                <img src={img1} alt="" className="src w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold'>54,000ks</p>
            </div>

            <div className='card1 pb-4 mr-3'>
                <img src={img1} alt="" className="src w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold'>54,000ks</p>
            </div>

            <div className='card1 pb-4 mr-3'>
                <img src={img1} alt="" className="src w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold'>54,000ks</p>
            </div>

            <div className='card1 pb-4 mr-3'>
                <img src={img1} alt="" className="src w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold'>54,000ks</p>
            </div>

            <div className='card1 pb-4 mr-3'>
                <img src={img1} alt="" className="src w-25 h-30 rounded-md" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold'>54,000ks</p>
            </div>     
            {/*  */}
             </div>  
        </div>
        {/* Promotion start */}
        <div className='flex grid grid-cols-2 gap-4 mt-5 relative pt-5'>
                <h2 className='text-2xl absolute font-bold top-0 left-44'>PROMOTIONS</h2>
                <a className='text-sm absolute align-bottom text-gray-400 font-medium top-0 right-44'>View More</a>
        </div>
        <div className='flex mt-10 top-0 right-44 left-44 place-content-center mx-12 px-28 '>
            <div className='card1 mr-3 ml-4 pb-4 static'>
                <div className='bg-red-600 text-white absolute  px-2 ...'> 00% Off </div>
                <img src={img1} alt="" className="src w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
                <p className='font-semibold text-sm text-gray-500 line-through'>60,000ks</p>
            </div>

            <div className='card1 pb-4 mr-3 static'>
            <div className='bg-red-600 text-white absolute  px-2 ...'> 00% Off </div>
                <img src={img1} alt="" className="src w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
                <p className='font-semibold text-sm text-gray-500 line-through'>60,000ks</p>
            </div>

            <div className='card1 pb-4 mr-3 static'>
            <div className='bg-red-600 text-white absolute  px-2 ...'> 00% Off </div>
                <img src={img1} alt="" className="src w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
                <p className='font-semibold text-sm text-gray-500 line-through'>60,000ks</p>
            </div>

            <div className='card1 pb-4 mr-3 static'>
            <div className='bg-red-600 text-white absolute  px-2 ...'> 00% Off </div>
                <img src={img1} alt="" className="src w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
                <p className='font-semibold text-sm text-gray-500 line-through'>60,000ks</p>
            </div>

            <div className='card1 pb-4 mr-3 static'>
            <div className='bg-red-600 text-white absolute  px-2 ...'> 00% Off </div>
            
                <img src={img1} alt="" className="src w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
                <p className='font-semibold text-sm text-gray-500 line-through'>60,000ks</p>
            </div>

            <div className='card1 pb-4 mr-3 static'>
            <div className='bg-red-600 text-white absolute  px-2 ...'> 00% Off </div>
           
                <img src={img1} alt="" className="src w-25 h-30 rounded-md" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
                <p className='font-semibold text-sm text-gray-500 line-through'>60,000ks</p>
            </div>
             </div>
             {/* promotion end */}

            <hr/>
            {/* new arrival start */}
            <div className='flex grid grid-cols-2 gap-4 mt-5 relative pt-5'>
                <h2 className='text-2xl absolute font-bold top-0 left-44'>NEW ARRIVALS</h2>
                <a className='text-sm absolute align-bottom text-gray-400 font-medium top-0 right-44'>View More</a>
            </div>
        <div className='flex mt-10 top-0 right-44 left-44 place-content-center mx-12 px-28 '>
            <div className='card1 mr-3 ml-4 pb-4'>
                <img src={img1} alt="" className="src w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
                
            </div>

            <div className='card1 pb-4 mr-3'>
                <img src={img1} alt="" className="src w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
                
            </div>

            <div className='card1 pb-4 mr-3'>
                <img src={img1} alt="" className="src w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
                
            </div>

            <div className='card1 pb-4 mr-3'>
                <img src={img1} alt="" className="src w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
                
            </div>

            <div className='card1 pb-4 mr-3'>
                <img src={img1} alt="" className="src w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
                
            </div>

            <div className='card1 pb-4 mr-3'>
                <img src={img1} alt="" className="src w-25 h-30 rounded-md" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
              
            </div>
             </div>
             {/* new arrival end */}
             {/* slider */}
                <Banner/>
            {/* view by brands start */}
             <div className='flex grid grid-cols-2 gap-4 mt-5 relative pt-5'>
                <h2 className='text-2xl absolute font-bold top-0 left-44'>VIEW BY BRANDS</h2>  
            </div>
            <div className='flex mt-10 top-0 right-44 left-44 place-content-center mx-12 px-27'>
                <img src='https://th.bing.com/th/id/OIP.FIsJMIIB_ucx8Kz3O1C5AgHaEo?pid=ImgDet&rs=1' alt="" className="imgsrc w-[130px] h-[130px]" />
                <img src='https://th.bing.com/th/id/R.39c2924be68c473ccf53d155c2ff3036?rik=m6d6%2fK%2fOIQr3yQ&pid=ImgRaw&r=0' alt="" className=" w-[130px] h-[130px]" />
                <img src='https://th.bing.com/th/id/R.60b6299de8986c199a0b2ccedfd8317f?rik=5srKlHdspI98pg&pid=ImgRaw&r=0' alt="" className=" w-[130px] h-[130px]" />
                <img src='https://th.bing.com/th/id/R.e115b4675c397b75e4ef9feca1ff4edf?rik=234FqNvKrSYUIg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-rCMDyIK5l_k%2fVUY03p7ulSI%2fAAAAAAAACMk%2fQQZGe4DQEY8%2fs1600%2fhuawei-logo-vector.png&ehk=6hSCK721Xj8%2b8La9QB0FYmLnbx%2bXKVtvj5niDJpuYD0%3d&risl=&pid=ImgRaw&r=0' alt="" className=" w-[130px] h-[130px]" />
                <img src='https://th.bing.com/th/id/R.0e47c0e17d7340c1aaede5b37e3d5b9d?rik=DAKJ%2fIBIXcs%2bjA&pid=ImgRaw&r=0' alt="" className=" w-[130px] h-[130px]" />
                <img src='https://th.bing.com/th/id/R.0dd54f853a1bffb0e9979f8146268af3?rik=c8KI%2brJ%2bcLSupw&pid=ImgRaw&r=0' alt="" className=" w-[130px] h-[130px]" />
                <a className='align-middle pl-6 pt-12 text-red-500 font-semibold'>View All</a>
            </div>
            {/* view by brands end */}
            <hr/>
            {/* phone start */}
            <div className='flex grid grid-cols-2 gap-4 mt-5 relative pt-5'>
                <h2 className='text-2xl absolute font-bold top-0 left-44'>PHONE</h2>
                <a className='text-sm absolute align-bottom text-gray-400 font-medium top-0 right-44'>View More</a>
            </div>
        <div className='flex mt-10 top-0 right-44 left-44 place-content-center mx-12 px-28 '>
            <div className='card1 mr-3 ml-4 pb-4'>
                <img src='https://th.bing.com/th/id/R.7622dbd87c4e2cd19ca63915efe25b04?rik=RO0zIF9rMoGcnQ&pid=ImgRaw&r=0' alt="" className="imgsrc" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
                
            </div>

            <div className='card1 pb-4 mr-3'>
                <img src='https://th.bing.com/th/id/R.d82e50d9be3b29f555cf9b7cd37cc1f0?rik=7AUMTP5XZ4D5fg&pid=ImgRaw&r=0' alt="" className="imgsrc w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
                
            </div>

            <div className='card1 pb-4 mr-3'>
                <img src='https://th.bing.com/th/id/R.e44fb7562a383c44c5122b67846db737?rik=3M2o1oO8SsIXBQ&pid=ImgRaw&r=0' alt="" className="imgsrc w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
                
            </div>

            <div className='card1 pb-4 mr-3'>
                <img src='https://th.bing.com/th/id/R.a8d23ffb6d93c5951183688a4d525bef?rik=5DIBxltCHnV7%2fg&pid=ImgRaw&r=0' alt="" className="imgsrc w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
                
            </div>

            <div className='card1 pb-4 mr-3'>
                <img src='https://th.bing.com/th/id/OIP.QzKOPXfljqI7hV9RNtUGkQHaHa?pid=ImgDet&w=500&h=500&rs=1' alt="" className="imgsrc w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
                
            </div>

            <div className='card1 pb-4 mr-3'>
                <img src='https://th.bing.com/th/id/R.8fababb4b2fe2271f74fdc6270cddbbd?rik=9gj5MRTPcZMwDA&riu=http%3a%2f%2fwww.wired.com%2fwp-content%2fuploads%2f2016%2f02%2fGalaxyS7edge-lead.jpg&ehk=DiSCDoJiKtVGCFF14OFWZUr17OYnuxKh63L8CCd%2fJUE%3d&risl=&pid=ImgRaw&r=0' alt="" className="imgsrc w-25 h-30 rounded-md" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
              
            </div>
             </div>
             {/* phone ened */}
             <hr/>
             {/* tablet start */}
             <div className='flex grid grid-cols-2 gap-4 mt-5 relative pt-5'>
                <h2 className='text-2xl absolute font-bold top-0 left-44'>TABLET</h2>
                <a className='text-sm absolute align-bottom text-gray-400 font-medium top-0 right-44'>View More</a>
            </div>
        <div className='flex mt-10 top-0 right-44 left-44 place-content-center mx-12 px-28 '>
            <div className='card1 mr-3 ml-4 pb-4'>
                <img src='https://th.bing.com/th/id/R.2450ce50437cf86c566a495953493646?rik=ey04%2b8NbLLcpsg&pid=ImgRaw&r=0' alt="" className="imgsrc w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
                
            </div>

            <div className='card1 pb-4 mr-3'>
                <img src='https://www.ourshopee.com/ourshopee-img/ourshopee_products/422256267Web-bsnla50-1.jpg' alt="" className="imgsrc w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
                
            </div>

            <div className='card1 pb-4 mr-3'>
                <img src='https://gloimg.gbtcdn.com/soa/gb/ebay/2017/201701/20170118/source-img/1484679287469-P-259493.jpg' alt="" className="imgsrc w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
                
            </div>

            <div className='card1 pb-4 mr-3'>
                <img src='https://www.dabtechelectronics.co.za/wp-content/uploads/2020/09/rct-tablet.png' alt="" className="imgsrc w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
                
            </div>

            <div className='card1 pb-4 mr-3'>
                <img src='https://www.thanksbuyer.com/image/cache/data/2012005/18346/135411413218346-11-750x750.jpg' alt="" className="imgsrc w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
                
            </div>

            <div className='card1 pb-4 mr-3'>
                <img src='https://th.bing.com/th/id/R.f36450000340506b9d47bbe1e75bc420?rik=VFFuzqkKudh9lw&riu=http%3a%2f%2fwww.ankaka.com%2fimages%2fnew-electronics%2fD30311%2fD30311_3.jpg&ehk=QuD4FGP%2flaj7fwov%2biC7NeFG6qm6rMWn6Fih6N1dmLE%3d&risl=&pid=ImgRaw&r=0' alt="" className="imgsrc w-25 h-30 rounded-md" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
              
            </div>
             </div>
             {/* tablet end */}
             <hr/>
             {/* laptop start */}
             <div className='flex grid grid-cols-2 gap-4 mt-5 relative pt-5'>
                <h2 className='text-2xl absolute font-bold top-0 left-44'>LAPTOP</h2>
                <a className='text-sm absolute align-bottom text-gray-400 font-medium top-0 right-44'>View More</a>
            </div>
        <div className='flex mt-10 top-0 right-44 left-44 place-content-center mx-12 px-28 '>
            <div className='card1 mr-3 ml-4 pb-4'>
                <img src='https://th.bing.com/th/id/R.d50d047f742488f73ed94c7f52c8fb96?rik=T%2fNzS3e3v9Susw&pid=ImgRaw&r=0' alt="" className="imgsrc w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
                
            </div>

            <div className='card1 pb-4 mr-3'>
                <img src='https://th.bing.com/th/id/R.0f2b0445dccd95fcd43aa429385a084e?rik=3mtfM5b%2f0bnXdQ&pid=ImgRaw&r=0' alt="" className="imgsrc w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
                
            </div>

            <div className='card1 pb-4 mr-3'>
                <img src='https://th.bing.com/th/id/OIP.XxB5H8OcDC37yXoBQ4HHNgHaFL?pid=ImgDet&rs=1' alt="" className="imgsrc w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
                
            </div>

            <div className='card1 pb-4 mr-3'>
                <img src='https://th.bing.com/th/id/OIP.wVgsg11WAR2zocFfnc5spgHaGM?pid=ImgDet&rs=1' alt="" className="imgsrc w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
                
            </div>

            <div className='card1 pb-4 mr-3'>
                <img src='https://th.bing.com/th/id/OIP.AKILuIgjP325eUckX27GsQHaHa?pid=ImgDet&w=736&h=736&rs=1' alt="" className="imgsrc w-25 h-30 rounded" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
                
            </div>

            <div className='card1 pb-4 mr-3'>
                <img src='https://th.bing.com/th/id/OIP.JAO0ldQRaAHL9JJtOLec2gHaHa?pid=ImgDet&w=200&h=200&rs=1' alt="" className="imgsrc w-25 h-30 rounded-md" />
                <p className='pt-3 pb-2 font-semibold'>Sample product with long name</p>
                <p className='font-semibold text-red-500'>54,000ks</p>
              
            </div>
             </div>
             {/* laptop end */}
        </div>
    </div>
  )
}

export default Category