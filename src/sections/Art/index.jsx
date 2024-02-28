import ArtList from "./components/ArtList"
import { useEffect, useState } from "react";
function ArtsSection() {
  const baseURL = "https://boolean-api-server.fly.dev/"

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(baseURL +"art")
    .then(res => res.json())
    .then(data => setData(data))
  }, [])

  console.log(data)

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
      {data && <ArtList artListItems={data} baseURL={baseURL}/>}
      </div>
    </section>
  )
}

export default ArtsSection
