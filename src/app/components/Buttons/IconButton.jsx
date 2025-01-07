import React from 'react'

function IconButton({Icon, onClick}) {
  return (
    <span onClick={onClick} className='flex cursor-pointer items-center'><Icon size={22}/></span>
  )
}

export default IconButton