function Card (prop){
    return (
        <div className="card_template">

            <h1>The random number: <span className="random_num">{prop.randomN}</span></h1>
            <h2> Is consider: {prop.randomN > 50 ? "High" : "low"}</h2>
            
        </div> 
    )

}

export default Card;