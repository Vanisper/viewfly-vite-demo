import { inject } from '@viewfly/core'
import { Router } from '@viewfly/router'
import { PageEnum } from '../../enums/pageEnum'

export function Home() {
  const router = inject(Router)
  return () => {
    return (
      <div>
        <div>home</div>
        <button
          type="button"
          onClick={() => {
            router.navigateTo(`/${PageEnum.BASE_LIST}`)
          }}
        >
          跳转到列表
        </button>
      </div>
    )
  }
}
