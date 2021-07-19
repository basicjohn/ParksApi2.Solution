import { Link } from 'react-router-dom'
import { GiConverseShoe } from 'react-icons/gi'

function Navbar(props) {
  const navbarStyles = {
    display: 'flex',
    flexDirection: 'row',
    background: 'rgba(200,200,200,0.7)',
    alignContent: 'center',
    alignItems: 'center',
    overflow: 'none'
  }
  const linkStyles = {
    minWidth: '160px',
    lineHeight: '90px',
    display: 'flex',
    flexDirection: 'row',
    border: '1px groove gray',
    paddingLeft: '10px',
    paddingRight: '22px',
    fontWeight: '500',
  }
  const linkDivStyles = {
    paddingTop: '25px',
    lineHeight: '50px',
    paddingRight: '10px'
  }

  return (
    <nav style={navbarStyles}>
      <Link style={linkStyles} to='/'>Home</Link>
      <Link style={linkStyles} to='/parks'>Parks</Link>
    </nav>
  )
}

export default Navbar
