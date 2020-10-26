import { contacts } from "../static-data.js"

// I changed it from this to the new one. Uncommnent if it doesnt work later
// export default (state = contacts, action) => {
//     return state;
// }
export default function contact(state = contacts, action) {
    return state;
}

//ARRAY AUXILIAR CREADO PARA NO NECESITAR CONVERITR OBJETO CONTACTS A ARRAY CON LODASH

// const persons = [{
//     email: "Rosalia_Koch8@gmail.com",
//     name: "Lindsay Hilll DDS",
//     profile_pic: "https://s3.amazonaws.com/uifaces/faces/twitter/millinet/128.jpg",
//     status: "The literature would have us believe that a likeable rabbit is not but a tangerine.",
//     user_id: "1T4Nq395dd"
//   },
//   {
//     email: "Wilford_Herzog77@gmail.com",
//     name: "Brandon Volkman",
//     profile_pic: "https://s3.amazonaws.com/uifaces/faces/twitter/thiagovernetti/128.jpg",
//     status: "The kind-hearted pig reveals itself as a productive bird to those who look!",
//     user_id: "-J0W1bQmdf"
//   },
  
//   {
//     email: "Wilford_Herzog77@gmail.com",
//     name: "Brandon Volkman",
//     profile_pic: "https://s3.amazonaws.com/uifaces/faces/twitter/thiagovernetti/128.jpg",
//     status: "The kind-hearted pig reveals itself as a productive bird to those who look!",
//     user_id: "-J0W1dbQmf"
//   },
//   {
//     email: "Rosalia_Koch8@gmail.com",
//     name: "Lindsay Hilll DDS",
//     profile_pic: "https://s3.amazonaws.com/uifaces/faces/twitter/millinet/128.jpg",
//     status: "The literature would have us believe that a likeable rabbit is not but a tangerine.",
//     user_id: "1Td4Nq395d"
//   },
//   {
//     email: "Rosalia_Koch8@gmail.com",
//     name: "Lindsay Hilll DDS",
//     profile_pic: "https://s3.amazonaws.com/uifaces/faces/twitter/millinet/128.jpg",
//     status: "The literature would have us believe that a likeable rabbit is not but a tangerine.",
//     user_id: "1dT4Nq395d"
//   },
//   {
//     email: "Rosalia_Koch8@gmail.com",
//     name: "Lindsay Hilll DDS",
//     profile_pic: "https://s3.amazonaws.com/uifaces/faces/twitter/millinet/128.jpg",
//     status: "The literature would have us believe that a likeable rabbit is not but a tangerine.",
//     user_id: "d1T4Nq395d"
//   }
//   ]
