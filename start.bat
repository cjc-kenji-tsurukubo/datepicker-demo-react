@echo off
chcp 65001
cls
echo ========================================
echo   Datepicker デモ起動中...
echo ========================================
echo.

:: node_modulesが存在するか確認
if not exist "node_modules\" (
    echo 初回起動ですね
    echo パッケージをインストールします...
    echo.
    call npm install
    echo.
)

echo 開発サーバーを起動します...
echo ブラウザが自動で開きます
echo 終了するには Ctrl+C を押してください
echo.

npm run dev