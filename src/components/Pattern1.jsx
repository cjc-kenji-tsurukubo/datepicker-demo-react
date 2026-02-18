import React, { useState } from 'react'

function Pattern1() {
  const [date, setDate] = useState('2024-01-15')
  const [time, setTime] = useState('14:30')
  const [datetime, setDatetime] = useState('2024-01-15T14:30')

  return (
    <div className="pattern-card">
      <div className="pattern-header">
        <h2>パターン1: HTML5標準</h2>
        <p className="subtitle">ブラウザ標準機能（追加ライブラリ不要）</p>
      </div>
      
      <div className="form-group">
        <label>日付のみ</label>
        <input 
          type="date" 
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      
      <div className="form-group">
        <label>時間のみ</label>
        <input 
          type="time" 
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      
      <div className="form-group">
        <label>日付 + 時間</label>
        <input 
          type="datetime-local" 
          value={datetime}
          onChange={(e) => setDatetime(e.target.value)}
        />
      </div>
      
      <div className="features">
        <h3>✓ メリット</h3>
        <ul>
          <li>追加ライブラリ不要（0KB）</li>
          <li>React stateとの連携が簡単</li>
          <li>実装が最もシンプル</li>
          <li>アクセシビリティ完璧</li>
        </ul>
        <h3>✗ デメリット</h3>
        <ul>
          <li>カスタマイズが困難</li>
          <li>ブラウザごとに見た目が異なる</li>
        </ul>
      </div>
    </div>
  )
}

export default Pattern1