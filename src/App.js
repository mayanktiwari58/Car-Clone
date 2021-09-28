
import './index.css';

function App() {
  return (
    <div >

<header>
      <nav class="navbar">
        <div class="navbar__brand">
          <img src="https://stimg.cardekho.com/pwa/img/CarDekho-Logo.svg" alt="logo" class="navbar__logo" />
        </div>
        <section class="email__subcribe__container">
            <div>
              <div class="email__subcribe__input__field">
                <div>
                  <input type="email" placeholder="Search cars and brands eg.." class="email__input"/>
                </div>
                
              </div>
            </div>
          </section>
        <div className="navbar__nav__items">

        <button className="button__primary1">Login / Register</button>
      
        

        </div>
      </nav>
    </header>

    <div className="newcar">
    <button className="button__primary">NEW CAR</button>
    <button className="button__primary">USED CAR</button>
    <button className="button__primary">SELL CAR</button>
    <button className="button__primary">COMPARE CARS</button>
    <button className="button__primary">NEW & REVIEWS</button>
    <button className="button__primary">MORE</button>
    </div>
  
   

    <main class="container">
      
      <section class="hero__container">
        <div class="hero__image__container">
          <img src="https://stimg.cardekho.com/images/uploadimages/1631871498144/1.gif" alt="hero image" class="hero__image" />
        </div>
        <div class="hero__description">
          <h4 class="hero__text">
          It’s an experience unlike before <br/>
         - Man. Machine. And AI.<br/>
          - MG Astor. The AI Affair.
          </h4>
        <img src="https://stimg.cardekho.com/images/uploadimages/1631678830268/logo.png"/>
  
          <button class="button__primary">Know More</button>
        </div>
      </section>

      <section class="video__footage__container">
      
      <iframe width="853" height="480" src="https://www.youtube.com/embed/3N3qYZCMVYM"
       title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>

      </section>

      
      <section className="explore__menu__container">
        <h1 className="explore__menu__text">Recommended Cars For You</h1>
        <div className="explore__menu__gradient__bg"></div>
        <div className="explore__menu__lists">

          <div class="food__card">
            <div className="food__card__image__container">
              <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/8378/1614747593719/front-left-side-47.jpg?tr=w-456" alt="burger" class="food__image" />
            </div>
            <div class="food__card__description">
              <h3 class="food__title">Maruti Swift</h3>
              <p>
              Rs.5.85 - 8.67 Lakh*Get On Road Price
              *Ex-showroom Price in Varanasi

              <button class="button__primary">View latest offer</button>
              </p>
            </div>
          </div>

          <div class="food__card" id="pizza__card">
            <div class="food__card__image__container">
              <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/i20/6986/1604567349336/front-left-side-47.jpg?tr=w-456" alt="pizza" class="food__image" />
            </div>
            <div class="food__card__description">
              <h3 class="food__title">Hyundai i20</h3>
              <p>
              Rs.5.84 - 9.59 Lakh*Get On Road Price
              *Ex-showroom Price in Varanasi
              <button class="button__primary">View latest offer</button> 
              </p>
            </div>
          </div>
          
          <div class="food__card" id="pizza__card">
            <div class="food__card__image__container">
              <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Altroz/7247/1578642800962/front-left-side-47.jpg?tr=w-456" alt="pizza" class="food__image" />
            </div>
            <div class="food__card__description">
              <h3 class="food__title">Tata Altroz</h3>
              <p>
              Rs.5.84 - 9.59 Lakh*Get On Road Price
              *Ex-showroom Price in Varanasi
              <button class="button__primary">View latest offer</button> 
              </p>
            </div>
          </div>
          
          <div className="food__card">
            <div class="food__card__image__container">
              <img
                src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Baleno/6778/1615985070703/front-left-side-47.jpg?tr=w-456"
                alt="ice cream"
                className="food__image"
              />
            </div>
            <div className="food__card__description">
              <h3 className="food__title">Maruti Baleno</h3>
              <p>
              Rs.5.99 - 9.45 Lakh*Get On Road Price
              *Ex-showroom Price in Varanasi
              <button className="button__primary">View latest offer</button> 
              </p>
            </div>
          </div>
        </div>
       
      </section>

         
      <section className="explore__menu__container">
      <h1 className="explore__menu__text">The most searched cars</h1>
      <h3 className="explore__menu__text">Hatchback    Sedan     SUV     MUV    Luxury</h3>
        <div className="explore__menu__gradient__bg"></div>
        <div className="explore__menu__lists">

          <div className="food__card">
            <div class="food__card__image__container">
              <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/8378/1614747593719/front-left-side-47.jpg?tr=w-456" alt="burger" class="food__image" />
            </div>
            <div className="food__card__description">
              <h3 className="food__title">Maruti Swift</h3>
              <p>
              Rs.5.85 - 8.67 Lakh*Get On Road Price
              *Ex-showroom Price in Varanasi

              <button className="button__primary">View latest offer</button>
              </p>
            </div>
          </div>
          
          <div className="food__card" id="pizza__card">
            <div class="food__card__image__container">
              <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/i20/6986/1604567349336/front-left-side-47.jpg?tr=w-456" alt="pizza" class="food__image" />
            </div>
            <div class="food__card__description">
              <h3 className="food__title">Hyundai i20</h3>
              <p>
              Rs.5.84 - 9.59 Lakh*Get On Road Price
              *Ex-showroom Price in Varanasi
              <button class="button__primary">View latest offer</button> 
              </p>
            </div>
          </div>

          <div className="food__card" id="pizza__card">
            <div className="food__card__image__container">
              <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/i20/6986/1604567349336/front-left-side-47.jpg?tr=w-456" alt="pizza" class="food__image" />
            </div>
            <div class="food__card__description">
              <h3 class="food__title">Hyundai i20</h3>
              <p>
              Rs.5.84 - 9.59 Lakh*Get On Road Price
              *Ex-showroom Price in Varanasi
              <button class="button__primary">View latest offer</button> 
              </p>
            </div>
          </div>
          
          <div class="food__card">
            <div class="food__card__image__container">
              <img
                src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Baleno/6778/1615985070703/front-left-side-47.jpg?tr=w-456"
                alt="ice cream"
                class="food__image"
              />
            </div>
            <div class="food__card__description">
              <h3 class="food__title">Maruti Baleno</h3>
              <p>
              Rs.5.99 - 9.45 Lakh*Get On Road Price
              *Ex-showroom Price in Varanasi
              <button class="button__primary">View latest offer</button> 
              </p>
              
            </div>
          </div>
        </div>
        </section>


        <section class="explore__menu__container">
      <h1 class="explore__menu__text">Upcoming Car</h1>
     
        <div class="explore__menu__gradient__bg"></div>
        <div class="explore__menu__lists">

          <div class="food__card">
            <div class="food__card__image__container">
              <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Astor/7516/1631781165905/front-left-side-47.jpg?tr=w-456" alt="burger" class="food__image" />
            </div>
            <div class="food__card__description">
              <h3 class="food__title">MG Astor</h3>
              <p>
              Rs.10.85 - 8.67 Lakh*Get On Road Price
              *Ex-showroom Price in Varanasi

              <button class="button__primary">View latest offer</button>
              </p>
            </div>
          </div>
          
          <div class="food__card" id="pizza__card">
            <div class="food__card__image__container">
              <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Punch/7513/1629705164513/front-left-side-47.jpg?tr=w-456" alt="pizza" class="food__image" />
            </div>
            <div class="food__card__description">
              <h3 class="food__title">Tata Punch</h3>
              <p>
              Rs.5.84 - 9.59 Lakh*Get On Road Price
              *Ex-showroom Price in Varanasi
              <button class="button__primary">View latest offer</button> 
              </p>
            </div>
          </div>

          <div class="food__card" id="pizza__card">
            <div class="food__card__image__container">
              <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Land-Cruiser/8448/1623313668941/front-left-side-47.jpg?tr=w-456" alt="pizza" class="food__image" />
            </div>
            <div class="food__card__description">
              <h3 class="food__title">Toyota Land Cruiser</h3>
              <p>
              Rs.1.50 Cr* 
              *Estimated Price in Varanasi
              <button class="button__primary">View latest offer</button> 
              </p>
            </div>
          </div>
          
          <div class="food__card">
            <div class="food__card__image__container">
              <img
                src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Nexo/7255/1580972415014/front-left-side-47.jpg?tr=w-456"
                alt="ice cream"
                class="food__image"
              />
            </div>
            <div class="food__card__description">
              <h3 class="food__title">Hyundai Nexo</h3>
              <p>
              Rs.65.00 Lakh*
              *Estimated Price in Varanasi

              <button class="button__primary">View latest offer</button> 
              </p>
              
            </div>
          </div>
        </div>
        </section>

      
      <section class="restaurant__container">
        <h1 class="restaurant__text">Popular Brands</h1>
        <div class="restaurant__images__container">
          <div class="restaurant__images__row__one">
            <div class="restaurant__image__1">
              <img
                src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/maruti.jpg"
                alt="restaurant1"
                class="restaurant__1"
              />
            </div>
            <div class="restaurant__image__2">
              <img
                src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/hyundai.jpg"
                alt="restaurant2"
                class="restaurant__2"
              />
            </div>
          </div>
          <div class="restaurant__images__row__two">
            <div class="restaurant__image__3">
              <img
                src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/honda.jpg"
                alt="restaurant3"
                class="restaurant__3"
              />
            </div>
            <div class="restaurant__image__4">
              <img
                src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/mahindra.jpg"
                alt="restaurant4"
                class="restaurant__4"
              />
            </div>
          </div>
    
        

         
        </div>
    </section>
  </main>

  <section class="quote__container">
    <div class="quote_image_overlay"></div>
    <img src="https://stimg.cardekho.com/pwa/img/CarDekho-Logo.svg" alt="logo" class="navbar__logo" />
    <h2 class="quote_image_text">
    
     Not Sure, Which car to buy?
     Let us help you find the dream car
    </h2>
    <button class="button__primary">Show Me Best Car</button> 
  </section>


<section class="explore__menu__container">
      <h1 class="explore__menu__text">Get trusted used cars nearby</h1>
     
        <div class="explore__menu__gradient__bg"></div>
        <div class="explore__menu__lists">

          <div class="food__card">
            <div class="food__card__image__container">
              <img src="https://stimg.cardekho.com/pwa/img/IconCityNew/ahmedabad.svg" alt="burger" class="food__image" />
            </div>
            <div class="food__card__description">
              <h3 class="food__title"> Used car in  Ahemadabad</h3>
             
            </div>
          </div>
          
          <div class="food__card" id="pizza__card">
            <div class="food__card__image__container">
              <img src="https://stimg.cardekho.com/pwa/img/IconCityNew/bangalore.svg" alt="pizza" class="food__image" />
            </div>
            <div class="food__card__description">
              <h3 class="food__title"> Used car in  bangalore</h3>
             
            </div>
          </div>

          <div class="food__card">
            <div class="food__card__image__container">
              <img src="https://stimg.cardekho.com/pwa/img/IconCityNew/gurgaon.svg" alt="burger" class="food__image" />
            </div>
            <div class="food__card__description">
              <h3 class="food__title"> Used car in  Gurgaon</h3>
             
            </div>
          </div>
          
          <div class="food__card" id="pizza__card">
            <div class="food__card__image__container">
              <img src="https://stimg.cardekho.com/pwa/img/IconCityNew/hyderabad.svg" alt="pizza" class="food__image" />
            </div>
            <div class="food__card__description">
              <h3 class="food__title"> Used car in  Hyderabad</h3>
             
            </div>
          </div>

          <div class="food__card" id="pizza__card">
            <div class="food__card__image__container">
            <img src="https://stimg.cardekho.com/pwa/img/IconCityNew/delhi-ncr.svg" alt="pizza" class="food__image" />
            </div>
            <div class="food__card__description">
              <h3 class="food__title"> Used car in  Delhi NCR</h3>
            </div>
          </div>
          
          <div class="food__card">
            <div class="food__card__image__container">
            <img src="https://stimg.cardekho.com/pwa/img/IconCityNew/chennai.svg" alt="pizza" class="food__image" />
            </div>
            <div class="food__card__description">
              <h3 class="food__title"> Used car in  Chennai</h3>
              
            </div>
          </div>
        </div>
        </section>

        <section class="explore__menu__container">
      
     
        <div class="explore__menu__gradient__bg"></div>
        <div class="explore__menu__lists">

          <div class="food__card">
            <div class="food__card__image__container">
              <img src="https://stimg.cardekho.com/pwa/img/IconCityNew/jaipur.svg" alt="burger" class="food__image" />
            </div>
            <div class="food__card__description">
              <h3 class="food__title"> Used car in  Jaipur</h3>
             
            </div>
          </div>
          
          <div class="food__card" id="pizza__card">
            <div class="food__card__image__container">
              <img src="https://stimg.cardekho.com/pwa/img/IconCityNew/kolkata.svg" alt="pizza" class="food__image" />
            </div>
            <div class="food__card__description">
              <h3 class="food__title"> Used car in  kolkata</h3>
             
            </div>
          </div>

          <div class="food__card">
            <div class="food__card__image__container">
              <img src="https://stimg.cardekho.com/pwa/img/IconCityNew/mumbai.svg" alt="burger" class="food__image" />
            </div>
            <div class="food__card__description">
              <h3 class="food__title"> Used car in  Mumbai</h3>
             
            </div>
          </div>
          
          <div class="food__card" id="pizza__card">
            <div class="food__card__image__container">
              <img src="https://stimg.cardekho.com/pwa/img/IconCityNew/new-delhi.svg" alt="pizza" class="food__image" />
            </div>
            <div class="food__card__description">
              <h3 class="food__title"> Used car in  New Delhi</h3>
             
            </div>
          </div>

          <div class="food__card" id="pizza__card">
            <div class="food__card__image__container">
            <img src="https://stimg.cardekho.com/pwa/img/IconCityNew/pune.svg" alt="pizza" class="food__image" />
            </div>
            <div class="food__card__description">
              <h3 class="food__title"> Used car in  Pune</h3>
            </div>
          </div>
          
          <div class="food__card">
            <div class="food__card__image__container">
            <img src="https://stimg.cardekho.com/pwa/img/IconCityNew/noida.svg" alt="pizza" class="food__image" />
            </div>
            <div class="food__card__description">
              <h3 class="food__title"> Used car in  Noida</h3>
              
            </div>
          </div>
        </div>
        </section>

      
     
          <footer>
            <img src="https://stimg.cardekho.com/pwa/img//gaadi-new-logo.svg" alt="logo"/>
            <img src="https://images.zigcdn.com/images/revamp/zw_l.png" alt="logo"/>
            <img src="https://static.insurancedekho.com/pwa/img/id-main-logo.svg" alt="logo"/>

            <ul>
                <li>Pricinig</li>
                <li>Terms and condition</li>
                <li>Partnership</li>
                <li>Career</li>
                <li>Contact</li>
                
            </ul>
          </footer>
        
     
    </div>
  );
}

export default App;
