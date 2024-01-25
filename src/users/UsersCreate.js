import {
  required,
  Create,
  SimpleForm,
  TextInput,
} from 'react-admin';

const UsersCreate = () => {
  return (
      <Create mutationMode="pessimistic" redirect="list">
          <SimpleForm>
              <TextInput source="name" validate={[required()]} fullWidth autoFocus />
          </SimpleForm>
      </Create>
  );
};

export default UsersCreate