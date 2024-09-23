import React, { useState } from 'react'
import { assets } from '../assets/assets'

function MyProfile() {

  const [userData, seetUserData] = useState({
    name: 'Edward Vincent',
    image: assets.profile_pic,
    email: 'richardjameswap@gmail.com',
    phone: '+1  123 456 7890',
    address: {
      line1: '57th Cross, Richmond',
      line2: 'Circle Church Road London'
    },
    gender: 'Male',
    dob: '2000-01-20'
  })

  const [isEdit, setUsEdit] = useState(false)
  return (
    <div>
      <img src={userData.image} alt="" />

      {
        isEdit ? <input type="text" name="" id="" value={userData.name} onChange={(e) => seetUserData(prev => ({ ...prev, name: e.target.value }))} />
          : <h1>{userData.name}</h1>
      }

      <hr />

    </div>
  )
}

export default MyProfile