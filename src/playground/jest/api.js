import axios from 'axios'

export const fetchUsers = async () => {
  return (await axios.get('http://localhost:5000/users')).data
}
