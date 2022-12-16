import './User.css'
function User({user}) {



    // const user = {
    //     "login": "flups10",
    //     "id": 57059769,
    //     "node_id": "MDQ6VXNlcjU3MDU5NzY5",
    //     "avatar_url": "https://avatars.githubusercontent.com/u/57059769?v=4",
    //     "gravatar_id": "",
    //     "url": "https://api.github.com/users/flups10",
    //     "html_url": "https://github.com/flups10",
    //     "followers_url": "https://api.github.com/users/flups10/followers",
    //     "following_url": "https://api.github.com/users/flups10/following{/other_user}",
    //     "gists_url": "https://api.github.com/users/flups10/gists{/gist_id}",
    //     "starred_url": "https://api.github.com/users/flups10/starred{/owner}{/repo}",
    //     "subscriptions_url": "https://api.github.com/users/flups10/subscriptions",
    //     "organizations_url": "https://api.github.com/users/flups10/orgs",
    //     "repos_url": "https://api.github.com/users/flups10/repos",
    //     "events_url": "https://api.github.com/users/flups10/events{/privacy}",
    //     "received_events_url": "https://api.github.com/users/flups10/received_events",
    //     "type": "User",
    //     "site_admin": false,
    //     "name": "Joris",
    //     "company": null,
    //     "blog": "",
    //     "location": "Rotterdam",
    //     "email": null,
    //     "hireable": null,
    //     "bio": null,
    //     "twitter_username": null,
    //     "public_repos": 23,
    //     "public_gists": 0,
    //     "followers": 10,
    //     "following": 10,
    //     "created_at": "2019-10-27T08:57:52Z",
    //     "updated_at": "2022-11-14T08:44:53Z"
    //   }


    return ( 
        <div className='user'>
            <div className='photo'>
                <img src={user.avatar_url} alt="profile" />
            </div>
            <div className='user-details'>
                <p><strong>Fullname:</strong> {user.name}</p>            
                <p><strong>Username:</strong> {user.login}</p>
                <p><strong>Location:</strong> {user.location}</p>
                <p><strong>Email:</strong> {user.email}</p>
            </div>
        </div>
    );
}

export default User;