import myData from './data'
import { Games } from './components/Games';
import { Pagination } from './components/Pagination';
import React, {useState, useEffect} from 'react';
function App() {
let gameData = myData.myData
// setting state
const [games, setGames] = useState([])
const [loading, setLoading] = useState(false)
const [currentPage, setCurrentPage] = useState(1)
const [gamesPerPage] = useState(1)

useEffect(() => {
  const fetchGames =  async () => {
    setLoading(true)
    const res = gameData
    setGames(res)
    setLoading(false)
  }

  fetchGames()
}, [])

const paginate = (gamesPerPage) => setCurrentPage(gamesPerPage)


// Get current game
const indexOfLastGame = currentPage * gamesPerPage
const indexOfFirstGame = indexOfLastGame - gamesPerPage
const currentGame = gameData.slice(indexOfFirstGame, indexOfLastGame)

  return (
    <div className='w-full h-screen bg-teal-50 px-4 py-6  flex flex-col space-y-10'>
      <h1 className='text-2xl font-bold'>Whoscore</h1>

   <div className='px-2'>
   <Pagination gamesPerPage={gamesPerPage} totalGames={gameData.length} paginate={paginate} currentPage={currentPage} />
   </div>

     <Games games={currentGame} loading={loading} />

     </div>
  );
}

export default App;
