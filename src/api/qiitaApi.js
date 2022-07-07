export async function getItems() {
  const res = await fetch('https://qiita.com/api/v2/items')
  const json = await res.json()
  if (!res.ok) throw new Error(json.message)
  return json
}
