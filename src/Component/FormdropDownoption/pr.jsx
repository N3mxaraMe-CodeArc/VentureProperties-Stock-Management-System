import { PropTypes } from "@mui/material";

function Pr({Items}) {
    return ( 
        <div>
            <h5>{Items}</h5>
        </div>
     );
}

Pr.propTypes ={
    Items: PropTypes.string.isRequired
  };

export default Pr;