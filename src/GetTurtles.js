import { useState, useEffect } from 'react';

export default function GetTurtles({isActive}) {
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


    useEffect(() => {

        let hostname = process.env.REACT_APP_API_URL;
        async function fetchData() {
            try {
                console.log("Running fetch for GetTurtles..");
                const response = await fetch(hostname+'?operation=List', {
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
        if(isActive) {
            console.log("isActiveDetected")
            setIsLoading(true)
            fetchData();
        } else {
            console.log("DoneLoading...")
        }
        setIsLoading(false);
        return () => {
            setIsLoading(false);
          };
      
    }, [isActive]);

    return (
        <>
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
