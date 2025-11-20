import { useParams } from "react-router-dom";

function DetailsPage() {
  const { zone } = useParams();
  const decodedZone = decodeURIComponent(zone);

  const info = {
    time: new Date().toLocaleTimeString("en-US", { timeZone: decodedZone }),
    date: new Date().toLocaleDateString("en-US", { timeZone: decodedZone }),
  };

  return (
    <div>
      <h2>{decodedZone} - Details</h2>

      <div className="card p-4 mt-3">
        <p><strong>Current Time:</strong> {info.time}</p>
        <p><strong>Current Date:</strong> {info.date}</p>
        <p><strong>Format:</strong> 12-hour (US Locale)</p>
      </div>
    </div>
  );
}

export default DetailsPage;
