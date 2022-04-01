import NavBarBeta from '../components/NavBarBeta'
import HeroSectionMarkets from '../components/HeroSectionMarkets'
import FeatureSection from '../components/FeatureSection'
import FooterSection from '../components/FooterSection'

const Markets = () => {
  return (
    <div className={`bg-th-bkg-1 text-th-fgd-1 transition-all overflow-hidden`}>
      <div className="w-screen h-2 bg-gradient-to-r from-powerstreetpro-blue via-powerstreetpro-olive to-powerstreetpro-green"></div>
      <NavBarBeta />
      <HeroSectionMarkets />
      <FeatureSection />
      <FooterSection />
      <div className="w-screen h-2 bg-gradient-to-r from-powerstreetpro-blue via-powerstreetpro-olive to-powerstreetpro-green"></div>
    </div>
  )
}

export default Markets
