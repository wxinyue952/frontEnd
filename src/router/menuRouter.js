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
