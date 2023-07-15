import bgIntroDesktop from '../Assets/bgIntroDesktop.svg';
import mockup from '../Assets/mockups.png';


function Section1(){
    return (
    <section class="section" style={{backgroundColor:`#FAFAFA`}}>
        <div className="columns">
          <div className='column'>
            <section class="hero">
                <div class="hero-body">
                  <p class="title">
                    Next generation digital banking
                  </p>
                  <p class="subtitle">
                    Take your financial life online. Your Easybank account will be a one-stop-shop 
                    for spending, saving, budgeting, investing, and much more.           
                  </p>
                  <button class="button btn-1 is-rounded">Request Invite</button>  
                </div>
              </section>
            </div>
        <div className='column is-mobile is-two-thirds' style={{ backgroundImage: `url(${bgIntroDesktop})`,backgroundSize: `cover`, backgroundRepeat: `no-repeat`, marginBottom:`-10%`,marginTop:`-20%`,  marginRight:`-12%`,}}>
          
            <img class="image has-ratio" align="right" style={{marginTop:`20%`, marginBottom:`-10%`,}} src={mockup} alt="Phones" />
        
        </div> 
      </div>
    </section>

    );
}

export default Section1;