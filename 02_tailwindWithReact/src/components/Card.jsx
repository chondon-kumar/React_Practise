import React from 'react'

// eslint-disable-next-line react/prop-types
function Card({name = 'Jon Due',post = 'Student'}) {  
  return (
    <div> 
        <div>
        <h1 className='text-3xl bg-green-900 rounded-xl'>This is my Card</h1>
        <img src="https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/414991398_1714306689063967_5049220202627792774_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=H_Ay8PH6SdcQ7kNvgFLX3fb&_nc_ht=scontent.fdac27-1.fna&oh=00_AYAq2N_3gvuUqOGI3DuWK2eOyPBNuyB6XIYZHdX9JxIcFw&oe=668AC577" alt="My Photos" />
        <footer className='bg-purple-700 rounded-md text-cyan-50'  > Name: {name} </footer>
        <footer className=' bg-blue-300 rounded-md' > Post: {post} </footer>
        </div>

    </div>
  )
}

export default Card