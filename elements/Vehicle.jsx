import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
//import { Icon } from 'leaflet';
import { FaPauseCircle, FaStopCircle , FaPlayCircle , FaArrowLeft, FaArrowRight, FaRedoAlt } from 'react-icons/fa'; 
 

const Vehicle = () => {
  const [path, setPath] = useState([]);
  const [position, setPosition] = useState(null);
  const [index, setIndex] = useState(0);
  const [track, setTrack] = useState([]);
  const [isMoving, setIsMoving] = useState(false);
  const [speed, setSpeed] = useState(2000);
  const [fullPath, setFullPath] = useState([]);
  const markerRef = useRef(null);
  const [isReverse, setIsReverse] = useState(false);
  const [imei, setImei] = useState(0);
  const [direction, setDirection] = useState(0);
  const [ignition, setIgnition] = useState(0);
  const [date, setDate] = useState(new Date().toLocaleTimeString());
  const [deviceType, setDeviceType] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const handleSpeedChange = (e) => {
    const speedMap = {
      slow: 3000,
      medium: 2000,
      fast: 1000,
    };
    setSpeed(speedMap[e.target.value] || 2000);
  };

  const startMovement = () => {
    if (timerId) clearInterval(timerId);

    if (isMoving) {
      setIsMoving(false);
      return;
    }

     if ((!isReverse && index >= path.length - 1) || (isReverse && index <= 0)) {
      const resetIndex =  isReverse ?path.length - 1 : 0;
      const resetPosition = path[resetIndex];
      setIndex(resetIndex);
      setPosition(resetPosition);
      setTrack([resetPosition]);
      setFullPath([]);
    }

    setIsMoving(true);
  };

  const stopMovement = () => {
    setIsMoving(false);
    if (path.length > 0) {
      setIndex(path.length - 1);
      setPosition(path[path.length - 1]);
    }
    setFullPath(path);
  };

  const restartMovement = () => {
    setIsMoving(false);
    setIndex(0);
    setPosition(path[0]);
    setTrack([path[0]]);
    setFullPath([]);
    setTimeout(() => setIsMoving(true), 100);
  };

  const handleReverse = () => {
    setIsReverse(!isReverse);
    setIsMoving(true);
  };

  useEffect(() => {
    const fetchPath = async () => {
      try {
        const res = await fetch('//Api');
        const data = await res.json();
        console.log( data);

        // FIX: Proper object mapping
        const coords = data.data.map(point => ({
          lat: point.lat,
          lng: point.lng,
          imei: point.imei,
          direction: point.direction,
          ignition: point.ignition,
          device_type: point.device_type,
          datetime: point.datetime
        }));

        setPath(coords);
        setPosition(coords[0]);
        setTrack([coords[0]]);
        setIndex(0);

      } catch (error) {
        console.error("Error fetching path:", error);
      }
    };

    fetchPath();
  }, []);

  useEffect(() => {
    if (!isMoving) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        let newIndex = isReverse ? prevIndex - 1 : prevIndex + 1;

        if (newIndex < 0 || newIndex >= path.length) {
          setIsMoving(false);
          return prevIndex;
        }

        const newPosition = path[newIndex];
        setPosition(newPosition);
        setTrack((prevTrack) => [...prevTrack, newPosition]);
        setDate(newPosition.datetime);
        setImei(newPosition.imei);
        setDirection(newPosition.direction);
        setIgnition(newPosition.ignition);
        setDeviceType(newPosition.device_type);

        return newIndex;
      });
    }, speed);

    setTimerId(interval);

    return () => clearInterval(interval);
  }, [isMoving, speed, path, isReverse]);

  if (!path.length || !position) return <div>Loading map...</div>;

  return (
    <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: '15px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)',
        zIndex: 1000
      }}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <button onClick={startMovement}>{isMoving ? <FaPauseCircle /> : <FaPlayCircle />}</button>
          <button onClick={stopMovement}><FaStopCircle /></button>
          <button onClick={restartMovement}><FaRedoAlt /></button>
          <button onClick={handleReverse}>{isReverse ? <FaArrowRight /> : <FaArrowLeft />}</button>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <label style={{ marginRight: '8px' }}>Speed:</label>
          <select onChange={handleSpeedChange} defaultValue="medium">
            <option value="slow">Slow (3x)</option>
            <option value="medium">Medium (2x)</option>
            <option value="fast">Fast (1x)</option>
          </select>
        </div>
      </div>

      <MapContainer style={{ height: "100%", width: "100%", margin: "auto" }}
        center={[path[0].lat, path[0].lng]} zoom={17} minZoom={5}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {track.length > 1 && <Polyline positions={track.map(p => [p.lat, p.lng])} color="green" />}
        {fullPath.length > 0 && <Polyline positions={fullPath.map(p => [p.lat, p.lng])} color="red" />}

        {position && (
          <Marker    position={[position.lat, position.lng]} ref={markerRef} >
            <Popup>
              <div>
                <strong>Current Position:</strong><br />
                Lat: {position.lat}<br />
                Lng: {position.lng}<br />
                <strong>IMEI:</strong> {imei}<br />
                <strong>Direction:</strong> {direction}<br />
                <strong>Ignition:</strong> {ignition ?? 0}<br />
                <strong>DateTime:</strong> {date ? new Date(position.datetime).toLocaleString() : 'nothing'} <br />

                <strong>Device Type:</strong> {deviceType}<br />
                <strong>Stops Visited:</strong> {index + 1}
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default Vehicle;
