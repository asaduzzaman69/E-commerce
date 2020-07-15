import React from 'react'
import './directory.style.scss'
import MenuItem from '../menu-item/menu-item.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySection  } from  '../../redux/Directory/directory.selector.js'

const Directory = ({section}) => {
      return (
             <div className="directory-menu">
                 {

              section.map(({id,...allInfo}) => <MenuItem key={id} {...allInfo} />)
                 }
             </div>          
        )
}

const mapStateToProps = createStructuredSelector ({
  section:selectDirectorySection

})

export default connect(mapStateToProps)(Directory);