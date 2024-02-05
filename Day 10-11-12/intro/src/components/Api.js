import React, {useState, useEffect} from 'react';

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.boredapi.com/api/activity");

        if (!response.ok) {
          throw new Error (`HTTP error! Status: ${response.status}`);
        } 
        
        const result = await response.json();
        setData(result);
         } catch (error) {
            setError(error.message);
        } finally {
          setLoading(false);  
        }
      };

      fetchData();

    }, []);

    return (
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}

        {!loading && !error && (
          <div>
            <h1>Welcome to Homepage!</h1>
            <p>Activity: {data?.activity}</p>
            <p>Type: {data?.type}</p>
            <p>Participants: {data?.participants}</p>
          </div>
        )}
      </div>
    )
  }

export default Home;


// //ContactUs.js
// import React, {useState, useEffect} from 'react';
// import Axios from 'axios';

// const ContactUs = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await Axios.get("https://www.boredapi.com/api/activity");

//         const result = response.data;
//         setData(result);
//       }catch (error) {
//         setError(error.message);
//       }finally {
//         setLoading(false);
//       }
//     };

//     fetchData();

//   }, []);

//   return (
//     <div>
//       {loading && <p>Loading...</p>}
//         {error && <p>Error: {error}</p>}

//         {!loading && !error && (
//           <div>
//             <h1>Welcome to Homepage!</h1>
//             <p>Activity: {data?.activity}</p>
//             <p>Type: {data?.type}</p>
//             <p>Participants: {data?.participants}</p>
//           </div>
//         )}
//     </div>
//   )
// }

// export default ContactUs;


