// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Try programiz.pro");

// const parents = {}

// parents['elll'] = {name :"kiran"}
// console.log(parents)

// // Define sample comments
// const comments = [
//   { _id: "CommentA", content: "This is comment A", parent: null },
//   { _id: "CommentB", content: "Reply to comment A", parent: "CommentA" },
//   { _id: "CommentC", content: "Reply to comment B", parent: "CommentB" },
// ];

// // Initialize variables
// let commentParents = {};
// let rootComments = [];

// // Process each comment
// for (const comment of comments) {
//   if (comment.parent) {
//     // If the comment has a parent, add it as a child to its parent
//     const commentParent = commentParents[comment.parent];
//     if (!commentParent.children) {
//       commentParent.children = [];
//     }
//     commentParent.children.push(comment);
//   } else {
//     // If the comment doesn't have a parent, it's a root comment
//     rootComments.push(comment);
//   }

//   // Store the comment in commentParents for future reference
//   commentParents[comment._id] = comment;
// }

// console.log("Root Comments:", rootComments);
// console.log("Comment Hierarchy:", commentParents);

// -----------------------------------------------
const comments = [
  {
    _id: "A2",
    commenter: {
      username: "kiran29",
    },
    post: "post1",
    content: "I am A2 Reply to A1  ",
    parent: "A1",
    children: [],
  },
  {
    _id: "A1",
    commenter: {
      username: "kiran29",
    },
    post: "post1",
    content: "I am A1",
    children: [],
  },
];

let commentParents = {};
let rootComments = [];

for (let i = 0; i < comments.length; i++) {
  let comment = comments[i];
  commentParents[comment._id] = comment;
}
console.log(commentParents);
console.log("----------------------");
// console.log(comments)

for (let i = 0; i < comments.length; i++) {
  const comment = comments[i];
  console.log("start  ", i, comment);
  console.log("---------seperating if the parent present ", i);
  if (comment.parent) {
    let commentParent = commentParents[comment.parent];
    console.log(commentParent);

    commentParent.children = [...commentParent.children, comment];
    console.log("--------after updating the children common parent ", i);
    console.log(commentParent);
    console.log("---------now comment ", i);
    console.log("inside end", comment);
    console.log("end loop ---------");
  } else {
    rootComments = [...rootComments, comment];
  }
}

console.log(comments);
console.log(rootComments);

console.log("88888888888888888888");
//
const user = [
  { name: "kiran", children: [] },
  { name: "anjitha", parent: "kiran", children: [] },
];

// Extract the userP object from the user array
let userP = user[1];
let userParents = []
// Store the first user object in the userParents object using its name as the key

userParents[0] = user[0]
console.log(userParents);
// Add userP as a child to the corresponding parent user object in userParents
userParents[0]["children"].push(user[1]);

console.log({userParents});
console.log({user});

console.log('again.........')

let userP1 = user[1];
let userParents1 = user[0];
console.log({userParents1})
console.log({userParents})

userParents1.children = [...userParents[0].children, userP];
console.log({userParents1})
console.log({userParents});
console.log({user});

userParents.map((userParetn) => console.log(userParetn));


// ----------------------
console.log("9999999999999999999999");
const a = [{ chil: [{ name: "anjitha" }] }, { name: "krian" }];
const c = a[1];
const b = a[0];
b.chil = [...b.chil, b];
console.log("b", b);
console.log("c", c);
console.log("-", a);

const arr2 = [{ score: [12, 123, 41, 2] }, { score1: [] }];
const a1 = arr2[1];
a1.score1 = [...a1.score1, { name: "vana" }];
console.log(a1);
console.log(arr2);

const obj = {};

// --------------------------------------
// take 1 faield
// var users = [
//   { name: "kiran", children: [] },
//   { name: 'anjitha', parent: "kiran", children: [] },
//   { name: "john", parent:"anjitha",children: [] },
// ];

// const originalComment = users.reduce((accumulator,comment,index)=>{
//   let com = comment
//   console.log("",accumulator)
//   console.log(comment)
//   if(comment.parent){

//     users.map(user => {
//       if(comment.name === user?.parent){
//         console.log("inside")
//         let originalUser = user
//         originalUser.children =[...originalUser.children,comment]
//       }
//     })
//   }
//    return accumulator.push(comment)

// },[])
// console.log(originalComment)
// take 1 fialed

var users = [
  { name: "kiran", children: [] },
  { name: "anjitha", parent: "kiran", children: [] },
  { name: "john", parent: "anjitha", children: [] },
];

const originalComments = users.reduce((accumulator, comment) => {
  if (comment.parent) {
    users.forEach((user) => {
      if (comment.parent === user.name) {
        user.children.push(comment);
      }
    });
  } else {
    accumulator.push(comment);
  }

  return accumulator;
}, []);

console.log(originalComments);

// ----------------------------------------------------------------------
