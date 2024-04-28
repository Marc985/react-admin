import { Button, Datagrid, List, Pagination, ReferenceField, TextField ,useRecordContext} from "react-admin"
import { useRedirect } from "react-admin";

const PostList=(props:any)=>{
    const record= useRecordContext()
    const idPost=record?record.id:null;
    const redirect= useRedirect();
    const redirectUser=(id:any)=>{
       
       console.log("io e",id);
       

        redirect("/posts/"+id+"/comments")
        
    }

  return  <List {...props} perPage={10} pagination={<Pagination/>} >
        <Datagrid >
            <TextField source="id" ></TextField>
            <TextField source="title"/>
            <TextField source="body"/>
            <ReferenceField source="userId" reference="users">
                <TextField source="name"/>
            </ReferenceField>
            <Button onClick={(event)=>redirectUser(event.detail)} >
            <div>see comments</div>
        </Button>
        </Datagrid>
       
       
    </List>
}

export default PostList;