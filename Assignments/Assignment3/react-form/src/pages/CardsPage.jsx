import { Link } from "react-router-dom";

function CardsPage({ selectedZones }) {

  const getTime = (zone) => {
    return new Date().toLocaleTimeString("en-US", { timeZone: zone });
  };

  return (
    <div>
      <h2>World Clocks</h2>

      {selectedZones.length === 0 && <p>No zones selected.</p>}

      <div className="mt-4">
        {selectedZones.map((zone) => (
          <div key={zone} className="card p-3 mb-3">
            <h4>{zone}</h4>
            <p>Current Time: {getTime(zone)}</p>
            <Link to={`/details/${encodeURIComponent(zone)}`} className="btn btn-dark">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsPage;
