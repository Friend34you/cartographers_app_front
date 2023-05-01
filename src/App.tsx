import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {useState} from "react";
import {roomSlice} from "./store/reducers/RoomSlice";


function App() {
    const {name, password} = useAppSelector(state => state.RoomReducer)
    const [value, setValue] = useState('')
    const dispatch = useAppDispatch();

    function onChange(e: any) {
        setValue(e.target.value)
    }

    function changeName() {
        dispatch(roomSlice.actions.changeName(value))
    }

    return (<>
            <h1>{name}</h1>
            <p>{password}</p>
            <input value={value} onChange={onChange}/>
            <button onClick={changeName}>Сменить</button>
        </>
    );
}

export default App;
