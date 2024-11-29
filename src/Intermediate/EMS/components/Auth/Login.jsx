import React, { useState } from 'react'


const Login = ({ handleLogin }) => {



    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }


    return (
        <div className='flex bg-slate-950 h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-lg bg-slate-900 border-emerald-600 shadow-2xl shadow-emerald-500/60  p-20'>
                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }} 
                    className='flex flex-col items-center justify-center'
                >
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        className='outline-none bg-transparent border-2 border-emerald-600 text-slate-950 font-medium text-lg py-2 px-6 rounded-lg placeholder:text-gray-500 focus:border-emerald-500 focus:bg-slate-300' type="email" placeholder='Enter your email'
                    />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                        className='outline-none bg-transparent border-2 border-emerald-600 text-slate-950 font-medium text-lg py-2 px-6 rounded-lg mt-3 placeholder:text-gray-500 focus:border-emerald-500 focus:bg-slate-300' type="password" placeholder='Enter password' />
                    <button className='mt-7 text-white border-none outline-none hover:bg-emerald-500 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white  active:scale-95'>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login