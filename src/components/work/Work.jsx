import { useEffect,useState } from "react"

const Work = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        fetch('./netlify/functions/get-cloudinary-images')
        .then(res=>res.json())
        .then(data=>{
            setLoading(false);
            setData(data)
            console.log(data);
        })
        .catch(err=>{
            setLoading(false);
            console.log(err);
        })
    },[])

  return (
    <div className="pt-30 flex flex-col gap-10">
      <h1 className="text-black text-3xl font-bold text-center border-b-2 border-blue-400 pb-3">ჩვენი ნამუშევრები</h1>

      {!loading ? <section className="grid grid-cols-1 md:grid-cols-3 justify-center gap-5">
       {data.map((result,index)=>{
        return <img className="w-full h-full" key={index} src={result} alt={index}/>
       })}
      </section>: <h1 className="text-black text-3xl font-bold text-center">Loading...</h1>}
    </div>
  )
}

export default Work
