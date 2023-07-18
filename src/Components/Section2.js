import iconOnline from '../Assets/iconOnline.svg';
import iconBudgeting from '../Assets/iconBudgeting.svg';
import iconOnboarding from '../Assets/iconOnboarding.svg';
import iconApi from '../Assets/iconApi.svg';
import ContColumn from './FunctionalComp/Content2';


function Section2(){
    return (
        <section class="section" style={{backgroundColor:`#F3F4F6`}}>
          <div className="columns is-multiline">
          <div className='column' >
          <section class="hero is">
            <div class="hero-body">
              <p class="title">
                Why choose easy bank?
              </p>
              <p class="subtitle">
                We leverage Open Banking to turn your bank account into your financial hub.<br />
                Control your finances like never before.          
              </p>
            </div>
          </section>
          </div></div>
          <div class="columns is-multiline">
            <ContColumn imgs={iconOnline} alts="Online Icon" titles="Online Banking" contents="Our modern web and mobile applications allow you to keep track of your finances 
                    wherever you are in the world." />
            <ContColumn imgs={iconBudgeting} alts="Budgeting Icon" titles="Simple Budgeting" contents="See exactly where your money goes each month. Receive notifications when you’re 
                    close to hitting your limits." />
            <ContColumn imgs={iconOnboarding} alts="Onboarding Icon" titles="Fast Onboarding" contents="We don’t do branches. Open your account in minutes online and start taking control 
                    of your finances right away." />
            <ContColumn imgs={iconApi} alts="API Icon" titles="Open API" contents="Manage your savings, investments, pension, and much more from one account. Tracking 
                    your money has never been easier." />
            
          </div>
        </section>
    );

}

export  default Section2;