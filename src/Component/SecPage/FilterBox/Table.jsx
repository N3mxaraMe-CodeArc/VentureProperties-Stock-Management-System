import "./Table.css";
import PropTypes from "prop-types";

function SecTable({
  SiteName,
  Catergory,
  SubCatergory,
  Price,
  Quantity,
  Total,
  Name,
  DateApp,
}) {
  return (
    <div>
      <div>
        <table>
          <tr>
            <div className="table-row">
              <div
                style={{marginBottom:'10rem'}}
                className="SiteName"
              >
                <td
                  style={{ color: "white", paddingTop: "0.7rem" }}
                  className="Single-item singleOne"
                >
                  {SiteName}
                </td>
              </div>
              <td
                style={{
                  color: "#01946D",
                  marginLeft: "1rem",
                  paddingLeft: "8.9rem",
                }}
                className="Single-item"
              >
                {Catergory}
              </td>
              <td className="Single-item">{SubCatergory}</td>
              <td className="Single-item">{Quantity}</td>
              <td className="Single-item">{Price}</td>
              <td className="Single-item">{DateApp}</td>
              <td className="Single-item">{Name}</td>
              <td style={{ color: "#01946D" }} className="Single-item">
                {Total}
              </td>
            </div>
          </tr>
        </table>
      </div>
    </div>
  );
}

SecTable.propTypes = {
  SiteName: PropTypes.string.isRequired,
  Catergory: PropTypes.string.isRequired,
  SubCatergory: PropTypes.string.isRequired,
  Price: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  Total: PropTypes.string.isRequired,
  DateApp: PropTypes.string.isRequired,
  Quantity: PropTypes.string.isRequired,
};

export default SecTable;
