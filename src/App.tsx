import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {useState} from "react";
import {roomSlice} from "./store/reducers/RoomSlice";
import {roomAPI} from "./services/RoomService";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";


function App() {
 return (
     <BrowserRouter>
        <AppRouter/>
     </BrowserRouter>
 )
}

export default App;

// const {name, password} = useAppSelector(state => state.RoomReducer)
// const [value, setValue] = useState('')
// const dispatch = useAppDispatch();
// const {data: comments, isLoading, error} = roomAPI.useFetchAllRoomsQuery('')
//
// function onChange(e: any) {
//     setValue(e.target.value)
// }
//
// function changeName() {
//     dispatch(roomSlice.actions.changeName(value))
// }
//
// return (<>
//         <h1>{name}</h1>
//         <p>{password}</p>
//         <input value={value} onChange={onChange}/>
//         <button onClick={changeName}>Сменить</button>
//     </>
// );