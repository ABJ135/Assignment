import React from 'react'
import { useState } from 'react'
function Sign_up() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleName = (e) => {
        setName ( e.target.value)
    }

    const handleEmail = (e) => {
        setEmail (e.target.value)
    }
    const getValues = () => {
        const obj = {
            name: name,
            email: email
        }
        console.log(obj)
    }


    return (
        <>
            <div className='mb-2'>
                <label>Name</label>
                <input className='border border-blac' type="text" value={name} onChange={handleName} />
            </div>

            <div className='mb-2'>
                <label> Email</label>
                <input className='border border-black ' type="text" value={email} onChange={handleEmail} />
            </div>
            <div>
                <button onClick={getValues}>
                    sign in
                </button>
            </div>
        </>
    )
}

export default Sign_up
