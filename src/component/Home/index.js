import React from "react"
import CharacterList from "../../components/CharacterList"
import Header from "../Header"
import "./index.css"

const Home=()=>(
    <div className="bg-slate-200">
    <Header/>
    <CharacterList/>
    </div>
)

export default Home