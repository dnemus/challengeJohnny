
import logo from '../Assets/logo.svg';

function NavBar(){
    return(

    <div>
        <div>    
            <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item">
                    <img src={logo} width="112" height="28"/>
                    </a>

                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                
                    
                    </div>


                    <div class="tabs is-centered">
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Careers</a></li>
                    </ul>
                    </div>

                    <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                        <a class="button is-primary">
                            <strong>Request Invite</strong>
                        </a>
                        
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
      </div>

    </div>
    );

}

export default NavBar;