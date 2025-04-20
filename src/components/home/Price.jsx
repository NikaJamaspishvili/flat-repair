import { useRef } from "react"

const Price = () => {

  return (
    <div id="price" className="flex items-start flex-col md:flex-row gap-10 mt-10 scroll-mt-20 p-5">
        <section className="flex flex-col gap-10 md:w-1/2 w-full text-center md:text-left">
        <h1 className="text-5xl">ფასები</h1>
        <p className="text-md">ჩვენ გთავაზობთ სრულ რემონტს უმაღლესი ხარისხითა და ხელმისაწვდომ ფასად. ჩვენი გუნდი პროფესიონალებისგან შედგება, რომლებიც ყურადღებით ეკიდებიან ყველა დეტალს — დაწყებული დიზაინით, დასრულებული შედეგით. თქვენი კომფორტი და კმაყოფილება ჩვენი მთავარი პრიორიტეტია.</p>
        <button onClick={()=>{window.location.href="/work"}} className="bg-black text-white p-3 w-4/5 max-md:mx-auto md:w-1/2 mt-5 cursor-pointer min-w-[150px]">იხილე ჩვენი ნამუშევრები</button>
      </section>
      <img src="/price.jpg" alt="money pig bank" className="md:w-1/2 w-full" />
    </div>
  )
}

export default Price
