import './Table.css';

function TableHead() {
  return (
    <div>
      <table>
        <tr>
          <div className="table-header">
            <th className="Single-Heading">SITE NAME</th>
            <th className="Single-Heading">ITEM</th>
            <th className="Single-Heading">SUB CATEGORY</th>
            <th className="Single-Heading">QUANTITY</th>
            <th className="Single-Heading">PRICE</th>
            <th className="Single-Heading">DATE</th>
            <th style={{paddingRight:"3rem",paddingLeft:'1.9rem'}} className="Single-Heading">RECIEVED</th>
            <th style={{paddingRight:'3.8rem'}} className="Single-Heading">TOTAL</th>
          </div>
        </tr>
      </table>
    </div>
  );
}

export default TableHead;
