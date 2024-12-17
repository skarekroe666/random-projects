import React, { useState, useEffect } from 'react'
import './GithubPfp.css'
import Card from './Card'

const GithubPfp = () => {

    const [user, setUser] = useState("skarekroe666")
    const [userData, setUserData] = useState(null)

    async function fetchGithubUserData() {
        const response = await fetch(`https://api.github.com/users/${user}`)
        const data = await response.json();
        if (data) {
            setUserData(data)
            setUser("")
        }
        console.log(data)
    }
    const handleSubmit = () => {
        fetchGithubUserData()
    }

    useEffect(() => {
        fetchGithubUserData()
    }, [])

    return (
        <div className='container'>
            <div className='input-wrapper'>
                <input type="text"
                    name='search-by-user'
                    placeholder='Search user'
                    value={user}
                    onChange={(e) => setUser(e.target.value)} />
                <button onClick={handleSubmit}>Search</button>
            </div>
            {userData !== null ? <Card user={userData} /> : null}
        </div>
    )
}

export default GithubPfp