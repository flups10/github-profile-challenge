import React, {useState, useEffect} from "react";
import axios from "axios";


function Repositories({search}) {
   
    const [repo, setRepo] = useState([])

    useEffect(()=>{
        axios.get(`https://api.github.com/users/${search}/repos?client_id=b80b67be6bc8a01deaa0&client_secret=2d3c0aa04015dda9b4a3acafe607ddf04ed2d956&sort=created`)
        .then(result => {
            setRepo(result.data)
        })
        .catch(err => console.log(err))
    },[]);
    return ( 
        <div>
            <h1>User Repositories</h1>
            {repo.map((repo) => (
            <div>
                <p className="repos">
                    <a href={repo.html_url}>{repo.name}</a> : {repo.description}    
                </p>
            </div>
            ))}
            
        </div> 
    );
}

export default Repositories;