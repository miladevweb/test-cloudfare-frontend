import { Link } from 'react-router-dom'
import { api } from './App'

function User() {
  api
    .get('/users/17', {
      headers: {
        'X-Api-Token': localStorage.getItem('api_token'),
      },
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err.message))

  return (
    <div>
      <Link to={'/'} style={{ fontSize: '4rem' }}>
        Home
      </Link>
    </div>
  )
}

export default User
