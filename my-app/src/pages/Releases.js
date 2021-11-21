import { useState } from "react";
import ReleaseForm from "../components/ui/ReleaseForm";

const initialReleases = [
        {
        id: 1,
        releaseName: "Release 1",
        startDate: "01/12/2021",
        endDate: "05/12/2021"
    },
    {
        id: 2,
        releaseName: "Release 2",
        startDate: "10/12/2021",
        endDate: "15/12/2021"
    },
    {
        id: 3,
        releaseName: "Release 3",
        startDate: "20/12/2021",
        endDate: "05/12/2021"
    },
    {
        id: 4,
        releaseName: "Release 4",
        startDate: "30/12/2021",
        endDate: "05/01/2022"
    }
];

const Releases = () => {
    //Variable de estado
    const [ releases, setReleases ] = useState(initialReleases)

    //Función crear datos
    const handleData = (data) => {
         //Crear un id para que no quede null
         data.id = releases.length + 1;

        setReleases([
            ...releases,
            data
        ])
    };
    //Función borrar dato
    const handleDelete = (id) => {
        let isDelete = window.confirm(`Estás seguro de querer borrar el registro ${id}?`);
        if(isDelete) {
        const newData = releases.filter( e => e.id !== id);
        setReleases(newData)
    } else {
        return
    }
    };

    return(
        <div style={{paddingTop: "30px"}}>
            <ReleaseForm handleData={handleData}/>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Release Name</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
            {releases.map( e => {
            return (
                <tr key={e.id}>
                    <th scope="row">{e.id}</th>
                    <td>{e.releaseName}</td>
                    <td>{e.startDate}</td>
                    <td>{e.endDate}</td>
                    <td><button type="button" className="btn btn-danger btn-sm" onClick= {() => handleDelete(e.id)}>Remover</button></td>
                </tr>
            )
            })
            }
            </tbody>
            </table>
        </div>
    )
};

export default Releases