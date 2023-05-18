import './UserCard.css'

function UserCard(props){

    return(

      <div>
            

  <div>

    <div className="card rounded-4" style={{backgroundColor:"#5746ea", zIndex:"1"}}>

      <div className="carbody">

        <img className='d-flex justify-content-start mt-2' style={{backgroundImage:`url(${props.imagenusuario})`, backgroundrepeat:"no repeat", backgroundSize:"contain", borderRadius: 1000,  width:"150px", height:"150px", border: "3px solid white"}} src="" alt="" />

        <p className='d-flex justify-content-start mt-4 pt-3 py-3' style={{fontSize: "20px", color: "#aaa5ff"}}>Report for</p>
        
        <h1 className='d-flex justify-content-start' style={{fontSize: "60px", marginTop:"-20px", fontFamily: "Rubik", fontWeight:"5", color: "white"}}>{props.usuario}</h1>

      </div>

    </div>

  </div>

  
  
  <br />
  <br />

  <div className=''>

    <div>

    <div className="card rounded-4" style={{backgroundColor:"#1d204b", marginTop:"-114px",}}>

      <div className="carbody pt-5">

        <div  className='pt-3' style={{color:"#787ab5", fontFamily:"Rubik"}}>

        <p id='animacion' className='d-flex justify-content-start'>Daily</p>

        <p id='animacion' className='d-flex justify-content-start'>Weekly</p>

        <p id='animacion' className='d-flex justify-content-start'>Mounthy</p>

        </div>
        
      </div>

    </div>

  </div>

  </div>
        </div>
    )

}

export default UserCard