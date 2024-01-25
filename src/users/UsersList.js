import { DatagridConfigurable, List, TextField } from "react-admin"

const UsersList = props => (
  <List
    {...props}
    perPage={50}
    empty={false}
  >
    <DatagridConfigurable
      rowClick="edit"
      bulkActionButtons={false}
    >
      <TextField source="id" maxWidth="350px" />
      <TextField source="name" label="Nom" />
    </DatagridConfigurable>
  </List>
)

export default UsersList