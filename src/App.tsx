import { Link, RootRouter, RouterOutlet } from "@viewfly/router";
import { routes } from "./route";

import { HelloViewfly, count } from "./components/HelloViewfly";
import { PageEnum } from "./enums/pageEnum";

import img0 from "./assets/images/1.jpg";
import img1 from "./assets/images/2.jpg";
import { onMounted, useEffect, useRef, useSignal } from "@viewfly/core";
import { fullScreenRef } from "./hooks/fullScreenHook";
import { useProduce } from '@viewfly/hooks';

export function App() {
  return () => {
    return (
      <>
        <HelloViewfly >
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
          <h4>事件测试(双击图片局部dom全屏){count()}</h4>
          <img
            ref={fullScreenRef}
            src={count() % 2 ? img0 : img1}
            width="100%"
          />
          <hr />
        </HelloViewfly>
      </>
    );
  };
}
