import React from 'react'
import { Link } from 'react-router-dom';
import avatar from '../assets/profile.png';
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { validateUserName } from '../helper/validate';




const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      UserName: "",
      password: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {console.log(values)}
  })
  return (
    <div className="container mx-auto">
          <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center min-h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Please enter your Names to continue
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img src={avatar} className={styles.profileImage} alt="avatar" />
            </div>
            <div className="text-box flex flex-col items-center gap-6">
              <h4 className='text-5xl font-bold '>Hello </h4>
              <input {...formik.getFieldProps('UserName')}type="text" placeholder='Name' className={styles.input} />
              <button type='submit' className={styles.btn}>Register</button>
            </div>
            <div className="text-center py-">
              <span className='text-blue-500'>Already Have An account? <Link to="/register" className='text-red-900'> login here</Link> </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
