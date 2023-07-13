import { JSXElement, Signal, useEffect, useSignal } from "@viewfly/core";
import viewflyLogo from "../../assets/viewfly.svg";
import viteLogo from "/vite.svg";
import style from "./index.module.less";

// 可全局调用
export const count = useSignal(0);

export const HelloViewfly = (props) => {
  return {
    $render() {
      return (
        <>
          <div>
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
          <h1>Vite + Viewfly</h1>
          <div class={style.card}>
            <div>
              <button onClick={() => count.set(count() + 1)}>
                count is {count()}
              </button>
              {props.children as JSXElement[]}
            </div>
            <p>
              编辑 <code>src/App.tsx</code> 并保存以体验 HMR
            </p>
          </div>
          <p class={style["read-the-docs"]}>
            Click on the Vite and Viewfly logos to learn more
          </p>
        </>
      );
    },
  };
};
