
import { Datagrid, List, ReferenceField, TextField } from "react-admin"
import {useParams} from "react-router-dom";
const commentList=()=>{
    const {id}=useParams();
    return (
        <List resource="comments" filter={{postId:id}}>
            <Datagrid>
                <TextField source="id"></TextField>
                <TextField source="name"/>
                <TextField source="email"/>
                <TextField source="body"/>
            </Datagrid>
        </List>
    )
}
export default commentList;