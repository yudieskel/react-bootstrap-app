import { Link } from "react-router-dom";

const HomeCart = ( { title, text, action, textLink } ) => {


    return(
        <div className="col-12 col-sm-4">
            <div className="card" style={{width: '18rem', marginTop: '20px'}}>
                <img src="https://3.bp.blogspot.com/_CtNXJfCWW8Q/TJtAtfhkIRI/AAAAAAAAALM/tR_V89po19s/s200/calendario_grafico.jpg" 
                     className="card-img-top raunded mx-auto d" alt="calendario" 
                     style={{width: '150px', height: '150px'}}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <Link exact to={action}  className="btn btn-primary">{textLink}</Link>
                </div>
            </div>
        </div>
    )
};

export default HomeCart