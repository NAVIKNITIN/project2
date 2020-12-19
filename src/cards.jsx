import React from 'react';


const Card=({data})=>{
    return (
        <div className="container">

        <div className = "col-md-8" key={data.id}>
            <div className="card text-left">
              <img className="card-img-top" src={data.previewURL} alt={data.tags}/>
              <div className="card-body">
                <h4 className="card-title">Title:{data.user}</h4>
                <p className="card-text">likes:{data.likes}</p>
              </div>
            </div>
        </div>
        </div>
    )

};


export default Card;
