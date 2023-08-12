import React from 'react'
import { ConfigProvider } from 'antd'
import ar from 'antd/es/locale/ar_EG'
import en from 'antd/es/locale/en_GB'
import ja from 'antd/es/locale/ja_JP'
import ko from 'antd/es/locale/ko_KR'
import vi from 'antd/es/locale/vi_VN'
import zh from 'antd/es/locale/zh_CN'


const antI18n = {
  ar,
  'zh-CN': zh,
  ko,
  ja,
  vi,
  en,
}

export function ConfigLayout({ children, lang = 'zh-CN' }) {

  return (
    <ConfigProvider locale={antI18n[lang]}>
      <p>当前语言：{lang}</p>
      {children}
    </ConfigProvider>
  )
}

export default ConfigLayout
