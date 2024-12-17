import React from 'react'

const Card = ({ user }) => {

  const { avatar_url, followers, following, public_repos, login, created_at } = user

  const createdDate = new Date(created_at)

  return (
    <div className='user'>
      <div>
        <img src={avatar_url} alt="user" className='avatar' />
      </div>
      <div className='name-container'>
        <a href={`https://github.com/${login}`}>{login}</a>
        <p>user joined on {" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString('en-us', {
            month: 'short'
          })} ${createdDate.getFullYear()}`}</p>
      </div>
      <div className='profile-info'>
        <div>
          <p>Public repos: {public_repos}</p>
        </div>
        <div>
          <p>Followers: {followers}</p>
        </div>
        <div>
          <p>Following: {following}</p>
        </div>
      </div>
    </div>
  )
}

export default Card