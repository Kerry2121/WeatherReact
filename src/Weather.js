import React, {useState} from 'react';
import axios from 'axios';
function Weather(){
    const [data, setData] = useState({})

    const searchLocation = (event) => {
      
      if (event.key === 'Enter') {
       
           const url = `https://api.openweathermap.org/data/2.5/forecast?q=${event.target.value}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`
        axios.get(url).then((response) => {
           
          console.log(response.data)
          setData(response.data)
       
        })}}

return(
    <div className="main">
        <nav>
           <div>
               <input 
               className="form-control" 
               type="text" 
               placeholder="  Enter a City..." 
          onChange={searchLocation}
          onKeyPress={searchLocation}
               />
           </div>
        </nav>
       
        <div className="middle">

            <div className="inside">
            {data?.list ? <img className="city-icon" src={`https://openweathermap.org/img/wn/${data.list[0]?.weather[0]?.icon}@2x.png`}alt={data.list[6]?.weather[0]?.main}/> : null}
            </div>
       
            <div className="inside">
                <p className='mar'>Today</p> <br/>  
                {data?.city ? <p className='name'>{data.city.name} </p> : null} 
                <br/> 
                {data.list ? <p className='mar'> Temperature: {data.list[0]?.main.temp} °F</p> : null} 
                <br/> 
                {data?.list ? <p className='mar'>{data.list[0]?.weather[0]?.main}</p> : null}
            </div>
        </div>
        <footer>
        {/* <section>
      {Array.from({ length: 4 }, (_, i) => <div className="footer" key={i}>
           <p>{`${dt.toDateString()}`}</p>
               {data.main ? <p className='mar'>{data.main.temp} °F</p> : null}
           </div>)}
 </section> */}
       {/* {data?.list?.map(day => {
           <div className="footer">

            <p>this is map over ddays</p>
           <p className='mar'>{day?.main?.temp} °F</p>
           </div>


       })} */}
        <div className="footer">
           <p>{new Date(data.list[8].dt*1000).toDateString()}</p>
               {data?.list ? <img className="city-icon" src={`https://openweathermap.org/img/wn/${data.list[6]?.weather[0]?.icon}@2x.png`} alt={data.list[6]?.weather[0]?.main} /> : null}
               {data.list ? <p className='mar'>{data.list[6]?.main?.temp} °F</p> : null}
           </div>
           <div className="footer">
           <p>{new Date(data.list[16].dt*1000).toDateString()}</p>
           {data?.list ? <img className="city-icon" src={`https://openweathermap.org/img/wn/${data.list[18]?.weather[0]?.icon}@2x.png`} alt={data.list[18]?.weather[0]?.main} /> : null}
           {data.list ? <p className='mar'>{data.list[18].main?.temp} °F</p> : null}
           </div>
           <div className="footer">
           <p>{new Date(data.list[24].dt*1000).toDateString()}</p>
           {data?.list ? <img className="city-icon" src={`https://openweathermap.org/img/wn/${data.list[25]?.weather[0]?.icon}@2x.png`} alt={data.list[25]?.weather[0]?.main} /> : null}
           {data.list ? <p className='mar'>{data.list[25].main?.temp} °F</p> : null}
           </div>
           <div className="footer">
               <p>{new Date(data.list[32].dt*1000).toDateString()}</p>
              {data?.list ? <img className="city-icon" src={`https://openweathermap.org/img/wn/${data.list[29]?.weather[0]?.icon}@2x.png`} alt={data.list[29]?.weather[0]?.main} /> : null}
               {data.list ? <p className='mar'>{data.list[29].main?.temp} °F</p> : null}
               
           </div>
        </footer>
            
    </div>
    
)}

export default Weather