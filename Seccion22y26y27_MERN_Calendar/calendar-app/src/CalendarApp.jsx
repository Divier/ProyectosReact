import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { getEnvVariables } from "./helpers";
import { AppRouter } from "./router";
import { store } from "./store";

const { BASE_URL } = getEnvVariables();

export const CalendarApp = () => {
  return (
    <Provider store={ store }>
      <BrowserRouter basename={BASE_URL}>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};
