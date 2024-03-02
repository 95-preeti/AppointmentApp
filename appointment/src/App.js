// import logo from './logo.svg';
// import './App.css';
import {BiArchive ,BiTrash} from "react-icons/bi";
import AddApointment from "./components/AddApointment";
import Search from './components/Search';
import appointmentList from "./data.json";


function App() {
  return (
    <div className="App  container mx-auto mt-3 font-thin ">
      <h1 className="text-4xl font-bold">
        <BiArchive className="inline-block text-red-400 align-top" />
        Appointment App
      </h1>
      <AddApointment/>
      <Search />
      <ul className="divide-y divide-gray-200">{appointmentList.map((appointment) =>(
        <li className="px-3 py-3 flex items-start">
          <button 
          type="button"
          className="p-1.5 mr-1.5 mt-1 rounded hover:bg-yellow-700 bg-red-500" >
          < BiTrash/>
          </button>
          <div className="flex-grow">
            <div className="flex-items-center">              
                <span className="flex-none font-medium text-2xl text-blue-500">{ appointment.petname}</span>
                <span>{appointment.aptdate}</span>
                <span>{appointment.aptTime}</span>
            </div>
            <div>owner:{appointment.ownername}</div>
            <div>Message:{appointment.message}</div>
          </div>
        </li>
      ))}</ul>
    </div>
  );
}

export default App;
