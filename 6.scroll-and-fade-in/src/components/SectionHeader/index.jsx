import React from 'react'
import './style.scss';

export default function SectionHeader({title}) {
  return (
    <h6 className='section-header'>
      {title}
    </h6>
  )
}
