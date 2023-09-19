import Team from "../components/Team";
import { useState } from "react";
import "./Teams.css"
function Teams({teams}){
    const[searchTerm,setSearchTerm] = useState('');
    return(
        <div> 
            <div className="search">
                <input
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
             <div className="team-list">
            {teams.filter((team) => {
                if (searchTerm === "") {
                    return team;
                } else if (team.strTeam.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return team;
                }
                return null;
            }).map((team, key) => (
                    <div key={team.idTeam}>
                        <Team team={team} />
                    </div>
                ))}
        </div>
        </div>  
    
    )




}
export default Teams;