import React, { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { TextField } from '@mui/material'
import dayjs from 'dayjs'
import 'dayjs/locale/ja'

function Pattern4() {
  const [dateOnly, setDateOnly] = useState(dayjs('2024-01-15'))
  const [timeOnly, setTimeOnly] = useState(dayjs('2024-01-15T14:30'))
  const [dateTime, setDateTime] = useState(dayjs('2024-01-15T14:30'))

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
      <div className="pattern-card">
        <div className="pattern-header">
          <h2>パターン4: @mui/x-date-pickers</h2>
          <p className="subtitle">Material UIのDatePickers</p>
        </div>
        
        <div className="form-group">
          <DatePicker
            label="日付のみ"
            value={dateOnly}
            onChange={(newValue) => setDateOnly(newValue)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </div>
        
        <div className="form-group">
          <TimePicker
            label="時間のみ"
            value={timeOnly}
            onChange={(newValue) => setTimeOnly(newValue)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </div>
        
        <div className="form-group">
          <DateTimePicker
            label="日付 + 時間"
            value={dateTime}
            onChange={(newValue) => setDateTime(newValue)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </div>
        
        <div className="features">
          <h3>✓ メリット</h3>
          <ul>
            <li>Googleのマテリアルデザイン</li>
            <li>時計型の時間選択が直感的</li>
            <li>TypeScript完全対応</li>
          </ul>
          <h3>✗ デメリット</h3>
          <ul>
            <li>バンドルサイズが大きい（~200KB）</li>
            <li>MUI特有のデザイン</li>
            <li>既存デザインとの調整が必要な場合がある</li>
          </ul>
        </div>
      </div>
    </LocalizationProvider>
  )
}

export default Pattern4