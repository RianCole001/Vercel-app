import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap'; // ✅ Import Bootstrap Spinner
import './Tenderstable.css';

const TendersTable = () => {
  const [tenders, setTenders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllTenders = async () => {
      let allTenders = [];
      let page = 1;
      let hasMore = true;

      try {
        while (hasMore) {
          const response = await fetch(
            `https://tenders.go.ke/api/active-tenders?perpage=50&page=${page}`
          );

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();

          if (Array.isArray(data.data) && data.data.length > 0) {
            allTenders = [...allTenders, ...data.data];
            page++;
          } else {
            hasMore = false;
          }
        }

        setTenders(allTenders);
      } catch (error) {
        console.error("Failed to fetch tenders:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllTenders();
  }, []);

  // ✅ Spinner while loading
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "300px" }}>
        <Spinner animation="border" role="status" variant="primary" />
        <span className="ms-3 fs-5 text-primary">Fetching tenders...</span>
      </div>
    );
  }

  if (error) return <div className="status-message error-message">Error: {error.message} 😞</div>;
  if (!Array.isArray(tenders) || tenders.length === 0)
    return <div className="status-message">No active tenders found. 🤷‍♂️</div>;

  return (
    <div className="tenders-container">
      <h2>Active Kenyan Government Tenders 🇰🇪</h2>
      <table className="tenders-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Procuring Entity</th>
            <th>Closing Date</th>
            <th>View Tender</th>
            <th>Documents</th>
          </tr>
        </thead>
        <tbody>
          {tenders.map((tender, index) => (
            <tr key={tender.id || index}>
              <td>{index + 1}</td>
              <td>{tender.title || 'Untitled'}</td>
              <td>{tender.procuring_entity?.name || 'N/A'}</td>
              <td>
                {tender.close_at
                  ? new Date(tender.close_at).toLocaleDateString()
                  : 'N/A'}
              </td>
              <td>
                {tender.id ? (
                  <a
                    href={`https://tenders.go.ke/tenders/${tender.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                ) : (
                  'N/A'
                )}
              </td>
              <td>
                {Array.isArray(tender.documents) && tender.documents.length > 0 ? (
                  tender.documents.map((doc, i) => (
                    <div key={i}>
                      <a
                        href={`https://tenders.go.ke${doc.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {doc.type?.description || 'Download'}
                      </a>
                    </div>
                  ))
                ) : (
                  'No Docs'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TendersTable;
