import React from 'react'


type Props = { children: React.ReactNode };

const form: React.FC<Props> = (props) => {
  return (
    <div>
        
        {props.children}
    </div>
  )
}

export default form;