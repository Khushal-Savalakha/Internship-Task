// import React, { useEffect, useState } from "react";
// import "./css/LiftBox.css";
// export default function LiftBox() {
//   var last_box = null;
//   var [total_passenger, set_total_passenger] = useState(0);
//   var [initial_floor, set_initial_floor] = useState(0);
//   var [destination_floor, set_destination_floor] = useState(0);


  // useEffect(()=>{
    
  // })

//   const elements = ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"];
//   const fetchCsrfToken = async () => {
//     try {
//       const response = await fetch(
//         "http://127.0.0.1:8000/lift/get_csrf/",
//         { method: "GET" }
//       );
//       console.log("-------------Entered_---------------------");
      
//       console.log(response);
//       // return response.data.csrfToken;
//     } catch (error) {
//       console.log("Error fetching CSRF token:", error);
//     }
//   };
  
//   const add_passenger = async () => {
//     let date = new Date();
//     let isoString = date.toISOString();

//     try {
//       let token = fetchCsrfToken();
//       const response = await fetch(
//         "http://127.0.0.1:8000/lift/add_passenger_data/",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "X-CSRFToken": token,
//           },
//           body: JSON.stringify({
//             no_of_passenger: total_passenger,
//             initial: initial_floor,
//             destination: destination_floor,
//             time_slot: isoString,
//           }),
//         }
//       );
//       console.log(response);
//     } catch (error) {
//       console.log("----->It gives error.");
//     }
//   };
  
  
  

//   function lift_travel(event) {
//     event.preventDefault();
//     if (total_passenger > 0 && initial_floor > 0 && destination_floor > 0) {
//       if (initial_floor == destination_floor) {
//         alert("Initial floor and Destination floor must not be same.");
//       } else {
//         // here floorElements is object so we are not using map (NodeList)
//         const floorElements = document.querySelectorAll(".box");
//         if (initial_floor < destination_floor) {
//           console.log("-------->Enetered");
//           var count = 1000;
//           var last = null;
//           for (let i = initial_floor; i <= destination_floor; i++) {
//             Array.from(floorElements)
//               .reverse()
//               .forEach((element) => {
//                 if (i == element.id) {
//                   // Additional logic here
//                   setTimeout(() => {
//                     element.classList.add("current_floor");
//                   }, count);
//                   count = count + 1000;
//                   setTimeout(() => {
//                     element.classList.remove("current_floor");
//                   }, count);
//                   last = element;
//                 }
//               });
//           }
//           setTimeout(() => {
//             last.classList.add("current_floor");
//           }, count);
//         } else {
//           var count = 1000;
//           var last = null;
//           for (let i = initial_floor; i >= destination_floor; i--) {
//             Array.from(floorElements).forEach((element) => {
//               if (i == element.id) {
//                 // Additional logic here
//                 setTimeout(() => {
//                   element.classList.add("current_floor");
//                 }, count);
//                 count = count + 1000;
//                 setTimeout(() => {
//                   element.classList.remove("current_floor");
//                 }, count);
//                 last = element;
//               }
//             });
//           }

//           setTimeout(() => {
//             last.classList.add("current_floor");
//           }, count);
//         }
//         add_passenger();
//       }
//     } else {
//       alert(
//         `all no of passengers:${total_passenger},initial floor:${initial_floor},destination floor:${destination_floor} ,ust be greater than 0`
//       );
//     }
//     console.log(total_passenger);
//     console.log(initial_floor);
//     console.log(destination_floor);
//   }

//   return (
//     <>
//       <h1>LiftBox</h1>
//       <div className="box-container">
//         {elements.map((value, index) => {
//           return (
//             <div key={index + 1} id={value} className="box">
//               {10 - index}
//             </div>
//           );
//         })}
//       </div>
//       <form onSubmit={lift_travel}>
//         <label>
//           No of passengers:
//           <input
//             name="total_passenger"
//             type="number"
//             value={total_passenger}
//             onChange={(e) => {
//               if (e.target.value < 0) {
//                 alert("Passengers are always positive!");
//               } else {
//                 set_total_passenger(e.target.value);
//               }
//             }}
//             placeholder="Enter total passengers"
//           />
//         </label>
//         <br />
//         <label>
//           Initial:
//           <input
//             name="initial_floor"
//             type="number"
//             value={initial_floor}
//             placeholder="Current Floor Number"
//             onChange={(e) => {
//               if (e.target.value < 0) {
//                 alert("Initial floor must be greater than 0!");
//               } else {
//                 set_initial_floor(e.target.value);
//               }
//             }}
//           />
//         </label>
//         <br />
//         <label>
//           Destination:
//           <input
//             name="destination_floor"
//             value={destination_floor}
//             type="number"
//             placeholder="Destimatiom Floor Number"
//             onChange={(e) => {
//               if (e.target.value < 0) {
//                 alert("Destination floor must be greater than 0!");
//               } else {
//                 set_destination_floor(e.target.value);
//               }
//             }}
//           />
//         </label>
//         <br />
//         <input type="submit" value="close the leaf" />
//       </form>
//     </>
//   );
// }



import React, { useEffect, useState } from "react";
import "./css/LiftBox.css";

export default function LiftBox() {
  var [total_passenger, set_total_passenger] = useState(0);
  var [initial_floor, set_initial_floor] = useState(0);
  var [destination_floor, set_destination_floor] = useState(0);
var count=1000

  useEffect(()=>{
    
  })

  const elements = ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"];

  const fetchCsrfToken = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/lift/get_csrf/", {
        method: "GET",
      });
      console.log("-------------Entered_---------------------");
      console.log(response);
      return response.headers.get("X-CSRFToken"); // Extract CSRF token from headers
    } catch (error) {
      console.log("Error fetching CSRF token:", error);
    }
  };

  const add_passenger = async () => {
    let date = new Date();
    let isoString = date.toISOString();

    try {
      let token = await fetchCsrfToken();
      const response = await fetch(
        "http://127.0.0.1:8000/lift/add_passenger_data/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": token,
          },
          body: JSON.stringify({
            no_of_passenger: total_passenger,
            initial: initial_floor,
            destination: destination_floor,
            time_slot: isoString,
          }),
        }
      );
      console.log(response);
    } catch (error) {
      console.log("----->It gives error.");
    }
  };

  const lift_up = (i_f,d_f) => {
    const floorElements = document.querySelectorAll(".box");
    count = 1000;
    let last = null;
    for (let i = i_f; i <= d_f; i++) {
      Array.from(floorElements)
        .reverse()
        .forEach((element) => {
          if (i == element.id) {
            setTimeout(() => {
              element.classList.add("current_floor");
            }, count);
            count += 1000;
            setTimeout(() => {
              element.classList.remove("current_floor");
            }, count);
            last = element;
          }
        });
    }
    setTimeout(() => {
      last.classList.add("current_floor");
    }, count);
    localStorage.setItem("last_floor",d_f);
  };

  const lift_down = (i_f,d_f) => {
    const floorElements = document.querySelectorAll(".box");
     count = 1000;
    let last = null;
    for (let i = i_f; i >= d_f; i--) {
      Array.from(floorElements).forEach((element) => {
        if (i == element.id) {
          setTimeout(() => {
            element.classList.add("current_floor");
          }, count);
          count += 1000;
          setTimeout(() => {
            element.classList.remove("current_floor");
          }, count);
          last = element;
        }
      });
    }
    setTimeout(() => {
      last.classList.add("current_floor");
    }, count);
    localStorage.setItem("last_floor",d_f);
    console.log("$$$$$$$$$$",localStorage.getItem('last_floor'));
    
  };
  const lift_travel = async (event) => {
    event.preventDefault();
  
    if (total_passenger > 0 && initial_floor > 0 && destination_floor > 0) {
      if (initial_floor == destination_floor) {
        alert("Initial floor and Destination floor must not be same.");
      } else {
        let last_floor = localStorage.getItem("last_floor") || 0;
  
        // First phase: Move to the initial floor
        if (last_floor > initial_floor) {
          await lift_down(last_floor, initial_floor);
        } else if (last_floor < initial_floor) {
          await lift_up(last_floor, initial_floor);
        }
  
        // Second phase: Move to the destination floor
        if (initial_floor < destination_floor) {
            setTimeout(() => {
              lift_up(initial_floor, destination_floor);
            }, count);
        } else {
            setTimeout(() => {
              lift_down(initial_floor, destination_floor);
            }, count);
            
        }
  
        // Add passenger data to the server after the lift operation is complete
        await add_passenger();
      }
    } else {
      alert(
        `All fields are required: 
          No of passengers: ${total_passenger}, 
          Initial floor: ${initial_floor}, 
          Destination floor: ${destination_floor}`
      );
    }
  
    console.log(total_passenger, initial_floor, destination_floor);
    console.log("Last floor:", localStorage.getItem("last_floor"));
  };
  
  // const lift_travel = async(event) => {
  //   event.preventDefault();
  //   if (total_passenger > 0 && initial_floor > 0 && destination_floor > 0) {
  //     if (initial_floor == destination_floor) {
  //       alert("Initial floor and Destination floor must not be same.");
  //     } else {

  //       let last_floor=localStorage.getItem('last_floor')
  //       if(last_floor>initial_floor){
  //         await lift_down(last_floor,initial_floor);
  //       }else{
  //         await lift_up(last_floor,initial_floor);
  //       }
        
  //       if (initial_floor < destination_floor) {
  //         lift_up(initial_floor,destination_floor);
  //       } else {
  //         lift_down(initial_floor,destination_floor);
  //       }
  //       add_passenger();
  //     }
  //   } else {
  //     alert(
  //       `All fields are required: 
  //         No of passengers: ${total_passenger}, 
  //         Initial floor: ${initial_floor}, 
  //         Destination floor: ${destination_floor}`
  //     );
  //   }
  //   console.log(total_passenger, initial_floor, destination_floor);
  //   console.log("$$$$$$$$$$",localStorage.getItem('last_floor'));
  // };

  return (
    <>
      <h1>LiftBox</h1>
      <div className="box-container">
        {elements.map((value, index) => {
          return (
            <div key={index + 1} id={value} className="box">
              {10 - index}
            </div>
          );
        })}
      </div>
      <form onSubmit={lift_travel}>
        <label>
          No of passengers:
          <input
            name="total_passenger"
            type="number"
            value={total_passenger}
            onChange={(e) => {
              if (e.target.value < 0) {
                alert("Passengers are always positive!");
              } else {
                set_total_passenger(e.target.value);
              }
            }}
            placeholder="Enter total passengers"
          />
        </label>
        <br />
        <label>
          Initial:
          <input
            name="initial_floor"
            type="number"
            value={initial_floor}
            placeholder="Current Floor Number"
            onChange={(e) => {
              if (e.target.value < 0) {
                alert("Initial floor must be greater than 0!");
              } else {
                set_initial_floor(e.target.value);
              }
            }}
          />
        </label>
        <br />
        <label>
          Destination:
          <input
            name="destination_floor"
            value={destination_floor}
            type="number"
            placeholder="Destination Floor Number"
            onChange={(e) => {
              if (e.target.value < 0) {
                alert("Destination floor must be greater than 0!");
              } else {
                set_destination_floor(e.target.value);
              }
            }}
          />
        </label>
        <br />
        <input type="submit" value="Start Lift" />
      </form>
    </>
  );
}
