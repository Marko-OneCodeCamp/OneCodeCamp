import { useState, useEffect } from 'react';
import axios from 'axios';
import "../QuoteFetcher.css";

const basedUrl = "https://icanhazdadjoke.com/";

const AxiosJokes = () => {
    const [dadJoke, setDadJoke] = useState({ joke: "", id: "" });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isGlowing, setIsGlowing] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await axios.get(basedUrl, {
                headers: {
                    'Accept': 'application/json'
                }
            });
            const result = response.data;
            setDadJoke({
                joke: result.joke,
                id: result.id,
            });
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }
    const handleGlowButtonClick = () => {
        setIsGlowing(!isGlowing);
    };
    return (
        <div className={`App-header ${isGlowing ? "glow" : ""}`}>
            <div className='d-flex justify-content-center'>
                <button className="btn btn-lg btn-light mx-2" onClick={fetchData}>
                    Get Dad Joke
                </button>
                <button className="btn btn-lg btn-info text-dark" onClick={handleGlowButtonClick}>
                    {isGlowing ? "Stop Glowing" : "Make Glow"}
                </button>
            </div>
            <h1>Welcome to Axios Jokes!</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && (
                <div key={dadJoke.id} className='container d-flex justify-content-center'>
                    <h3>Dad Joke: {dadJoke.joke}</h3>
                </div>
            )}
        </div>
    );
}
export default AxiosJokes;
