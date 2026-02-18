import React from 'react'
import Pattern1 from './components/Pattern1'
import Pattern2 from './components/Pattern2'
import Pattern3 from './components/Pattern3'
import Pattern4 from './components/Pattern4'

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>Datepicker サンプルパターン比較 - React用</h1>
      </div>

      {/* 比較表 */}
      <div className="comparison-table-container">
        <h2>機能比較表（React向け）</h2>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>パターン</th>
              <th>バンドルサイズ</th>
              <th>カスタマイズ性</th>
              <th>時間ピッカーUI</th>
              <th>React対応</th>
              <th>おすすめ度</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pattern-name pattern-1-name">1. HTML5標準</td>
              <td><span>0KB</span></td>
              <td>△ 限定的</td>
              <td>△ シンプル</td>
              <td>○ 使用可能</td>
              <td><span>★★★</span></td>
            </tr>
            <tr>
              <td className="pattern-name pattern-2-name">2. react-flatpickr</td>
              <td><span>15KB</span></td>
              <td>◎ 高い</td>
              <td>○ 良好</td>
              <td>◎ 公式Reactラッパー</td>
              <td><span>★★★★★</span></td>
            </tr>
            <tr>
              <td className="pattern-name pattern-3-name">3. react-datepicker</td>
              <td><span>中 (~50KB)</span></td>
              <td>◎ 高い</td>
              <td>◎ 優秀</td>
              <td>◎ React専用</td>
              <td><span>★★★★</span></td>
            </tr>
            <tr>
              <td className="pattern-name pattern-4-name">4. @mui/x-date-pickers</td>
              <td><span>大 (~200KB)</span></td>
              <td>○ MUI準拠</td>
              <td>◎ 優秀</td>
              <td>◎ React専用</td>
              <td><span>★★★★</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* パターン一覧 */}
      <div className="patterns-container">
        <Pattern1 />
        <Pattern2 />
        <Pattern3 />
        <Pattern4 />
      </div>
    </div>
  )
}

export default App