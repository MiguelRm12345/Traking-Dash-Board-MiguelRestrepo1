import './TimeCard.css'

function TimeCard (props){

    return(
        <div>
            
         <div >

          <div className="card color rounded-4 " style={{backgroundColor: `${props.fondo}`, backgroundImage:`url(${props.imagen})`, border:"0px"}}>
            
          </div>
          
         </div>  

        

        <div className=''>

          <div>

           <div className="card rounded-4" style={{backgroundColor:"#1D204B", marginTop:"-25px"}}>

              <div className="carbody" style={{fontFamily:"Rubik"}}>

                <div  style={{color:"#787AB5", fontSize:"17px",}}>

                  <div className="row">

                  <div className="col">

                    <p className='d-flex justify-content-start' style={{color:"white",fontSize:"20px"}}>{props.actividad}</p>

                    <p className='d-flex justify-content-start' style={{color:"white", fontSize:"60px", paddingTop: "5px"}}>{props.horas}</p>

                    <p className='d-flex justify-content-start' style={{marginTop:"-20px"}}>{props.lw}</p></div>

                  <div className="col"><p style={{fontSize:"30px", color:"white", marginTop:"-20px"}}>...</p></div>

                  </div>
                  
                  <br />
                      
                </div>
                
              </div>

            </div>

          </div>

        </div>

        </div>
    )
}

export default TimeCard 