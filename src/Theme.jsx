import App from './App'
import { useSelector } from 'react-redux'

const Theme = () => {
    const theme = useSelector(state => state.theme.theme);

    return (
        <main className={`text-foreground bg-background ${theme} min-h-screen`}>
            <App />
        </main>
    )
}

export default Theme