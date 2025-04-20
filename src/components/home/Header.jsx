import "../style.css";

const Header = () => {
  return (
    <div className="relative bg-[url('/header.jpg')] bg-cover md:p-20 p-10 text-center gap-7 flex flex-col pb-30 mt-10">
      <h1 className="text-black text-5xl font-serif text-outline">სრული რემონტი მაღალი ხარისხით</h1>
      <p className="text-black text-2xl md:w-1/2 w-full mx-auto font-sans p-5 bg-blue-400">სამი გამოცდილი ადამიანი ერთად თქვენი იდეალური ბინისათვის</p>
    </div>
  )
}

export default Header
