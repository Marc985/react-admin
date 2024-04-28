import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  Pagination,
  
  
} from "react-admin";
import {Route} from "react-router-dom";
import { dataProvider } from "./dataProvider";
import PostList from "./component/post/PostList";
import CreatePost from "./component/post/CreatePost";
import PostUpdate from "./component/post/PostUpdate";
import CommentList from "./component/comment/CommentList";
import CreateComment from "./component/comment/CreateComment";
import CommentEdit from "./component/comment/UpdateComment";


export const App = () => <Admin dataProvider={dataProvider}>
  <Resource name="posts" list={PostList} edit={PostUpdate} create={CreatePost} >
 
</Admin>;
