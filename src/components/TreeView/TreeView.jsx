import React from 'react'
import './TreeView.css'
import menus from "../TreeView/index"
import MenuList from './MenuList'

const TreeView = ({menus = []}) => {
  return (
    <div className='tree-view-container'>
      <MenuList list={menus} />
    </div>
  )
}

export default TreeView