import Vehicle  from "./elements/Vehicle"

function App() {
  return (
    <div>
      <Vehicle />
    </div>
  )
}

export default App























































// import React, { useEffect, useState } from 'react'
// import { MapContainer ,TileLayer,Polyline,Marker,Popup} from 'react-leaflet'
// import L, { marker } from "leaflet";
// import "leaflet/dist/leaflet.css";

// const vehicleData = {
//   "v1":{
//     "number" : 2996,
//     "speed": "60km/h",
//     "status": "active",
//     "latitude": 22.2974883,
//     "longitude":73.2067383
//   },

//   "v2":{
//     "number" : 3996,
//     "speed": "70km/h",
//     "status": "active",
//     "latitude": 22.298,
//     "longitude":73.207
//   },

//   "v3":{
//     "number" : 4996,
//     "speed": "80km/h",
//     "status": "active",
//     "latitude": 22.2985,
//     "longitude":73.2075
//   }
// };

// const VehicleMap= ()=>{
//   const[activeVehicle, setactiveVehicle]=useState(null);

//   //marker rendering
//   const markers = Object.keys(vehicleData).map((vehicleId)=>{
//     const vehicle =vehicleData[vehicleId];
//     return(
//       <Marker

//       key={vehicleId}
//       position={[vehicle.latitude,vehicle.longitude]}
//       eventHandlers={{
//         click:()=>{
//           setactiveVehicle(vehicle);
//         }
//       }}
//       >

//         <Popup>
//           <div>
//             <strong>Vehicle No:</strong>{vehicle.number}<br />
//             <strong>Speed:</strong>{vehicle.speed}<br />
//             <strong>status</strong>{vehicle.status}
//           </div>
//         </Popup>

//       </Marker>
//     );
//   });

// }

// const path = [
//   [22.2974883, 73.2067383],
//   [22.298, 73.207],
//   [22.2985, 73.2075],
//   [22.299, 73.208],

// ]

// // const customIcon = new L.Icon({
// //   iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png", // Example car icon
// //   iconSize: [32, 32],
// //   iconAnchor: [16, 32],
// //   popupAnchor: [0, -32],

// // });


// function App() {

  
 

//   const[position,setposition]=useState(path[0]);
//   const[index,setindex]=useState(0);
//   const[track,settrack]=useState([path[0]]);

  

  

//   useEffect(()=>{
//     const interval = setInterval(()=>{
//       setindex((prevIndex) => (prevIndex + 1) % path.length);
//       const newposition = path[(index + 1) % path.length];
//       setposition(newposition);
//       settrack((prevPath) => [...prevPath, newposition]);
//     },1000)
//     return ()=> clearInterval(interval);
   
//   },[index])

//   return (
//     <div style={{height:"100%", width:"100%"}}>
//       <MapContainer
      
//       style={{height:"100vh",width:"100vw" }}
//         center={[22.2974883, 73.2067383]}
//         zoom={17}
//         minZoom={5}
//         >
          

//         <TileLayer
//           attribution="Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community"
//           className="basemap"
//           maxNativeZoom={19}
//           maxZoom={19}
//           subdomains={["clarity"]}
//           url="https://{s}.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
//         />

        

//         {/* <Marker position={position} icon={customIcon}>
//           <Popup>you are here</Popup>
//         </Marker> */}

//         {path.length > 1 && <Polyline positions={track} color="red"></Polyline>}
//         {marker}

        

//       </MapContainer>



// { activeVehicle && (
//       <div style={{ marginTop: '20px' }}>
//           <h3>Selected Vehicle Information:</h3>
//           <p><strong>Vehicle No:</strong> {activeVehicle.number}</p>
//           <p><strong>Speed:</strong> {activeVehicle.speed}</p>
//           <p><strong>Status:</strong> {activeVehicle.status}</p>
          
//         </div>

// )}



//     </div>
//   )
// }

// export default App


// Sample vehicle data

// const path = [
//   // [22.2974883, 73.2067383],
//   // [22.298, 73.207],
//   // [22.2985, 73.2075],
//   // [22.299, 73.208],
//   [
//     75.8535500104862,
//     22.718024643871743
//   ],
//   [
//     75.85537646402801,
//     22.71817352674597
//   ],
//   [
//     75.85546772034775,
//     22.716329445041083
//   ],
//   [
//     75.84626059853298,
//     22.716299605828297
//   ],
//   [
//     75.84625823809267,
//     22.71336195623404
//   ],
//   [
//     75.84197314054049,
//     22.713130089057145
//   ],
//   [
//     75.84359671234964,
//     22.705386271610095
//   ],
//   [
//     75.8435633593601,
//     22.7053091044548
//   ],
//   [
//     75.83922750764415,
//     22.702222381592264
//   ],
//   [
//     75.83242704120946,
//     22.697094260193154
//   ],
//   [
//     75.82933426399086,
//     22.704702763773227
//   ],
//   [
//     75.83247374014454,
//     22.705725488304566
//   ],
//   [
//     75.86901321924591,
//     22.71651769514257
//   ],
//   [
//     75.88274182307919,
//     22.722887264070593
//   ],
//   [
//     75.88674767999362,
//     22.723708823429362
//   ],
//   [
//     75.88962356474639,
//     22.73191354521606
//   ],
//   [
//     75.89188844070378,
//     22.74002271892816
//   ],
//   [
//     75.89522415239864,
//     22.749536111655573
//   ],
//   [
//     75.90039061697613,
//     22.754325179069
//   ],
//   [
//     75.90398143302431,
//     22.754501192852345
//   ],
//   [
//     75.89801381674525,
//     22.75810342720098
//   ],
//   [
//     75.90031688400882,
//     22.75718821053745
//   ],
//   [
//     75.89871364381543,
//     22.75661326359996
//   ],
//   [
//     75.89942619501147,
//     22.75563936836808
//   ],
//   [
//     75.8987645403283,
//     22.75651939448248
//   ],
//   [
//     75.9004950218087,
//     22.754301717815906
//   ],
//   [
//     75.90436315687879,
//     22.754501192852345
//   ],
//   [
//     75.90575009232617,
//     22.761050668581632
//   ],
//   [
//     75.90788740917543,
//     22.767551616243495
//   ],
//   [
//     75.90877431018257,
//     22.77037729627918
//   ],
//   [
//     75.90416459640869,
//     22.77104548738339
//   ],
//   [
//     75.89721196358559,
//     22.77317189740846
//   ]



// ];

// const VehicleMap = () => {
//   const [activeVehicle] = useState(null); // Vehicle state initially null
//   const [position, setPosition] = useState(path[0]); // Set initial position (first point of path)
//   const [, setIndex] = useState(0); // Index to track current point in the path
//   const [track, setTrack] = useState([path[0]]); // Track to store the path of movement
//   const[isMoving,setisMoving]=useState(false);

//   const startMovement = ()=>{
//     setisMoving(true);
//   }

//   const pauseMovement=()=>{
//     setisMoving(false);
//   }

//   const stopMovement =()=>{
//     setisMoving(false);
//   }

//   // Create markers for each vehicle
//   // const markers = Object.keys(vehicleData).map((vehicleId) => {
//   //   const vehicle = vehicleData[vehicleId];
//   //   return (
//   //     <Marker
//   //       key={vehicleId}
//   //       position={[vehicle.latitude, vehicle.longitude]}
//   //       eventHandlers={{
//   //         click: () => {
//   //           setActiveVehicle(vehicle); // Update active vehicle on marker click
//   //         }
//   //       }}
//   //     >
//   //       <Popup>
//   //         <div>
//   //           <strong>Vehicle No:</strong> {vehicle.number}<br />
//   //           <strong>Speed:</strong> {vehicle.speed}<br />
//   //           <strong>Status:</strong> {vehicle.status}
//   //         </div>
//   //       </Popup>
//   //     </Marker>
//   //   );
//   // });

//   // Move vehicle along the path (simulating movement)
//   useEffect(() => {

//     if(!isMoving) return;
//     // const interval = setInterval(() => {
//     //   setIndex((prevIndex) => (prevIndex + 1) % path.length); // Update index to move along the path
//     //   const newPosition = path[(index + 1) % path.length]; // Get the next position on the path
//     //   setPosition(newPosition); // Update the vehicle's position
//     //   setTrack((prevPath) => [...prevPath, newPosition]); // Update the track path
//     // }, 1000); // Update every second

//     const interval = setInterval(() => {
//       setIndex((prevIndex) => {
//         const newIndex = (prevIndex + 1) % path.length;
        
//         // Alternate between 0 and 1
//         const newPosition = path[newIndex];
//         setPosition(newPosition); 
//         // Update the marker position
//        // setTrack((prevPath) => [...prevPath, path[newIndex]]);
//        setTrack((prevTrack) => [...prevTrack, newPosition]);
//         return newIndex;
//       });
//     },2000);

//     return () => clearInterval(interval); // Cleanup the interval on component unmount
//   }, [isMoving]);

//   return (
//     <div style={{ height: "100%", width: "100%" }}>
//       <MapContainer
//         style={{ height: "80vh", width: "100vw" }}
//         center={[22.2974883, 73.2067383]}
//         zoom={17}
//         minZoom={5}
//       >
//         <TileLayer
//           attribution="Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community"
//           url="https://{s}.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
//         />

//         {/* If the vehicle is moving, render the polyline path */}
//         {path.length > 1 && <Polyline positions={track} color="red" />}

//         {/* Render the moving marker */}
//         <Marker position={position}>
//           <Popup>
//             <div>
//               <strong>Vehicle No:</strong> Moving vehicle<br />
//               <strong>Speed:</strong> Simulated speed<br />
//               <strong>Status:</strong> Active
//             </div>
//           </Popup>
//         </Marker>

//         {/* Render other markers (vehicles) */}
        
//       </MapContainer>

//       {/* Display active vehicle information if available */}
//       {activeVehicle && (
//         <div style={{ marginTop: '20px' }}>
//           <h3>Selected Vehicle Information:</h3>
//           <p><strong>Vehicle No:</strong> {activeVehicle.number}</p>
//           <p><strong>Speed:</strong> {activeVehicle.speed}</p>
//           <p><strong>Status:</strong> {activeVehicle.status}</p>
//         </div>
//       )}


// <div style={{marginTop : '20px'}}>
//   <button onClick={startMovement}>start</button>
//   <button onClick={pauseMovement}>pause</button>
//   <button onClick={stopMovement}>stop</button>
// </div>
// {
//   track.length >1 && !isMoving &&(
//     <div style={{marginTop :'20px'}}>

// <h3>all coordinates:</h3>
// <ul>
//   {track.map((coordinate,index)=>(
//     <li key={index}>
//       Lat :{coordinate[0]} ,Lng:{coordinate[1]}
//     </li>

//   ))}
// </ul>

//       </div>
//   )
// }

// {
//   !isMoving && track.length === 1 && (
//     <div style={ {marginTop :"20px"}}>

//       <h3> current coordinate :</h3>
//       <p> Lat: {position[0]}, Lng{position[1]}</p>
//     </div>
//   )
// }



//     </div>
//   );
// }

// export default VehicleMap

