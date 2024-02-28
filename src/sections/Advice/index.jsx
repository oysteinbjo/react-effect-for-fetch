import { useEffect, useState } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {
  const [randomAdvice, setRandomAdvice] = useState(null)
  const [favouriteAdvice, setFavouriteAdvice] = useState([])

  const baseURL = "https://api.adviceslip.com/advice"

  useEffect(() => {
    fetch(baseURL)
    .then(res => res.json())
    .then(data => setRandomAdvice(data))
  }, [])

  const refetch = () => {
    fetch(baseURL)
    .then(res => res.json())
    .then(data => setRandomAdvice(data))
  }

  const addToFavorites = (advice) => {
    setFavouriteAdvice([...favouriteAdvice, advice])
  }
  
  return (
    <section>
      <h2>Advice Section</h2>
      {randomAdvice && <AdviceSlip advice={randomAdvice} refetch={refetch} saveToFavourites={addToFavorites}/>}
      {favouriteAdvice && <FavouriteSlipsList favouriteSlips={favouriteAdvice} setFavouriteSlips={setFavouriteAdvice}/>}
    </section>
  )
}

export default AdviceSection
