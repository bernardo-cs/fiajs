const counter = (state, action) => {
  state = state ? state : 0;
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const store = Redux.createStore(counter);

const render = () => {
  document.getElementById('counter').textContent = store.getState();
};

store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({type: 'INCREMENT'});
});
