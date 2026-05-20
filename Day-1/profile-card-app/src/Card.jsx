import './Card.css'
function Card ({name, role, bio, img}){
    return(
        <div className="card">
            <img src={img} alt="profile-pic" className="profile-pic" />
            <h2 className="name">{name}</h2>
            <p className="job-title">{role}</p>
            <p className="bio">{bio}</p>
        </div>
    )
}

export default Card;