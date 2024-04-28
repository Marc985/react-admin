import * as React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const CommentEdit = (props:any) => (
    <Edit {...props}>
        <SimpleForm>
         
            <TextInput source="body" />
        </SimpleForm>
    </Edit>
);

export default CommentEdit;