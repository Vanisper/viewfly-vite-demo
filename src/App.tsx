import { Link, RootRouter, RouterOutlet } from "@viewfly/router";
import { routes } from "./route";

import { HelloViewfly } from "./components/HelloViewfly";
import { PageEnum } from "./enums/pageEnum";

import img0 from "./assets/images/1.jpg";
import img1 from "./assets/images/2.jpg";
import { useEffect, useRef, useSignal } from "@viewfly/core";
import { FullscreenHelper } from "./hooks/fullScreenHook";

export function App() {
  const imgRef = useRef<HTMLElement>((element) => {
    const fullScreen = new FullscreenHelper(element);
    element.addEventListener("dblclick", () => {
      fullScreen.toggle();
    });
  });

  const count = useSignal(0);
  useEffect(
    () => count(),
    (newValue, oldValue) => {
      console.log(
        `数据在子元素中被改变, 数据由 ${oldValue} 变成了 ${newValue}`
      );
    }
  );

  return () => {
    return (
      <>
        <HelloViewfly count={count}>
          <hr />
          <RootRouter>
            <h4>路由测试</h4>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Link active="active" exact to={`./${PageEnum.BASE_HOME}`}>
                Home
              </Link>
              <Link
                active="active"
                to={`./${PageEnum.BASE_LIST}`}
                queryParams={{ a: "xx" }}
              >
                List
              </Link>
              <Link active="active" to={`./${PageEnum.BASE_DETAIL}`}>
                Detail
              </Link>
            </div>
            <RouterOutlet config={routes}>未匹配到任何路由</RouterOutlet>
          </RootRouter>
          <hr />
          <h4>事件测试(双击图片局部dom全屏)</h4>
          <img ref={imgRef} src={count() % 2 ? img0 : img1} width="100%" />
          <hr />
        </HelloViewfly>
      </>
    );
  };
}
