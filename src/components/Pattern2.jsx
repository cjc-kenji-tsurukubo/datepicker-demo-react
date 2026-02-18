import React, { useState } from 'react'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/flatpickr.css'
import 'flatpickr/dist/l10n/ja.js'

function Pattern2() {
  const [date, setDate] = useState(new Date('2024-01-15'))
  const [time, setTime] = useState(new Date('2024-01-15T14:30'))
  const [datetime, setDatetime] = useState(new Date('2024-01-15T14:30'))

  return (
    <div className="pattern-card">
      <div className="pattern-header">
        <h2>パターン2: react-flatpickr</h2>
        <p className="subtitle">Flatpickrの公式Reactラッパー（15KB gzip）</p>
      </div>
      
      <div className="form-group">
        <label>日付のみ</label>
        <Flatpickr
          value={date}
          onChange={([date]) => setDate(date)}
          options={{
            locale: 'ja',
            dateFormat: 'Y-m-d',
          }}
          placeholder="日付を選択"
        />
      </div>
      
      <div className="form-group">
        <label>時間のみ</label>
        <Flatpickr
          value={time}
          onChange={([date]) => setTime(date)}
          options={{
            enableTime: true,
            noCalendar: true,
            dateFormat: 'H:i',
            time_24hr: true,
          }}
          placeholder="時間を選択"
        />
      </div>
      
      <div className="form-group">
        <label>日付 + 時間</label>
        <Flatpickr
          value={datetime}
          onChange={([date]) => setDatetime(date)}
          options={{
            locale: 'ja',
            enableTime: true,
            dateFormat: 'Y-m-d H:i',
            time_24hr: true,
          }}
          placeholder="日付と時間を選択"
        />
      </div>
      
      <div className="features">
        <h3>✓ メリット</h3>
        <ul>
          <li>軽量（15KB gzip）</li>
          <li>公式Reactラッパーで統合が簡単</li>
          <li>カスタマイズ性が高い</li>
          <li>日本語対応</li>
          <li>週間100万DL以上で安定</li>
        </ul>
        <h3>✗ デメリット</h3>
        <ul>
          <li>Flatpickr特有のUIスタイル</li>
        </ul>
      </div>
    </div>
  )
}

export default Pattern2