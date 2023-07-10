import { Link, RouterOutlet } from '@viewfly/router'

function ListTab1() {
  return () => {
    return <div>listTab1</div>
  }
}

function ListTab2() {
  return () => {
    return <div>listTab2</div>
  }
}

function ListTab3() {
  return () => {
    return <div>listTab3</div>
  }
}

export function List() {
  return () => {
    return (
      <div>
        <h3>list</h3>
        <div>
          <Link active="active" to="./tab1">
            tab1
          </Link>
          <Link active="active" to="./tab2">
            tab2
          </Link>
          <Link active="active" to="./tab3">
            tab3
          </Link>
        </div>
        <div>
          <RouterOutlet
            config={[
              {
                name: 'tab1',
                component: ListTab1,
              },
              {
                name: 'tab2',
                component: ListTab2,
              },
              {
                name: 'tab3',
                component: ListTab3,
              },
            ]}
          >
            没找到 Tab
          </RouterOutlet>
        </div>
      </div>
    )
  }
}
