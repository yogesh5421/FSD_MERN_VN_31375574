import { useState } from "react";
import { timeZones } from "../data/timezones";
import { useNavigate } from "react-router-dom";

function FormPage({ setSelectedZones }) {
  const [zones, setZones] = useState([]);
  const navigate = useNavigate();

  const handleSelect = (e) => {
    const value = e.target.value;

    if (!zones.includes(value)) {
      setZones([...zones, value]);
    }
  };

  const handleSubmit = () => {
    setSelectedZones(zones);
    navigate("/cards");
  };

  return (
    <div>
      <h2>Select Time Zones</h2>

      <select className="form-select" onChange={handleSelect}>
        <option>Select a time zone</option>
        {timeZones.map((zone) => (
          <option key={zone}>{zone}</option>
        ))}
      </select>

      <ul className="list-group mt-3">
        {zones.map((z, i) => (
          <li key={i} className="list-group-item">{z}</li>
        ))}
      </ul>

      <button onClick={handleSubmit} className="btn btn-primary mt-3">
        View Clocks
      </button>
    </div>
  );
}

export default FormPage;
