import AxilBar from "../../components/AxilBar/AxilBar"
import Hero from "../../sections/Hero/Hero"
import style from "./home.module.scss"

const Home = () => {
  return (
    <div className={`${style["home"]}`}>

      <AxilBar/>

      <Hero />

    </div>
  )
}
export default Home