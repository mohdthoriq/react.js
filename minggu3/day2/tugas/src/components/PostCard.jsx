import React from 'react'
import useFetch from '../hook/useFetch'

const PostCard = ({ theme }) => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts/1')

  return (
    <div className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${theme.cardBg} ${theme.text}`}>
      <h3 className="text-xl font-bold mb-4">Tugas 2</h3>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div className={`p-3 rounded bg-opacity-50 ${theme.bg}`}>
          <h4 className="font-bold">{data.title}</h4>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  )
}

export default PostCard
