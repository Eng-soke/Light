import { useState } from "react"

function Light (){

    const [color, setColor]= useState("")
    const [isOn, setIson] = useState(false)

    //update on button click
    const handleOn = ()=>{
        setColor("yellow")
        setIson(true)
    }


    // update off button

    const handleOff =()=>{
        setColor("white")
        setIson(false)
    }


    return <div className="flex justify-center ">
        <div>
            <div>
                <div style={{backgroundColor: color}} className="w-[300px] h-[300px] rounded-full border-2 mt-10 border-black "></div>
            </div>
            <button style={{backgroundColor: isOn == true ? "green" : "" }} onClick={handleOn}  className="bg-yellow-500 w-[100px] h-[40px]  rounded-2xl  m-5 ml-12 ">On</button>
            <button style={{backgroundColor: isOn == false ? "red" : "" }} onClick={handleOff} className="bg-yellow-500 w-[100px] h-[40px] rounded-2xl  m-5 ">Off</button>
        </div>
    </div>
}
export default Light