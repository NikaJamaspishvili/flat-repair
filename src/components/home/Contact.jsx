const Contact = () => {
  return (
    <div id="contact" className="flex flex-col gap-15 p-5">
      <h1 className="text-6xl text-center">კონტაქტი</h1>

      <div className="flex flex-col gap-5 mx-auto text-center w-full">
        <h1 className="text-3xl border w-full bg-gray-800 text-white p-3">მობილური: </h1>
        <section className="flex flex-col gap-2 text-xl text-amber-500">
        <p>557-69-79-97 <span className="text-gray-600 text-xl">- მამუკა</span></p>
        <p> 511-22-55-32 - <span className="text-gray-600 text-xl">ზაზა</span></p>
        <p>591-67-17-77 - <span className="text-gray-600 text-xl">ერიკა</span></p>
        </section>
      </div>

      <div className="flex flex-col gap-5 w-full">
        <h1 className="text-3xl text-center w-full bg-gray-800 text-white p-3">სოციალური ქსელები: </h1>

        <section className="flex flex-col items-center md:flex-row md:justify-center">
            <div className="flex items-center gap-3 justify-between"><img className="w-[100px]" src="/instagram.png" alt="instagram logo" /><a className="text-blue-600 hover:text-blue-800 underline text-lg" href="https://www.instagram.com/binebis_sruli_remonti">@binebis_sruli_remonti</a><span></span></div>
            <div className="flex items-center gap-3 justify-between"><img className="w-[100px]" src="/facebook.png" alt="facebook logo" /><a className="text-blue-600 hover:text-blue-800 underline text-lg" href="https://www.facebook.com/binebisremonti123">@binebis_sruli_remonti</a><span></span></div>
            <div className="flex items-center gap-3 justify-between"><img className="w-[100px]" src="/tiktok.png" alt="tiktok logo" /><a className="text-blue-600 hover:text-blue-800 underline text-lg" href="https://www.tiktok.com/@binebis_sruli_remonti">@binebis_sruli_remonti</a><span></span></div>
        </section>
      </div>
    </div>
  )
}

export default Contact
