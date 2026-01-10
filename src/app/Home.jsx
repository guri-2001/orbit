import React, { useEffect } from 'react'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import InstallationProcess from '../components/InstallationProcess/InstallationProcess'
import Footer from '../components/Footer/Footer'

const Home = () => {
       useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Hero />
            <Services />
            <FeaturedProducts />
            <WhyChooseUs />
            <InstallationProcess />
            {/* <Footer /> */}
        </div>
    )
}

export default Home
