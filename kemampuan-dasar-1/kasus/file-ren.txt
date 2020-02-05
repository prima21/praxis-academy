@echo off

setlocal enabledelayedexpansion

echo "hindari nama direktori yang memakai spasi, program ini belum sanggup menghadapinya"
echo[

FOR /r %%F IN (*.java) DO (
    set /p confirmation="%%~nxF ada, diganti namanya (y/t)? : "
    if /I !confirmation!==y (
       echo "yes"
       set /p new_name="masukkan nama baru : "
       echo "nama file %%~nxF telah berhasil berubah menjadi !new_name!"
       ren %%F !new_name!
    ) 
    if /I !confirmation!==t (
       echo "nama file %%~nxF tidak dirubah"
    ) 
    if /I NOT !confirmation!==y (
       if /I NOT !confirmation!==t (
          echo "Input salah, hanya menerima y/Y dan n/N"
       )
    )
    echo[ 	
)