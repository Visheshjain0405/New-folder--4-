import React, { useState } from 'react'

function Login() {

  const [state, setState] = useState('Sign Up');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password, name);
  }
  return (
    <div>
      <form action="" className='min-h-[80vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
          <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
          <p>Please{state === 'Sign Up' ? "Create Account" : "Login"} to book Appointment </p>
          {
            state === 'Sign Up' && <div className='w-full'>
              <p>Full Name</p>
              <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
          }

          <div className='w-full'>
            <p>Email Id</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className='w-full'>
            <p>Password</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
          {
            state === "Sign Up"
              ? <p className='mt-4 text-center'>Already have an account? <span className='text-primary underline cursor-pointer' onClick={() => setState('Login')}>Login</span></p>
              : <p className='mt-4 text-center'>Don't have an account? <span className='text-primary underline cursor-pointer' onClick={() => setState('Sign Up')}>Sign Up</span></p>
          }
        </div>
      </form>
    </div>
  )
}

export default Login