function Footer() {
  const footerStyle = {
    backgroundColor: 'rgb(76, 195, 255)',
    marginTop: '120px',
    padding: '10px',
    display: 'flex',
    alignItems: 'center'
  }
  return (
    <div style={footerStyle}>
      <h3>Footer</h3>
      <span>&nbsp;-&nbsp;</span>
      <p>&copy; 2021 Tom</p>
    </div>
  )
}

export default Footer
