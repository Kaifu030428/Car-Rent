import React from 'react'

const Title = ({title , subTitle , align}) => {
  return (
    <div className={`${align === "left" && "md:items-start md:text-left"}`}>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </div>
  )
}

export default Title
