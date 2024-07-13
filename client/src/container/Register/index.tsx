import Image from 'next/image'
import React from 'react'
import { RegisterContainer } from './styles'
import useRegister from './hooks'


const Register = () => {

  const { form, handleChange } = useRegister();


  return (
    <RegisterContainer>
      <div className="register_content">
        <form action="" className='formContainer'>
          <input
            placeholder='First Name'
            name='firstName'
            type='text'
            required
            className='input'
            onChange={handleChange}
          />
          <input
            placeholder='Last Name'
            name='lastName'
            type='text'
            required
            className='input'
            onChange={handleChange}
          />
          <input
            placeholder='Email'
            name='email'
            type='email'
            required
            className='input'
            onChange={handleChange}
          />
          <input
            placeholder='Password'
            name='password'
            type='password'
            required
            className='input'
            onChange={handleChange}
          />
          <input
            placeholder='Confirm Password'
            name='confirmPassword'
            type='password'
            required
            className='input'
            onChange={handleChange}
          />
          <input
            id='image'
            accept='image/*'
            type='file'
            style={{ display: "none" }}
            required
            name='profileImage'
          />
          <label htmlFor='image' className='imageLabel'>
            <Image src='/assets/addImage.png' alt='add profile photo' width={25} height={25} />
          </label>
          <button type='submit' className="submitBtn">REGISTER</button>
        </form>
        <a href="/login" className="anchor">Already have an account? click here</a>
      </div>
    </RegisterContainer>
  )
}

export default Register