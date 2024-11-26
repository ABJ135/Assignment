import React from 'react'
import { useState } from 'react'

function Sign_uup() {
    const [formData, setFormData] = useState({})
    const handleForm = (e) => {
        const obj = {
            ...formData,
            [e.target.name]: e.target.value
        }
        setFormData(obj)
        console.log(obj)
    }

    const getValues = ()=>{
        console.log(formData)
    }
    return (
        <div className='m-4'>
            <>
                <div className='mb-2'>
                    <label>FirstName</label>
                    <input className='border border-black' type="text" name='firstname' value={formData.firstname} onChange={handleForm} />
                </div>

                <div className='mb-2'>
                    <label>LastName</label>
                    <input className='border border-black' type="text" name='lastname' value={formData.lastname} onChange={handleForm} />
                </div>

                <div className='mb-2'>
                    <label> Email</label>
                    <input className='border border-black ' type="text" name = 'email' value={formData.email} onChange={handleForm} />
                </div>
                
                <div className='mb-2'>
                    <label> Age</label>
                    <input className='border border-black ' type="text" name = 'age' value={formData.age} onChange={handleForm} />
                </div>

                <div className='mb-2'>
                    <label>password</label>
                    <input className='border border-black' type="text" name='password' value={formData.password} onChange={handleForm} />
                </div>

                <div className='mb-2'>
                    <label>confirm password</label>
                    <input className='border border-black' type="text" name='confirmpassword' value={formData.confirmpassword} onChange={handleForm} />
                </div>
                <div>
                    <button onClick={getValues} className='border border-black'>
                        sign in
                    </button>
                </div>
            </>
        </div>
    )
}

export default Sign_uup

