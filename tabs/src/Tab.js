import React, { createContext, useContext } from 'react'
import './Tab.css'
const TabContext=createContext()
const Tab = ({children,currentTab,onChange}) => {
  return (
    <div className='top'>
      <TabContext.Provider value={{currentTab,onChange}}>
          {children}
      </TabContext.Provider>
    </div>
  )
}

export default Tab

Tab.HeadsContainer=({children})=>{
  return <div className='tab'>{children}</div>
}
Tab.TabItem=({children,label,index})=>{
  const {currentTab,onChange}=useContext(TabContext)
  const handleClick=()=>{
    onChange(index)
  }
  return <div className={`tabItem ${currentTab===index? 'active':null}`}   onClick={handleClick} >{label}</div>
}
Tab.ContentContainer=({children})=>{
  return <div className='contentContainer' >{children}</div>
}
Tab.ContentItem=({children,label,index})=>{
    const {currentTab,onChange}=useContext(TabContext)
   return (currentTab===index)&&<div className='contentItem'>{children}</div>
}
