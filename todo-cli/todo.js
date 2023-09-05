const todoList = () => {
  var all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    const today = new Date().toISOString().slice(0, 10);
    return all.filter((item) => item.dueDate < today);
  };

  const dueToday = () => {
    const today = new Date().toISOString().slice(0, 10);
    return all.filter((item) => item.dueDate === today);
  };

  const dueLater = () => {
    const today = new Date().toISOString().slice(0, 10);
    return all.filter((item) => item.dueDate > today);
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
  };
};
module.exports = todoList;
