import { useEffect, useState } from "react"
import UsersList from "./components/UsersList"

function UsersSection() {
  const baseURL = "https://boolean-api-server.fly.dev/oysteinbjo/contact"

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(baseURL)
    .then(res => res.json())
    .then(data => setData(data))
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        {data && <UsersList users={data}/>}
      </div>
    </section>
  )
}

export default UsersSection
