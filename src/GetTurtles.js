import { useState } from 'react';

export default function GetTurtles() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    const handleClick = async () => {

        let hostname = process.env.REACT_APP_API_URL;
        console.log(hostname);
        setIsLoading(true);
        try {
            console.log("Running...")
            const response = await fetch(hostname + '?operation=List', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = await response.json();

            setData(result);
        } catch (err) {
            console.log(err)
            setErr(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
        <button className="btn btn-success" onClick={handleClick}>Get Turtles</button>
        <div className="row">
            {isLoading && <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}
         
            <ul className="list-group">
                {data.map((p) => (
                    <li key={p.name} className="list-group-item">
                        {p.name}
                    </li>
                ))
                }
            </ul>
        </div>
        </>
    );
}
