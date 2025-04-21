const About = () => {
  return (
    <div id="about" className="scroll-mt-20 flex mt-16 flex-col md:flex-row items-start gap-10 p-5">
      <img src="/collage.jpg" className="md:w-1/2 w-full h-[500px] max-md:order-2" alt="collage (about) photo" />
      <section className="md:w-1/2 w-full text-center md:text-left flex flex-col gap-8 mt-10 max-md:order-1">
      <h2 className="text-5xl">ვინ ვართ ჩვენ?</h2>
      <p className="text-md">
      ჩვენ ვართ სამკაციანი გუნდი, რომელიც სთავაზობს სრულ რემონტს — გემოვნებით, ხარისხიანად და დაბალ ფასად.
      თითოეულ დეტალს ყურადღებით ვუდგებით და ჩვენთვის მთავარია, რომ თქვენ კმაყოფილი დარჩეთ.
      </p>
      </section>
    </div>
  )
}

export default About
