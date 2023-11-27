import Navbar from './components/Navbar';
import Home from './components/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './components/Blog/Create';
import BlogDetails from './components/Blog/BlogDetails';
import NotFound from './components/NotFound';
import RatingPage from './components/Ratings/RatingPage';
import albumsData from './components/Albums/albumsData';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className='content'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/create' element={<Create />} />
                        <Route path='/blogs/:id' element={<BlogDetails />} />
                        <Route path="/ratings" element={<RatingPage albums={albumsData} />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
