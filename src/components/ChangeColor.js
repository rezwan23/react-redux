import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { changeColor } from '../features/color'


function ChangeColor() {

    const [color, setColor] = useState("")

    const dispatch = useDispatch()


    return (
        <div>
            <input onChange={(event)  => {setColor(event.target.value)}} type="text"/>
            <button onClick={() => {dispatch(changeColor(color))}}>Change Color</button>
        </div>
    )
}

export default ChangeColor