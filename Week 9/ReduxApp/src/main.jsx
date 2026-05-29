// provider Makes Redux store available globally to all components.
//UseDispatch Send increment action to reducer

import ReactDOM from "react-dom/client";

import App from "./App";

import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <Provider store={store}>
    <App />
  </Provider>
);