import Card from './Card'
import './App.css'
import users from './data/users.json'
function App() {
  return (
     <div className="app">

      <h1>User Profiles</h1>

      <div className="card-container">

        {users.map((user) => (

          <Card
            key={user.id}
            name={user.name}
            role={user.role}
            bio={user.bio}
            img={user.image}
          />

        ))}

      </div>

    </div>
    
  )
}

export default App
