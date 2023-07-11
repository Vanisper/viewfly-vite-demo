import { JSXElement, Signal, useEffect, useSignal } from "@viewfly/core";
import viewflyLogo from "../../assets/viewfly.svg";
import viteLogo from "/vite.svg";
import style from "./index.module.less";

export const HelloViewfly = (props) => {
  const parentCount = props.count as Signal<number>;
  const count = useSignal(parentCount());
  useEffect(
    () => count(),
    (newValue) => {
      // 更新父级的count
      parentCount.set(newValue);
    }
  );
  return () => {
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
  };
};
