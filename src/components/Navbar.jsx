import { useState } from "react"
import "./style.css";


const Navbar = () => {
    const [show,setShow] = useState(false);

    function navigate(type){
      if(type === 'about'){
        window.location.href = "/#about";
      }else if(type === 'price'){
        window.location.href = "/#price";
      }else if(type === 'contact'){
        window.location.href = "/#contact";
      }else if(type === 'work'){
        window.location.href = "/work";
      }
      setShow(false);
    }

  return (
    <div className="flex z-30 flex-col items-end left-0 fixed w-screen bg-white">
      <img className={`md:hidden w-[50px] mr-3 mt-3 cursor-pointer z-10 transition-all duration-150 ${show && "rotate-90"}`} onClick={()=>setShow(!show)} src="/hamburger.png" alt="hamburger menu" />
        {show && <section className={`flex bg-white fixed w-full h-full  items-center justify-center gap-12 [&>p]:text-center [&>p]:cursor-pointer [&>p]:text-blue-500 flex-col md:flex-row text-4xl`}>
        <p onClick={()=>navigate('about')}>ჩვენს შესახებ</p>
        <p onClick={()=>navigate('price')}>ფასები</p>
        <p onClick={()=>navigate('contact')}>კონტაქტი</p>
        <p onClick={()=>navigate('work')}>ჩვენი ნამუშევრები</p>
        </section>}

        <section className={`text-xl text-gray-200 hidden md:flex bg-black w-full gap-15 justify-center [&>p]:text-center p-5 [&>p]:cursor-pointer HoverEffect`}>
        <p onClick={()=>navigate('about')}>ჩვენს შესახებ</p>
        <p onClick={()=>navigate('price')}>ფასები</p>
        <p onClick={()=>navigate('contact')}>კონტაქტი</p>
        <p onClick={()=>navigate('work')}>ჩვენი ნამუშევრები</p>
        </section>
    </div>
  )
}

export default Navbar
