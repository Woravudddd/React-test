function Header(){
    

    return(
    <div>
     <nav className="navbar navbar-inverse navbar-fixed-top navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="/">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfaIWrrm-BsPbtnl7YFyIxK6q8VHKwGZkXHw&usqp=CAU" width="70" height="50" className=" d-inline align-top mx-1" alt=""/>MC CAT-SHOP </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
        <a className="nav-link" href="/">Features</a>
        <a className="nav-link" href="/">Pricing</a>
        <a className="nav-link disabled" href="/"  aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>
    </div>

    )

}

export default Header