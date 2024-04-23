import { useState } from "react";
import { useCallback } from "react";
import {useNavigate} from "react-router-dom"

const Home = () => {
    const [value, setValue] = useState()
    const navigate = useNavigate()
    
    const handleJoin = useCallback(()=>{
          navigate(`/room/${value}`)
    },[navigate, value])

    return (
        <div>
            <h1 className=" text-4xl text-center mt-3" > The video Call </h1>

            <input type="text" placeholder=" Please Enter Your Meeting Code"
                value={value}
                onChange={e=> setValue(e.target.value)}     
               className=" text-2xl p-1  input input-bordered w-96 text-center  border-2 border-cyan-600 mx-8"
            />  <br />
            <button onClick={handleJoin} className=" text-2xl p-2 rounded-2xl mx-7 border-2 border-cyan-600 mt-3" > Join Meeting </button>
        </div>
    );
};

export default Home;