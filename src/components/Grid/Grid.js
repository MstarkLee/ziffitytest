import "./Grid.css";

function Grid({ data: { header = [], values = [], actions = [] } }) {
  return (
    <table className="gridTable">
      <thead>
        <tr>
          {header.map((colName) => (
            <th
              key={colName?.name}
              className={colName?.type === "number" ? `alignLeft` : null}
            >
              {colName?.name}
            </th>
          ))}
          {!!actions.length && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {values.map((row, index) => (
          <tr key={index}>
            {header.map((colName) => (
              <td
                key={colName?.name}
                className={colName?.type === "number" ? `alignLeft` : null}
              >
                {colName?.type === "object"
                  ? row[colName?.name].length
                  : row[colName?.name]}
              </td>
            ))}
            {!!actions.length && (
              <td className="gridActions">
                {actions.map(({ label, action }) => (
                  <button onClick={() => action(row)}>{label}</button>
                ))}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Grid;
