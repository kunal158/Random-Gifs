import React,{useEffect, useState} from 'react'
import axios from 'axios';
import Spinner from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const Random = () => {

  const [gif, setGif] = useState('');
  const [loading,setLoading]=useState(false);

  async function fetchData() {
    setLoading(true);
    const {data} = await axios.get(url);
    const imgsrc=data.data.images.downsized_large.url;
    setGif(imgsrc);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
    },[])

  return (
    <div  className="flex flex-col items-center bg-green-500 md:w-1/2 w-11/12 rounded-lg border-2 border-gray-600 gap-y-5 mt-[15px] mx-auto py-5">
      <h1>Random</h1>
      
      {loading ? (<Spinner />):(<img src={gif} alt="gif"></img>)}

      <button onClick={()=>fetchData()} className="uppercase bg-[#F0F0F0] w-10/12 rounded-lg font-normal py-2 text-xl" >Generate</button>
    </div>
  )
}

export default Random;