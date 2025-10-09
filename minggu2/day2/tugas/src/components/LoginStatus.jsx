import { useState } from 'react'

function UserGreeting() {
  return <h2 className='text-2xl font-bold text-blue-500 text-center'>Selamat datang kembali!</h2>;
}

function GuestGreeting() {
  return <h3 className='text-2xl font-bold text-green-500 text-center'>Silakan masuk.</h3>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export default function Login() {
    return (
        <>
            <div className='flex flex-col justify-center items-center gap-4'>
                <h1>Tugas 1</h1>
                <Greeting isLoggedIn={true} />
                <Greeting isLoggedIn={false} />
            </div>
        </>
    )
}