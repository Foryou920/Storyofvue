export default {
  changeCityMutations: function(state, city) {
    state.city = city;
    try {
      if (localStorage.city) {
        localStorage.city = city;
      }
    } catch (e) {}
  }
};
