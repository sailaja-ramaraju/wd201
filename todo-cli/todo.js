/* eslint-disable*/
const todoList = () => {
    var all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
    const overdue = () => {
      var overdue = []
      for (let i = 0; i < all.length; i++) {
        if (all[i].dueDate === yesterday) {
            overdue.push(all[i]);
        }
      }
      return overdue;
    }
    const dueToday = () => {
        var dueToday = []
        for (let i = 0; i < all.length; i++) {
          if (all[i].dueDate === today) {
              dueToday.push(all[i]);
          }
        }
        return dueToday;
    }
    const dueLater = () => {
        var dueLater = []
        for (let i = 0; i < all.length; i++) {
          if (all[i].dueDate === tomorrow) {
              dueLater.push(all[i]);
          }
        }
        return dueLater;
    }
    const toDisplayableList = (list) => {
        let lists = '';
        for (let i = 0; i < list.length; i++) {
            if (list[i].completed === true) {
                lists += '[x] ';
                lists += list[i].title + " ";
                if (list[i].dueDate !== today) {
                lists += list[i].dueDate;
                }
                lists += "\n";
            }
            else if (list[i].completed !== true) {
                lists += '[] ';
                lists += list[i].title + " ";
                if (list[i].dueDate !== today) {
                lists += list[i].dueDate;
                }
                lists += "\n";
            }
        }
        return lists;
    }
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList
    };
  };
module.exports = todoList