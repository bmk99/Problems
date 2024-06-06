
//  update the reactions 
const reacts = [
  {
    react: "like",
    count: 1,
    users: [
      {
        like: "like",
        name: "anjitha",
        reactBy: {
          _id: "anjitha",
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
          _id: "harsha",
        },
      },
    ],
  },
];
// console.log()
const check = "angry";
const user = {
  _id: "kiran",
};

const reactHandler = (react) => {
  //  after posting the react
  const res = {
    react: "angry",
    name: "kiran",
    reactBy: {
      _id: "kiran",
    },
  };

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
      const filterdata = removeReacts.users.filter(
        (use) => use.reactBy._id !== user._id
      );
      console.log("87", { filterdata });

      updatedReactsNew[index] = {
        ...updatedReactsNew[index],
        count: --updatedReactsNew[index].count,
        users: filterdata,
      };
      
      // ----------------------------
      // const updatedReacts = updatedReactsNew.map((reaction) => {
      //   if (reaction.react === check) {
      //     const filteredUsers = reaction.users.filter(
      //       (user) => user.reactBy._id !== user._id
      //     );
      //     console.log(filteredUsers)
      //     return {
      //       ...reaction,
      //       count: reaction.count - 1,
      //       users: filteredUsers,
      //     };
      //   }
      //   return reaction;
      // });
      // -----------------------------

      console.log("111", updatedReactsNew);
    }
  } else {
    // for updating the new reaction emoji by the user
    let index = updatedReactsNew.findIndex((x) => x.react === react);
    //     //  for removing the old reaction emoji by the user
    let index1 = updatedReactsNew.findIndex((x) => x.react === check);

    console.log("118", { index });
    console.log("119", { index1 });
    if (index !== -1) {
      let newUsers = [...updatedReactsNew[index].users, res];
      // const reactsNew1 = updatedReactsNew.map(react=> {
      //   if(react.react === react){

      //     return {
      //       ...react,
      //       count:++react.count,
      //       users:newUsers
      //     }
      //   }

      // })

      updatedReactsNew[index] = {
        ...updatedReactsNew[index],
        count: ++updatedReactsNew[index].count,
        users: newUsers,
      };

      console.log("133", { newUsers });
      console.log("134", { updatedReactsNew });
      console.log("135", updatedReactsNew[5].users);
    }
    if (index1 !== -1) {
      const removalReacts = updatedReactsNew[index1];
      const filterdata = removalReacts.users.filter(
        (use) => use.reactBy._id !== user._id
      );
      console.log("154", { filterdata });
      updatedReactsNew[index1] = {
        ...updatedReactsNew[index1],
        count: --updatedReactsNew[index1].count,
        users: filterdata,
      };

      console.log("161", { updatedReactsNew });
      console.log("162", updatedReactsNew[5].users);
      console.log("163", updatedReactsNew[1].users);
    }
  }
};

reactHandler("angry");
