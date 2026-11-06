import { useState, useEffect } from 'react';
import './jokeapp.css';

function Joke() {
    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(true);
    const [trigger, setTrigger] = useState(0);

    useEffect(() => {
        setLoading(true);
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(data => {
                setJoke(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [trigger]);

    return (
        <div className="joke-container">
            <div className="cardstyle">
                {loading ? (
                    <p>Zarafat yoldadır, gözləyin...</p>
                ) : joke ? (
                    <>
                        <p className="setupStyle">{joke.setup}</p>
                        <p className="punchlineStyle">{joke.punchline}</p>
                    </>
                ) : (
                    <p>Zarafat tapılmadı.</p>
                )}
                <button className="btnStyle" onClick={() => setTrigger(value => value + 1)}>
                    Başqa Zarafat Gətir
                </button>
            </div>
        </div>
    );
}

export default Joke;
