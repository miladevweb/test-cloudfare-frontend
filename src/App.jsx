import axios from 'axios'
import { Link } from 'react-router-dom'

export const api = axios.create({
  // baseURL: 'http://127.0.0.1:8787',
  baseURL: 'https://hono-supabase-production.mil4ro.workers.dev',
  withCredentials: true,
})

function App() {
  api
    .put('/users/17/token', null)
    .then((res) => localStorage.setItem('api_token', res.data.token))
    .catch((err) => console.log(err.message))

  return (
    <div>
      <Link to={'/user'} style={{ fontSize: '4rem' }}>
        User
      </Link>
    </div>
  )
}

export default App
