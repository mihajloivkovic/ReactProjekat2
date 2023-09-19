import "../pages/Teams.css"
function Team({ team }) {
    return (
        <div className="card">
            <h3>{team.strTeam}</h3>
            <div className="card-img-center">
                <img className="card-img" src={team.strTeamBadge} alt="slika3"></img>
            </div>
            <p><b>Year formed:</b> {team.intFormedYear}<br></br>
                <b>Stadium:</b> {team.strStadium}<br></br>
                <b>Capacity:</b> {team.intStadiumCapacity} people<br></br>
            </p>
            <div>{team.strDescriptionEN.substring(0, 300)}....</div>

        </div>

    )
}
export default Team;