import logoWhite from '../Assets/logoWhite.svg';
import faceBook from '../Assets/iconFacebook.svg';
import youTube from '../Assets/iconYoutube.svg';
import twitter from '../Assets/iconTwitter.svg';
import pinterest from '../Assets/iconPinterest.svg';
import instagram from '../Assets/iconInstagram.svg';


function Footer(){
    return(
            <div class="section" style={{backgroundColor:`#3E436A`}}>
              <nav class="navbar" style={{backgroundColor:`#3E436A`}}>
                    <ul>
                        <li>
                            <div class="navbar-brand is-mobile">
                                <a class="navbar-item">
                                    <img src={logoWhite} width="112" height="28" />
                                </a>            
                            </div>
                        </li>
                        <li>
                            
                                <div class="columns is-mobile">
                                    <div class="column"><a><img class="svgs" src={faceBook}/></a></div>
                                    <div class="column"><a><img class="svgs" src={youTube}/></a></div>
                                    <div class="column"><a><img class="svgs" src={twitter}/></a></div>
                                    <div class="column"><a><img class="svgs" src={pinterest}/></a></div>
                                    <div class="column"><a><img class="svgs" src={instagram}/></a></div>
                                </div>
                            
                        </li>
                    </ul>  

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                
                    
                    </div>


                    <div class="columns is-mobile">
                        <div class="column">
                            <ul class="content has-text-centered">                            
                                <li><a class="list1">About Us</a></li>
                                <li><a class="list1">Contact</a></li>
                                <li><a class="list1">Blog</a></li>
                            </ul>
                        </div>
                        <div class="column">
                            <ul class="content has-text-centered">
                                <li><a class="list1">Careers</a></li>
                                <li><a class="list1">Support</a></li>
                                <li><a class="list1">Privacy Policy</a></li>
                            </ul>  
                        </div>
                    </div>
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <ul>
                            <li><div class="buttons">
                            <a class="button btn-1 is-rounded">
                                <strong>Request Invite</strong>
                            </a>                        
                            </div>
                            </li>
                            
                            <li><div className='content' style={{color:`#AAAAAA`}}>                            
                                © Easybank. All Rights Reserved
                            </div>
                            </li>
                            </ul>
                        </div>
                    </div>
                   
                </div>
            </nav>
            </div>
            
            

    );
}

export default Footer;