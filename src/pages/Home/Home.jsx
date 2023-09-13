import Axilbar from "../../components/Axilbar/Axilbar"
import MainMenu from "../../components/MainMenu/MainMenu"
import Hero from "../../sections/Hero/Hero"
import style from "./home.module.scss"

const Home = () => {
	return (
		<div className={`${style["home"]}`}>

			<Axilbar />

			<MainMenu />

			<Hero />

		</div>
	)
}
export default Home