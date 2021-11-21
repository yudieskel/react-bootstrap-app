import { useState } from "react";

const ReleaseForm = ({ handleData }) => {
    //Variable inicial
    const initialForm = {
        releaseName: "",
        startDate: "",
        endDate: ""
    };
    //variable de estado para el formulario
    const [ form, setForm ] = useState({initialForm})

    //Función para los inputs
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    //Función de envío
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.releaseName || !form.startDate || !form.endDate) {
            alert("Datos incompletos");
            return;
        } else{
            handleData(form)
        }

        handleReset();
    };

    //Función reset
    const handleReset = (e) => {
            setForm(initialForm);
    };

    return(
        <form className="row gy-2 gx-3 align-items-center" onSubmit={handleSubmit} style={{marginBottom: "20px"}}>
            <div className="col-auto">
                <label className="visually-hidden" htmlFor="autoSizingInput">Release Name</label>
                <div className="input-group">
                    <div class="input-group-text">Release name</div>
                <input type="text" name="releaseName" className="form-control" id="autoSizingInput" 
                       value={form.releaseName} onChange={handleChange}/>
                    </div>
                </div>
            <div className="col-auto">
                <label className="visually-hidden" htmlFor="autoSizingInputGroup">Start Date</label>
                <div className="input-group">
                    <div class="input-group-text">Start date</div>
                <input type="text" name="startDate" className="form-control" id="autoSizingInputGroup" 
                       value={form.startDate} onChange={handleChange}/>
                </div>
            </div>
            <div className="col-auto">
                <label className="visually-hidden" htmlFor="autoSizingInputGroup1">End Date</label>
                <div className="input-group">
                    <div class="input-group-text">End date</div>
                <input type="text" name="endDate" className="form-control" id="autoSizingInputGroup1" 
                       value={form.endDate} onChange={handleChange}/>
                </div>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary">Save</button>
            </div>
        </form>
    )
};

export default ReleaseForm