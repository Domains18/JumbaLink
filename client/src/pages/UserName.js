import React from 'react'
import { Link } from 'react-router-dom'
const UserName = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div>
        <div className="title flex flex-col items-center">
          <span className="py-4 text-xl w-2/3 text-center text-gray-500">
            Please enter your username to continue
          </span>
          </div>
          <form className="py-1">
            <div className="profile flex justify-center py-4">
              {/* <img src="" alt="" /> */}
            </div>
            <div className="text-box flex flex-col items-center gap-6">          <h4 className='text-5xl font-bold '>Hello Again</h4>

              <input type="text" placeholder='userName' />
              <button type='submit'>LogIn</button>
            </div>

            <div className="text-center py-">
              <span className='text-blue-500'>No Account? <Link to="/register" className='text-red-500'> Register here</Link> </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UserName
