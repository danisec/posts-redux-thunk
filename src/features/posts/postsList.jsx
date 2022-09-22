import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './postsSlice'

const PostsList = () => {
  const dispatch = useDispatch()
  const allPosts = useSelector((state) => state.posts.entities)

  const doFetchPost = () => {
    dispatch(fetchPosts())
  }

  return (
    <>
      <h1 className='flex justify-center text-2xl font-bold text-gray-900'>
        Posts Data
      </h1>

      <button
        className='mt-8 h-10 w-28 rounded-md bg-black text-lg font-semibold text-white hover:bg-gray-800'
        onClick={doFetchPost}
      >
        Get Posts
      </button>

      <div class='relative mt-8 overflow-x-auto rounded-lg'>
        <table class='w-full text-left text-sm text-gray-300'>
          <thead class='bg-gray-200/80 text-xs uppercase text-gray-900'>
            <tr>
              <th scope='col' class='py-3 px-6'>
                Id
              </th>
              <th scope='col' class='py-3 px-6'>
                Title
              </th>
              <th scope='col' class='py-3 px-6'>
                Body
              </th>
            </tr>
          </thead>
          <tbody>
            {allPosts.map((post) => (
              <tr className='border-b bg-white' key={post?.id}>
                <td className='whitespace-nowrap py-4 px-6 font-medium text-gray-900'>
                  {post?.id}
                </td>
                <td className='whitespace-nowrap py-4 px-6 font-medium text-gray-900'>
                  {post?.title}
                </td>
                <td className='whitespace-nowrap py-4 px-6 font-medium text-gray-900'>
                  {post?.body}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default PostsList
