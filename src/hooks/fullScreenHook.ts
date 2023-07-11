// import { ComponentPublicInstance, Directive, DirectiveBinding } from "vue";
import { useRef } from '@viewfly/core';
import { v4 as uuidv4 } from 'uuid'

const __fullScreen__ = '__fullScreen__'
interface Element extends HTMLElement {
    __fullScreen__?: (event: MouseEvent) => void;
}

export class FullscreenHelper {
    private elem: HTMLElement | null

    constructor(dom: HTMLElement) {
        this.elem = dom
    }

    public enterFullscreen = async () => {
        if (this.elem?.requestFullscreen) {
            await this.elem.requestFullscreen()
            //@ts-ignore
        } else if (this.elem?.webkitRequestFullscreen) { /* Safari */
            //@ts-ignore
            await this.elem.webkitRequestFullscreen()
            //@ts-ignore
        } else if (this.elem?.msRequestFullscreen) { /* IE11 */
            //@ts-ignore
            await this.elem.msRequestFullscreen()
        }
    }

    public async exitFullscreen(): Promise<void> {
        if (document.exitFullscreen) {
            await document.exitFullscreen()
            //@ts-ignore
        } else if (document.webkitExitFullscreen) {
            /* Safari */
            //@ts-ignore
            await document.webkitExitFullscreen()
            //@ts-ignore
        } else if (document.msExitFullscreen) {
            /* IE11 */
            //@ts-ignore
            await document.msExitFullscreen()
        }
    }

    public isFullscreen(): boolean {
        return !!(document.fullscreenElement || //@ts-ignore
            document.webkitFullscreenElement || //@ts-ignore
            document.mozFullScreenElement || //@ts-ignore
            document.msFullscreenElement) && this.elem === document.fullscreenElement
    }

    public toggle = async (): Promise<void> => {
        if (this.isFullscreen()) {
            await this.exitFullscreen()
        } else {
            await this.enterFullscreen()
        }
    }
}

// // vue3.0 自定义指令
// export default {
//     mounted(el: Element, binding: DirectiveBinding<{
//         modifiers: {
//             click: boolean;
//             dblclick: boolean;
//         };
//     }>, _vnode) {
//         // uuid: 通用唯一识别码
//         const uuid = uuidv4();
//         // console.log("指令挂载", binding)
//         // 要想自定义指令的数据可更新 需要设置一个key
//         // https://www.iteye.com/blog/wangchuanyin-2439617
//         // !_vnode.key && (_vnode.key = "_fullScreen_key_" + uuid); // 此处添加key可能是组件重复挂载的原因，重复添加了key?导致组件丢失
//         const event = binding.modifiers.click ? "click" : "dblclick";
//         const helper = new FullscreenHelper(el);
//         el[__fullScreen__] = async () => {
//             await helper.toggle();
//         };
//         el.addEventListener(event, el[__fullScreen__]);
//     },
//     unmounted(el: Element, binding: DirectiveBinding<{
//         modifiers: {
//             click: boolean;
//             dblclick: boolean;
//         };
//     }>) {
//         // console.log("指令卸载", binding);
//         const event = binding.modifiers.click ? "click" : "dblclick";
//         if (el && el[__fullScreen__]) {
//             el.removeEventListener(event, el[__fullScreen__]);
//             delete el[__fullScreen__];
//         }
//     },
// } as Directive;


// ViewFly useRef
export const fullScreenRef = useRef<HTMLElement>((element) => {
    const fullScreen = new FullscreenHelper(element);
    element.addEventListener("dblclick", () => {
        fullScreen.toggle();
    });
});