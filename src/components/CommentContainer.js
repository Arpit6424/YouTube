import React from "react";
import { USER_ICON } from "../constant";

const commentsData = [
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet consectetur.",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet consectetur.",
    replies: [
      {
        name: "Prince",
        text: "Lorem ipsum dolor sit amet consectetur.",
        replies: [
          {
            name: "Akshay Saini",
            text: "Lorem ipsum dolor sit amet consectetur.",
            replies: [
              {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet consectetur.",
                replies: [],
              },
              {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet consectetur.",
                replies: [
                  {
                    name: "Akshay Saini",
                    text: "Lorem ipsum dolor sit amet consectetur.",
                    replies: [],
                  },
                  {
                    name: "Akshay Saini",
                    text: "Lorem ipsum dolor sit amet consectetur.",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "Akshay Saini",
            text: "Lorem ipsum dolor sit amet consectetur.",
            replies: [],
          },
          {
            name: "Akshay Saini",
            text: "Lorem ipsum dolor sit amet consectetur.",
            replies: [],
          },
        ],
      },
      {
        name: "Prince",
        text: "Lorem ipsum dolor sit amet consectetur.",
        replies: [],
      },
      {
        name: "Prince",
        text: "Lorem ipsum dolor sit amet consectetur.",
        replies: [],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet consectetur.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img className="w-12 h-12" src={USER_ICON} alt="user_logo" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, ind) => (
    <div key={ind}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black m-4">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-2 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
