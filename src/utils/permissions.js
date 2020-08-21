export default {
  // read todos, complete todos assigned to them
  LOW: 1,
  // create todos, and assign themselves to todos
  REGULAR: 2,
  // (un)assign anyone with lower level to todos, edit any todos
  ADMIN: 3,
  // can do anything. Only 1 user should have this permission at a time
  OWNER: 4,
};
