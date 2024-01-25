import ListIcon from '@mui/icons-material/List';
import UsersList from "./UsersList";
import UsersCreate from "./UsersCreate";
import UsersEdit from "./UsersEdit";

export default {
  list: UsersList,
  edit: UsersEdit,
  create: UsersCreate,
  icon: ListIcon,
  options: {
    label: 'Users',
  },
};
