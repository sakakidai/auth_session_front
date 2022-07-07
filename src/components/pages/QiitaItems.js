import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectQiita, fetchItems } from 'reducks/store/qiitaSlice'

function QiitaItems() {
  const dispatch = useDispatch()
  const { loading, error, items } = useSelector(selectQiita)

  useEffect(() => {
    // fetchItemsを実行
    dispatch(fetchItems())
  }, [dispatch])

  if (loading) return <p>...loading</p>
  if (error) return <p>{error}</p>

  return items.map((item) => (
    <div key={item.id}>
      <h2>
        <a href={item.url}>{item.title}</a>
      </h2>
      <p>
        {item.created_at} by {item.user.id}
      </p>
    </div>
  ))
}

export default QiitaItems
