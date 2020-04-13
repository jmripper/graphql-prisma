import { Prisma } from "prisma-binding";

const prisma = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: "http://localhost:4466",
  secret: 'thisismysupersecrettext'
});

export { prisma as default }

// prisma.query.users(null, '{ id name posts { id title } }').then((data) => {
//     console.log(JSON.stringify(data, undefined, 2))
// })

// prisma.query.comments(null, '{ id text author { id name } }').then((data) => {
//     console.log(JSON.stringify(data, undefined, 2))
// })

// prisma.mutation
//   .createPost(
//     {
//       data: {
//         title: "My GraphQL post is live.",
//         body: "This is the body of the post.",
//         published: true,
//         author: {
//           connect: {
//             id: "ck8rcz63n003h0998mtwlfyj1",
//           },
//         },
//       },
//     },
//     " { id title body published }"
//   )
//   .then((data) => {
//     console.log(data);
//     return prisma.query.users(null, '{ id name posts { id title }}')
//   }).then((data) => {
//     console.log(JSON.stringify(data, undefined, 2))
//   })

// prisma.mutation.updatePost({
//     where: {
//         id: "ck8rcz63n003h0998mtwlfyj1"
//     },
//     data: {
//         body: "This is how to get started with Graphql...",
//         published: true
//     }
// }, '{ id }').then((data) => {
//     return prisma.query.posts(null, '{ id title body published }')
// }).then((data) => {
//     console.log(data)
// })

// const createPostForUser = async (authorId, data) => {
//   const userExists = await prisma.exists.User({ id: authorId });

//   if (!userExists) {
//     throw new Error("User not found.");
//   }

//   const post = await prisma.mutation.createPost(
//     {
//       data: {
//         ...data,
//         author: {
//           connect: {
//             id: authorId,
//           },
//         },
//       },
//     },
//     "{ author { id name email posts { id title published } } }"
//   );
//   return post.author;
// };

// const updatePostForUser = async (postId, data) => {
//   const postExists = await prisma.exists.Post({ id: postId });

//   if (!postExists) {
//     throw new Error("Post not found.");
//   }

//   const post = await prisma.mutation.updatePost(
//     {
//       where: {
//         id: postId,
//       },
//       data,
//     },
//     "{ author { id name email posts { id title published } } }"
//   );
//   return post.author;
// };
