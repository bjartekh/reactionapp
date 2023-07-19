import { useState, useEffect } from 'react';

export default function SearchTurtle({ isActive }) {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearched, setIsSearched] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    const hostname = process.env.REACT_APP_API_URL;

    const saveInputs = async (event) => {
        var key = event.target.name;
        setSearchTerm(event.target.value);
        console.log("Saved input:" + key + ":" + event.target.value);
        setIsSearched(false)
    };

    useEffect(() => {

        setIsSearched(false)

    }, [isActive]);


    const searchTurtle = async (event) => {
        try {
            console.log("Running...")
            const response = await fetch(hostname + '?operation=Search&value=' + searchTerm, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            } else {
                setIsSearched(true)
            }

            const result = await response.json();
            console.log(result);
            let arr = [];
            for (var i=0;i<result.length; i++) {
                arr.push({name : result[i].name});
            }
            setData(arr);

        } catch (err) {
            console.log(err)
            setErr(err.message);
        } finally {
            setIsLoading(false);
        }

    };

    return (
        <>
            <form className="row g-3" onSubmit={(event) => event.preventDefault()}>
                {isLoading && <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}
                <div className="col-auto">
                    <label htmlFor="inputPassword2" className="visually-hidden">Turtle name</label>
                    <input type="text" className="form-control" id="turtleName" placeholder="name..." onChange={saveInputs} />
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary mb-3" onClick={searchTurtle}><i className="bi bi-search"></i>Search Turtle</button>
                </div>
            </form>
            {isSearched && <div className="alert alert-success" role="alert">
                Search results for "{searchTerm}" :
                {data.length == 0 && <h3>Nothing found!</h3>}
            </div>}

            <ul className="list-group">
                {data.map((p) => (
                    <li key={p.name} className="list-group-item">
                        {p.name}
                    </li>
                ))
                }
            </ul>
        </>
    );
}
