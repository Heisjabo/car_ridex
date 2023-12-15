import React from 'react'
import Layout from './Layout'

export const LoginForm = () => {
  return (
    <Layout>
        <div className='flex mx-auto w-[80%] py-4 flex-col gap-4'>
            <h1 className='text-xl text-slate-700 font-[500]'>Login to your account</h1>
            <form className=' bg-white py-2 flex flex-col gap-2'>
                <div>
                    <input 
                    placeholder='Enter your name'
                    className='bg-transparent border border-slate-400 rounded-md'></input>
                </div>
                <div>
                    <input 
                    placeholder='Enter your name'
                    className='bg-transparent border border-slate-400 rounded-md'></input>
                </div>
            </form>
        </div>
    </Layout>
  )
}
