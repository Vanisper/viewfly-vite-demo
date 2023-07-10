import { createApp } from "@viewfly/platform-browser";
import { Link, RouterOutlet, RootRouter } from "@viewfly/router";
import { routes } from "./router";
import { PageEnum } from "./enums/pageEnum";
import "./main.css";
import style from "./index.module.css";

import viteLogo from "/vite.svg";
import viewflyLogo from "./assets/viewfly.svg";
import { useSignal, useRef } from "@viewfly/core";

function App() {
  const counter = useSignal(0);
  const add = () => {
    counter.set(counter() + 1);
  };
  return () => {
    return (
      <>
        <div class={style.box}>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} class={style.logo} alt="Vite logo" />
          </a>
          <a href="https://viewfly.org" target="_blank">
            <img
              src={viewflyLogo}
              class={[style.logo, style.viewfly]}
              alt="Viewfly logo"
            />
          </a>
        </div>
        <div class={style.card}>
          <button onClick={add}>count is {counter()}</button>
        </div>
        <p class={style["read-the-docs"]}>
          Click on the Vite and Viewfly logos to learn more
        </p>
      </>
    );
  };
}
createApp(document.getElementById("app")!, <App />);
