import {BiCalendarPlus} from "react-icons/bi";

function AddApointment() {
  return(
   <div>
    <button className="bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md">
        <div>
            < BiCalendarPlus className="inline-block align-text-top " />
        </div>
    </button>
        < div className="border-r-2 border-b-2 border-1-2 border-light-blue-500 rounded-b-md pl-4 pr-4">
            <div className=" sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                 htmlFor="ownername"
                 className="block text-sm font-medium text-gray-700 sm:mt-px"> 
                Owner name</label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                    < input
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    type="text" 
                    name="ownername"
                    id="ownername"
                    />        
                </div>
                </div>

                <div className=" sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                 htmlFor="petname"
                 className="block text-sm font-medium text-gray-700 sm:mt-px"> 
                pet name</label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    type="text" 
                    name="petname"
                    id="petname"
                         />
                </div>
                </div>
           
               <div className=" sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                 htmlFor="aptdate"
                 className="block text-sm font-medium text-gray-700 sm:mt-px"> 
                Appointment date</label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    type="date" 
                    name="aptdate"
                    id="aptdate"
                    />                          
                </div>
                </div>
                <div className=" sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                 htmlFor="aptTime"
                 className="block text-sm font-medium text-gray-700 sm:mt-px"> 
                Appointment Time
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    type="time" 
                    name="aptTime"
                    id="aptTime"
                    />                          
                </div>
                </div>
                <div className=" sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                 htmlFor="message"
                 className="block text-sm font-medium text-gray-700 sm:mt-px"> 
                Message</label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <textarea
                    row="3"
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    type="date" 
                    name="message"
                    id="message"
                    > 
                    </textarea>                        
                </div>
                </div>
                   <div className="pt-5">
                    <div>
                        <button
                         type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent text-white bg-blue-400 hover:bg-blue-700 rounded-md">
                            {""}
                            submit
                            </button>
                    </div>
                    </div>
                </div>
            </div>
        
    
  );
}

export default AddApointment;
