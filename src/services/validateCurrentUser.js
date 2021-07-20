const validateCurrentUser = (user, roll) => {
  if (user.id === roll.userId) {
    return true
  }
};
  
export default validateCurrentUser