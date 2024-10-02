const reacts = [
  {
    react: "like",
    count: 1,
    users: [
      {
        like: "like",
        name: "ravan",
        reactBy: {
          _id: "ravan",
        },
      },
    ],
  },
  {
    react: "love",
    count: 0,
    users: [],
  },
  {
    react: "haha",
    count: 0,
    users: [],
  },
  {
    react: "sad",
    count: 0,
    users: [],
  },
  {
    react: "wow",
    count: 0,
    users: [],
  },
  {
    react: "angry",
    count: 2,
    users: [
      {
        react: "angry",
        name: "kiran",
        reactBy: {
          _id: "kiran",
        },
      },
      {
        react: "angry",
        name: "anjitha",
        reactBy: {
          _id: "anjitha",
        },
      },
    ],
  },
];


function reactHandler(react) {
  //  after posting the react

  // --case1
  // const res = {
  //   react: "angry",
  //   name: "kiran",
  //   reactBy: {
  //     _id: "kiran",
  //   },
  // };

  // --case2

  const res = {
    react: "haha",
    name: "kiran",
    reactBy: {
      _id: "kiran",
    },
  };

  // --case3
  // const res = {
  //   react: "wow",
  //   name: "newUser",
  //   reactBy: {
  //     _id: "newUser",
  //   },
  // };

  const updatedReactsNew = [...reacts];
  console.log("66--", updatedReactsNew);
  if (check === react) {
    // Find the index of the react in the reacts array

    const index = updatedReactsNew.findIndex((x) => x.react === check);
    console.log("76", { index });
    // e i think no need to check whether the index was present or not
    if (index !== -1) {
      // Update the count property of the react
      const removeReacts = updatedReactsNew[index];
      console.log({ removeReacts });
      const filterdata = removeReacts.users.filter(
        (use) => use.reactBy._id !== user._id
      );
      console.log("87", { filterdata });

      updatedReactsNew[index] = {
        ...updatedReactsNew[index],
        count: --updatedReactsNew[index].count,
        users: filterdata,
      };
      console.log(updatedReactsNew[index]);
      console.log("111", updatedReactsNew);
    }
  } else {
    // for updating the new reaction emoji by the user
    let previousReactIf = updatedReactsNew.findIndex((x) => x.react === check);
    let newReactFromUser = updatedReactsNew.findIndex((x) => x.react === react);
    
    //     //  for removing the old reaction emoji by the user

    console.log("118", { newReactFromUser });
    console.log("119", { previousReactIf });
    if (previousReactIf !== -1) {
      const removalReacts = updatedReactsNew[previousReactIf];
      const filterdata = removalReacts.users.filter(
        (use) => use.reactBy._id !== user._id
      );
      console.log("154", { filterdata });
      updatedReactsNew[previousReactIf] = {
        ...updatedReactsNew[previousReactIf],
        count: --updatedReactsNew[previousReactIf].count,
        users: filterdata,
      };

      console.log("161", { updatedReactsNew });

      console.log("162", updatedReactsNew[5].users);
    }
    if (newReactFromUser !== -1) {
      let newUsers = [...updatedReactsNew[newReactFromUser].users, res];
      updatedReactsNew[newReactFromUser] = {
        ...updatedReactsNew[newReactFromUser],
        count: ++updatedReactsNew[newReactFromUser].count,
        users: newUsers,
      };

      console.log("133", { newUsers });
      console.log("134", { updatedReactsNew });
    }
    
  }
}
// chehcking with kiran
// --case1 - when user clicked the same emoji

// const check = "angry";
// const user = {
//   _id: "kiran",
// };
// reactHandler("angry") // when user clicked that was passed to the function

// --case 2 - when user change the emoji

const check = "angry";
const user = {
  _id: "kiran",
};
reactHandler("haha");// when user clicked that was passed to the function

//  --case3  - when user clicked the first time (i am taking new user)

// const check = 'wow'
// const user = {
//   _id : "newUser"
// }
// reactHandler("wow"); // when user clicked that was passed to the function

// if("ra" === undefined)

// ------------------------------------------------------------------
//  -----------all comementte data also included..................

// //  update the reactions
// const reacts = [
//   {
//     react: "like",
//     count: 1,
//     users: [
//       {
//         like: "like",
//         name: "ravan",
//         reactBy: {
//           _id: "ravan",
//         },
//       },
//     ],
//   },
//   {
//     react: "love",
//     count: 0,
//     users: [],
//   },
//   {
//     react: "haha",
//     count: 0,
//     users: [],
//   },
//   {
//     react: "sad",
//     count: 0,
//     users: [],
//   },
//   {
//     react: "wow",
//     count: 0,
//     users: [],
//   },
//   {
//     react: "angry",
//     count: 2,
//     users: [
//       {
//         react: "angry",
//         name: "kiran",
//         reactBy: {
//           _id: "kiran",
//         },
//       },
//       {
//         react: "angry",
//         name: "anjitha",
//         reactBy: {
//           _id: "anjitha",
//         },
//       },
//     ],
//   },
// ];

// // chehcking with kiran
// // case1 - when user clicked the same like....
// // console.log()
// const check = "love";
// const user = {
//   _id: "kiran",
// };

// const reactHandler = (react) => {
//   //  after posting the react
//   const res = {
//     react: "angry",
//     name: "kiran",
//     reactBy: {
//       _id: "kiran",
//     },
//   };

//   const updatedReactsNew = [...reacts];
//   console.log("66--", updatedReactsNew);
//   if (check === react) {
//     // Find the index of the react in the reacts array

//     const index = updatedReactsNew.findIndex((x) => x.react === check);
//     console.log("76", { index });
//     // e i think no need to check whether the index was present or not
//     if (index !== -1) {
//       // Update the count property of the react
//       const removeReacts = updatedReactsNew[index];
//       console.log({removeReacts})
//       const filterdata = removeReacts.users.filter(
//         (use) => use.reactBy._id !== user._id
//       );
//       console.log("87", { filterdata });

//       updatedReactsNew[index] = {
//         ...updatedReactsNew[index],
//         count: --updatedReactsNew[index].count,
//         users: filterdata,
//       };
//       console.log(updatedReactsNew[index])

//       // ----------------------------
//       // const updatedReacts = updatedReactsNew.map((reaction) => {
//       //   if (reaction.react === check) {
//       //     const filteredUsers = reaction.users.filter(
//       //       (user) => user.reactBy._id !== user._id
//       //     );
//       //     console.log(filteredUsers)
//       //     return {
//       //       ...reaction,
//       //       count: reaction.count - 1,
//       //       users: filteredUsers,
//       //     };
//       //   }
//       //   return reaction;
//       // });
//       // -----------------------------

//       console.log("111", updatedReactsNew);
//     }
//   } else {
//     // for updating the new reaction emoji by the user
//     let index = updatedReactsNew.findIndex((x) => x.react === react);
//     //     //  for removing the old reaction emoji by the user
//     let index1 = updatedReactsNew.findIndex((x) => x.react === check);

//     console.log("118", { index });
//     console.log("119", { index1 });
//     if (index !== -1) {
//       let newUsers = [...updatedReactsNew[index].users, res];
//       // const reactsNew1 = updatedReactsNew.map(react=> {
//       //   if(react.react === react){

//       //     return {
//       //       ...react,
//       //       count:++react.count,
//       //       users:newUsers
//       //     }
//       //   }

//       // })

//       updatedReactsNew[index] = {
//         ...updatedReactsNew[index],
//         count: ++updatedReactsNew[index].count,
//         users: newUsers,
//       };

//       console.log("133", { newUsers });
//       console.log("134", { updatedReactsNew });
//       console.log("135", updatedReactsNew[5].users);
//     }
//     if (index1 !== -1) {
//       const removalReacts = updatedReactsNew[index1];
//       const filterdata = removalReacts.users.filter(
//         (use) => use.reactBy._id !== user._id
//       );
//       console.log("154", { filterdata });
//       updatedReactsNew[index1] = {
//         ...updatedReactsNew[index1],
//         count: --updatedReactsNew[index1].count,
//         users: filterdata,
//       };

//       console.log("161", { updatedReactsNew });
//       console.log("162", updatedReactsNew[5].users);
//       console.log("163", updatedReactsNew[1].users);
//     }
//   }
// };

// reactHandler("angry");
