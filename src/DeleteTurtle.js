import { useState, useEffect } from 'react';

export default function DeleteTurtle({ isActive }) {
    const [data, setData] = useState([]);
    const [selectedTurtle, setSelectedTurtle] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
    const [doneLoading, setDoneLoading] = useState(false);

    const hostname = process.env.REACT_APP_API_URL;

    const saveSelected = async (event) => {
        console.log(event);
        var key = event.target.name;
        setSelectedTurtle(event.target.value);
        console.log("Saved input:" + event.target.value);
    };

    const handleRefresh = async (event) => {
        console.log("Refresh")
        setDoneLoading(false);
        setSelectedTurtle('');
    }

    const handleDelete = async (event) => {
        console.log("HandleDelete");
        try {
            console.log("Running delete of" + selectedTurtle);
            const response = await fetch(hostname + '?operation=Delete&value=' + selectedTurtle, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = await response.json();
            setSelectedTurtle('');
        } catch (err) {
            console.log(err);
            //   setErr(err.message);
        } finally {
            setDoneLoading(false);
        }

    }

    useEffect(() => {

        async function fetchData() {
            try {
                console.log("Running fetch for DeleteTurtle..");
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
                let arr = [];
                for (var i=0;i<result.length; i++) {
                    arr.push({name : result[i].name.S});
                }
                setData(arr);
            } catch (err) {
                console.log(err);
            } finally {
            }
        };
        if (isActive) {
            console.log("isActiveDetected")
            setSelectedTurtle('');
            fetchData();
        }
        else if (!doneLoading) {
            console.log("Not Done Loading")
            fetchData();
        } else {
            console.log("DoneLoading...")
            setDoneLoading(true)
        }
        return () => {
            setDoneLoading(true);
        };

    }, [isLoading, doneLoading, isActive, hostname]);

    return (
        <>
            <div className="alert alert-info" role="alert">
                Select Turtle to Delete it...
            </div>
            <div className="p-3">
                {selectedTurtle && selectedTurtle.length > 0 && <button type="button" className="btn btn-danger" onClick={handleDelete}><i className="bi bi-database-fill-x"></i>Delete {selectedTurtle}</button>
                }
            </div>
            <div className="row">
                {isLoading && <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}

                <div className="list-group">
                    {data.map((p) => (
                        <button key={p.name} className="list-group-item list-group-item-action" onClick={saveSelected} value={p.name}>{p.name}</button>
                    ))
                    }
                </div>
            </div>
        </>
    );
}
