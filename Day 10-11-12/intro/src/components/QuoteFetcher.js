import { useState, useEffect } from "react";
import "../QuoteFetcher.css"; 

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {
    const [quote, setQuote] = useState({ text: "", author: "" });
    const [isGlowing, setIsGlowing] = useState(false);

    useEffect(() => {
        fetchQuote();
    }, []);

    async function fetchQuote() {
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        setQuote(randomQuote);
        setIsGlowing(false); 
    }
    
    const handleGlowButtonClick = () => {
        setIsGlowing(!isGlowing);
    };
    return (
        <div className={`App-header ${isGlowing ? "glow" : ""}`}>
            <div>
                <button className="btn btn-lg btn-light mx-2" onClick={fetchQuote}>
                Get Quote
                </button>
                <button className="btn btn-lg btn-info text-dark" onClick={handleGlowButtonClick}>
                    {isGlowing ? "Stop Glowing" : "Make Glow"}
                </button>
            </div>
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
        </div>
    );
}
