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
    

    return (
        <div className={`App-header ${isGlowing ? "glow" : ""}`}>
            <div>
                <p>Famous Quotes</p>
            </div>
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
        </div>
    );
}
