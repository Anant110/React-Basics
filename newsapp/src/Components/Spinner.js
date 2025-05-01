import React from 'react'

const Spinner=()=> {
    return (
      // <div className="spinner-border" role="status">
      //   <span className="sr-only"></span>
      // </div>
      <div style={{display: "flex" ,justifyContent: "center" , alignItems: "center", height: "20vh"}}>
    <div className="spinner-border" role="status">
        <span className="sr-only"></span>
    </div>
 </div>
    )
}
export default Spinner
