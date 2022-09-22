import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './postsSlice'
import { Toaster } from 'react-hot-toast'
import Loader from '../../components/Loader'

const PostsList = () => {
  const dispatch = useDispatch()
  const allPosts = useSelector((state) => state.posts.post)
  const loading = useSelector((state) => state.posts.loading)

  const doFetchPost = () => {
    dispatch(fetchPosts())
  }

  return (
    <>
      <Toaster />

      <h1 className='flex justify-center text-2xl font-bold text-gray-900'>
        Posts Data
      </h1>

      <button
        className='mt-8 h-10 w-28 rounded-md bg-black text-lg font-semibold text-white hover:bg-gray-800'
        onClick={doFetchPost}
      >
        Get Posts
      </button>

      {loading && <Loader />}

      <div className='mt-8 grid grid-cols-2 gap-4'>
        {allPosts.map((post) => (
          <div
            className='mt-8 rounded-md border border-gray-300 p-4'
            key={post.id}
          >
            <h1 className='text-lg font-semibold text-gray-900'>
              {post.title}
            </h1>
            <p className='mt-2 text-gray-900'>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default PostsList
