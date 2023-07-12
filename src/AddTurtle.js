import { useState } from 'react';

export default function AddTurtle() {
    const [data, setData] = useState('');
    const [isCreated, setIsCreated] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    const hostname = process.env.REACT_APP_API_URL;

    const saveInputs = async (event) => {
        var key = event.target.name;
        setData(event.target.value);
        setIsCreated(false);
        console.log("Saved input:" + key + ":" + event.target.value);
    };

    const addTurtle = async (event) => {
        console.log("Click. Data=" + data);
        try {
            console.log("Running...")
            const response = await fetch(hostname+'?operation=Create&value=' + data, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            } else {
                setIsCreated(true)
            }

            const result = await response.json();
            console.log("Reuslt:" + result);

        } catch (err) {
            console.log(err)
            setErr(err.message);
        } finally {
            setIsLoading(false);
        }

    };

    return (
        <form className="row g-3" onSubmit={(event) => event.preventDefault()}>
            {isLoading && <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}
            {isCreated && <div className="alert alert-success" role="alert">
                Created!
            </div>}
            <div className="col-auto">
                <label htmlFor="inputPassword2" className="visually-hidden">Turtle name</label>
                <input type="text" className="form-control" id="turtleName" placeholder="name..." onChange={saveInputs} />
            </div>
            <div className="col-auto">
                <button className="btn btn-primary mb-3" onClick={addTurtle}><i className="bi bi-database-fill-add"></i>Add Turtle</button>
            </div>
        </form>
    );
}
