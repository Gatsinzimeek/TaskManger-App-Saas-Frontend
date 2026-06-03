import React from 'react'
import { Link } from 'react-router-dom';

type Props = { children: React.ReactNode, 
  link: string,
  name: string
 };

const List: React.FC<Props> = (props) => {
  return (
        <Link to={props.link}><li className='mb-2 flex justify-items-stretch items-center text-gray-500 p-4 hover:bg-blue-400 hover:text-white rounded-2xl m-4 pl-4 pr-3 max-sm:m-auto max-sm:w-fit'> {props.children} <span className='ml-2 max-sm:hidden'>{props.name}</span></li></Link>    
  )
}

export default List