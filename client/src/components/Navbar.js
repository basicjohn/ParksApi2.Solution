import { GiConverseShoe } from 'react-icons/gi'

function Navbar(props) {
  const navbarStyles = {
    display: 'flex',
    flexDirection: 'row',
    background: 'rgba(200,200,200,0.7)',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: '22px',
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
    <div style={navbarStyles}>
      <a type='submit'
        onClick={event => props.navigateTo(event, 'home')}
        style={linkStyles} href='/'
      >
        <div style={linkDivStyles}><GiConverseShoe style={{ fontSize: '40px'}} /></div>
        <span>Home</span>
      </a>
    </div>
  )
}

export default Navbar
