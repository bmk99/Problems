// -----------------------------------------
//  scene1 
// const comments = [
//   {
//     id: "com1",
//     postRef: "65e6aeecc338aad88c00c663",
//     comment: "hello",
//     image: "",
//     commentBy: {
//       _id: "kiran",
//     },
//     like: ["kiran", "anjitha"], //react is  false - then remove kiran
//     // like: [ "anjitha"], // react is true - then add kiran 

//     dislike: [],
//     pinned: false,
//     children: [],
//     edited: false,
//   },
//   {
//     _id: "com2",
//     postRef: "65e6aeecc338aad88c00c663",
//     comment: "i am big fan of surya work",
//     image: "",
//     commentBy: {
//       _id: "anjitha",
//     },
//     like: [],
//     dislike: [],
//     pinned: false,
//     children: [],
//     edited: false,
//   },
// ];
// const react = false 
// const comment = comments[0]
// if(react){
//     comment.like  = [...comment.like,"kiran"]

// }else{
//     const data = comment.like.filter(like => like !== "kiran")
//     comment.like=[...data]
//     console.log("else")

// }

// console.log(comment)
// ------------------------------------------------------------------------
// ------------------scene 2 
const comments = [
    {
      _id: "com1",
      postRef: "65e6aeecc338aad88c00c663",
      comment: "hello",
      image: "",
      commentBy: {
        _id: "kiran",
      },
      like: ["kiran", "anjitha"], //react is  false - then remove kiran
      // like: [ "anjitha"], // react is true - then add kiran 
  
      dislike: [],
      pinned: false,
      children: [],
      edited: false,
    },
    {
      _id: "com2",
      postRef: "65e6aeecc338aad88c00c663",
      comment: "i am big fan of surya work",
      image: "",
      commentBy: {
        _id: "anjitha",
      },
      like: [],
      dislike: [],
      pinned: false,
      children: [],
      edited: false,
    },
  ];
  const react = false 
  if(react){
      comments[0].like  = [...comments[0].like,"kiran"]
  
  }else{
      const data = comments[0].like.filter(like => like !== "kiran")
      comments[0].like=[...data]
      console.log("else")
  
  }
 console.log(comments[0].like.includes("kiran"))

  console.log(comments[0])

  //  scene3 

  const names =[{name:"kiran"},{name:"anjitha"}]
const data = names.map(name => (

  {...name,age:25}
)
)
console.log(data)


