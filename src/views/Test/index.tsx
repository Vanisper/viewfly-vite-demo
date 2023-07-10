import { scopedCSS } from "@viewfly/scoped-css";
import style from "./style.module.less";
import { FullscreenHelper } from "../../hooks/fullScreenHook";
import { useRef } from "@viewfly/core";
import image1 from "../../assets/images/1.jpg";

const nodeRef = useRef<HTMLElement>((node) => {
  const fullScreen = new FullscreenHelper(node);
  node.addEventListener("dblclick", () => {
    fullScreen.toggle();
  });
});

export const Test = scopedCSS(style, () => {
  return () => {
    return (
      <div>
        <h1>指令测试</h1>
        <div ref={[nodeRef]} class={style.box1}>
          1
        </div>
        <div ref={[nodeRef]} class={style.box2}>
          2
        </div>
        <img
          src={image1}
          style={{
            height: "200px",
          }}
        />
      </div>
    );
  };
});
