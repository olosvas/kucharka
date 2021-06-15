import React from 'react'
import '../App.css'

function NewCard({recipe1}) {


    return (

  <div>
      <div className="card">
        <div className="card_image"><img src={recipe1.image}></img></div>
        <div className="card_content">
          <h2 className="card_title">{recipe1.name}</h2>
          <button className="btn card_btn">Read Recipe</button>
        </div>
    </div>
  </div>

    )
}

export default NewCard
/*<div className = "card">
            <div className="card__cover">
                <div className="card__content">
                    <div className="">{recipe1.name}</div>
                    <div className="card-image">
                        <figure className="image">
                            <img src={recipe1.image} alt="Placeholder image"></img>
                        </figure>
                    </div>
                    <div>{recipe1.author}</div>
                </div>
                
            </div>
        </div>
*/