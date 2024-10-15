import './App.css'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Profile } from './components/Profile/Profile'

export default function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <div className="layout">
                <Navbar />
                <Profile />
            </div>
        </div>
    )
}
