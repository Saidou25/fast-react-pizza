import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({ children, disabled, to, type }) {

const base = 'inline-block text-sm  bg-yellow-400 uppercase font-semibold text-stone-800 rounded-full tracking-widest hover:bg-yellow-300 transition-colors-300 duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed '
const styles = {
  primary: base + "px-4 py-3 md:px-6 md:py-4",
  small: base + "px-4  py-2 md:px-5 md:py-2.5 text-xs",
  secondary: 'inline-block text-sm border-2 border-stone-300 uppercase font-semibold text-stone-400 rounded-full tracking-widest hover:bg-stone-300 hover:text-stone-800 transition-colors-300 duration-300 focus:outline-none focus:text-stone-800 focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5'
 
};
   
  if (to) {
    return <Link to={to} className={styles[type]}>{children}</Link>
  }
  return (
    <button disabled={disabled} className={styles[type]} type={type}>
        {children} 
     </button>
  )
}
