import React, { useState } from 'react'
import Comment from './comment';

const Box = ({val}) => {
    const [isShow , setIsShow ] = useState(null)
    const [isCount , setIsCount] = useState(0)
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
    const [commetOne , setCommentOne] = useState({
        name1:'',
        rating1:'',
    })
    
    const [commetOne2 , setCommentOne2] = useState([])
    const handleChangeComment = (e) => {
        const {name , value} = e.target;
        setCommentOne((data2 ) => ({ ...data2 , [name]:value}));
    }
    
    const handleSubmitComment = (e) => {
        e.preventDefault();
        if (commetOne.name1 !== ''  && commetOne.rating1 !== '') {
            setCommentOne2([...commetOne2, commetOne]);
            setCommentOne({ name1: '', rating1: '' });
        }
    };
  return (
    <div className='bg-black text-3xl'>
        <form onSubmit={handleSubmit}>
            <input type='text' value={isVal.name} name='name' onChange={handleChange} className='bg-red-600 h-full border border-red-800' placeholder='Enter Comment' required/>                
            <input type='number' value={isVal.rating} name='rating' onChange={handleChange} className='bg-red-600 h-full border border-red-800 w-full'  placeholder='Enter Rating' required />
            <button className='' onClick={() => setIsShow(null)}>Add Comment</button>
        </form>
        {
            isVal2.map((ele,i) => (
                <li key={i} style={{paddingLeft:'40px'}}>
                   Comment : {ele.name} and rating is{ele?.rating} <button onClick={() => setIsShow(i)}>{isShow === i ? '+' : 'Reply'}</button>
                   { isShow === i &&
                    <form onSubmit={handleSubmitComment}>
                            <input type='text' value={commetOne.name1} name='name1' onChange={handleChangeComment} className='bg-red-600 h-full border border-red-800' />                
                            <input type='number' value={commetOne.rating1} name='rating1' onChange={handleChangeComment} className='bg-red-600 h-full border border-red-800 w-full' />
                            <button className='' >comment</button>
                        </form>

                   }
                    { commetOne2.map((eleone,j) => (
                        <li key={j} style={{paddingLeft:'40px'}}>
                            {eleone.name1} and {eleone.rating1}
                            <Box val={j} />
                        </li>
                    ))
                    }
                </li>
            ))
        }
    </div>
  )
}

export default Box