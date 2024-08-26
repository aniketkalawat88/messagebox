import React, { useState } from 'react'
// unused component
const Comment = () => {
    const [isVal ,setIsVal] = useState({
        name:'',
        rating:'',
    })
    const [isVal2 , setIsVal2] = useState([]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setIsVal((data) => ({ ...data, [name]: value }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isVal !== ''  && isVal.rating !== '') {
            setIsVal2([...isVal2, isVal]);
            setIsVal({ name: '', rating: '' });
        }
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' value={isVal.name} name='name' onChange={handleChange} className='bg-red-600 h-full border border-red-800' />                
            <input type='number' value={isVal.rating} name='rating' onChange={handleChange} className='bg-red-600 h-full border border-red-800 w-full' />
            <button className=''>Add Reply</button>
        </form>
    </div>
  )
}

export default Comment