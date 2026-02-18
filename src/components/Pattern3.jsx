import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Pattern3() {
  const [dateOnly, setDateOnly] = useState(new Date(2024, 0, 15))
  const [timeOnly, setTimeOnly] = useState(new Date(2024, 0, 1, 14, 30))
  const [dateTime, setDateTime] = useState(new Date(2024, 0, 15, 14, 30))

  return (
    <div className="pattern-card">
      <div className="pattern-header">
        <h2>パターン3: react-datepicker</h2>
        <p className="subtitle">React専用の人気ライブラリ（週間100万DL）</p>
      </div>
      
      <div className="form-group">
        <label>日付のみ</label>
        <DatePicker
          selected={dateOnly}
          onChange={(date) => setDateOnly(date)}
          dateFormat="yyyy-MM-dd"
          placeholderText="日付を選択"
        />
      </div>
      
      <div className="form-group">
        <label>時間のみ</label>
        <DatePicker
          selected={timeOnly}
          onChange={(date) => setTimeOnly(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="時間"
          dateFormat="HH:mm"
          placeholderText="時間を選択"
        />
      </div>
      
      <div className="form-group">
        <label>日付 + 時間</label>
        <DatePicker
          selected={dateTime}
          onChange={(date) => setDateTime(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="yyyy-MM-dd HH:mm"
          timeCaption="時間"
          placeholderText="日付と時間を選択"
        />
      </div>
      
      <div className="features">
        <h3>✓ メリット</h3>
        <ul>
          <li>Reactに完全最適化</li>
          <li>週間100万DL超の人気</li>
          <li>時間選択UIが非常に使いやすい</li>
          <li>豊富なカスタマイズオプション</li>
          <li>日付範囲選択も可能</li>
        </ul>
        <h3>✗ デメリット</h3>
        <ul>
          <li>バンドルサイズがやや大きい（~50KB）</li>
          <li>date-fnsへの依存</li>
        </ul>
      </div>
    </div>
  )
}

export default Pattern3