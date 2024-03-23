import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RealTimeComponent = () => {
  const [realTimeData, setRealTimeData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const Navigation=useNavigate();


  useEffect(() => {
    const fetchRealTimeData = async () => {
      try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json'); // Example real-time API URL
        setRealTimeData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRealTimeData();

    // Cleanup function to cancel any pending requests if component unmounts
    return () => {
      
      // You can use axios.CancelToken to cancel requests if needed
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ backgroundColor: "gray" }}>
      <div style={{ position: "relative" }}>
        <h2>Real-Time Bitcoin Price</h2>
        {realTimeData && (
          <div>
            <p>USD: {realTimeData.bpi.USD.rate}</p>
            <p>GBP: {realTimeData.bpi.GBP.rate}</p>
            <p>EUR: {realTimeData.bpi.EUR.rate}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RealTimeComponent;