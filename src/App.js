import  React  from "react"
import {useState, useEffect} from "react"
import Navbar from "./components/Navbar";
import Filter from "./components/Filter"
import Cards from "./components/Cards"
import {apiUrl, filterData} from "./data"
import Spinner from "./components/Spinner"
import {toast} from "react-toastify"


const App = () =>{
  
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  // setLoading(true);
  async function fetchData() {
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data)
    }
    catch(error) {
      toast.error("Something went wrong")
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchData();
  },[])



  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      
      <div className='bg-bgDark2'>
          <div className='bg-bgDark2'>
            <Filter filterData={filterData} /> 
          </div>
          <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">                                                        
          {
            loading ? (<Spinner />) : (<Cards courses={courses}/>)
          }
          </div>
      </div>
             
    </div>
  )
};

export default App;