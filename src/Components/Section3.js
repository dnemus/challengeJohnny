import imgCurrency from '../Assets/imageCurrency.jpg';
import imgRestaurant from '../Assets/imageRestaurant.jpg';
import imgPlane from '../Assets/imagePlane.jpg';
import imgConfetti from '../Assets/imageConfetti.jpg';
import ContColumn2 from './FunctionalComp/Content3';


function Section3(){
    return (
        <section class="section" style={{backgroundColor:`#FAFAFA`}}>
            <section class="hero">
                <div class="hero-body">
                    <p class="title">
                        Latest articles
                    </p>
                </div>
            </section>
                <div class="columns is-mobile">
                <ContColumn2 imgs={imgCurrency} alts="Currency Image" authors="By Claire Robinson" titles="Receive money in any currency with no fees" contents="The world is getting smaller and we’re becoming more mobile. So why should you be 
                    forced to only receive money in a single …" />
                <ContColumn2 imgs={imgRestaurant} alts="Restaurant Image" authors="By Wilson Hutton" titles="Treat yourself without worrying about money" contents="Our simple budgeting feature allows you to separate out your spending and set 
                    realistic limits each month. That means you …" />
                <ContColumn2 imgs={imgPlane} alts="Plane Image" authors="By Wilson Hutton" titles="Take your Easybank card wherever you go" contents="We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                    while you’re abroad. We’ll even show you …" />
                <ContColumn2 imgs={imgConfetti} alts="Confetti Image" authors="By Claire Robinson" titles="Our invite-only Beta accounts are now live!" contents="After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                    It’s easy to request an invite through the site ..." />
                </div>
            </section>
    );
}

export default Section3;