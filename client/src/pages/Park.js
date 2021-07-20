import Header from './../components/Header'

function Park(props) {
  console.log("PARK PAGE", props)

  if (!props) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="container">
        <Header title={`Park - ${props.parkId}`} />
        <h1>{props.parkName}</h1>
        <h3>{props.parkType} Park</h3>
        <h4><span>Established in {props.established}</span> <span>Square Km: {props.areaInSquareKm}</span></h4>
        <p>{props.parkDescription}</p>
        <img src={props.parkImg} alt={props.parkName}/>
      </div>
    );
  }
}

export default Park;
