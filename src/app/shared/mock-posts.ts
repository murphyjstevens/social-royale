import { Post } from './models/post';

export const POSTS: Post[] = [
  { id: 1, creatorId: 1, submittedDate: new Date(), title:"Clever Title", message: "Test123", score: 5 },
  { id: 2, creatorId: 2, submittedDate: new Date("2019-08-22"), title:"Clever Title2", message: "Test123", score: -2 },
  { id: 3, creatorId: 1, submittedDate: new Date("2018-08-23"), title:"Clever Title3", message: "Test123", score: 3 },
  { id: 4, creatorId: 2, submittedDate: new Date("2019-03-22"), title:"Clever Title4", message: "Test123", score: 150 },
  { id: 5, creatorId: 3, submittedDate: new Date("2019-01-01"), title:"Clever Title5", message: "Test123", score: 5002 }
]