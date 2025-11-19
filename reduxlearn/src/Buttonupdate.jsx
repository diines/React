import React from 'react'
import { useDispatch } from 'react-redux'
import { addMoney, removeMoney } from './store'


export default function Buttonupdate() {
    const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(addMoney(500))}>add 500</button>
      <button onClick={()=>dispatch(removeMoney(500))}>remove 500</button>
    </div>
  )
}
