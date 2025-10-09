import { markRaw } from 'vue'
import IconMaterialSymbolsCodeBlocksOutline from '~icons/material-symbols/code-blocks-outline'

export const menuRouter = [
  {
    path: 'devtools',
    name: 'DevTools',
    meta: {
      title: '开发工具',
      icon: markRaw(IconMaterialSymbolsCodeBlocksOutline),
    },
    redirect: { name: 'RegularPage' },
    children: [
      {
        path: 'regular',
        name: 'RegularPage',
        meta: {
          title: '正则在线校验',
        },
        component: () => import('@/views/RegularPage.vue'),
      },
    ],
  },
]
// export const menuRouterFormat = (router, parentPath) => {
//   return router.map((item) => {
//     // 拼接路由，例：'devtools' -> '/devtools'  'regular' -> '/devtools/regular'
//     item.path = parentPath ? `${parentPath}/${item.path}` : `/${item.path}`

//     // 存在 children 属性，且 children 数组长度大于 0，开始递归
//     if (item.children && item.children.length > 0) {
//       item.children = menuRouterFormat(item.children, item.path)
//     }

//     return Object.assign({}, item, item.meta || {})
//   })
// }

export const menuRouterFormat = (router, parentPath = '') => {
  return router.map((item) => {
    const newItem = { ...item } // ✅ 新对象，不动原始数据
    const fullPath = parentPath ? `${parentPath}/${item.path}` : `/${item.path}`

    newItem.path = fullPath

    if (item.children && item.children.length > 0) {
      newItem.children = menuRouterFormat(item.children, fullPath)
    }

    return { ...newItem, ...(item.meta || {}) }
  })
}

// 解析后 路由菜单列表
export const menuRouterFormatList = menuRouterFormat([...menuRouter])
