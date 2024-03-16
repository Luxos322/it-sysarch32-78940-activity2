import profilePic from './assets/PEPECHAD.jpg'


function Card(){
return(
    <div className="card">

        <img className="card-image" src={profilePic} alt="profile picture"></img>
        <h2 className="card-title">Luke Embrado</h2>
        <p className="card-text">Crownedstorm17@gmail.com</p>

    </div>

);

}
export default Card