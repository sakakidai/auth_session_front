import axios from 'axios'

export async function getItems() {
  const response = await axios.get('https://qiita.com/api/v2/items')
  const data = response.data
  return data
}
