
const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}


global.ownername = '๐๐๐๐๐๐๐๐ ๐๐๐ ๐๐๐๐๐๐๐  ใใ'
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = true //status auto mengetik (auto typing)
global.available = true //status online (online)
// Other
global.owner = ['6282146218274','6282146218274','6282146218274']
global.premium = ['6282146218274']
global.packname = 'โซนโซบ - ใ ๐๐ก๐ข๐ง๐ง๐ญ๐ฒ๐- ๐๐ณ๐ฒ ฯใฝ๏ธ'
global.author = 'ใ ๐๐ก๐๐ฌ๐ญ๐๐ฉ๐ฉ ๐๐จ๐ญ'
global.wlcm = []
global.sessionName = 'session'
global.prefa = ['','!','.','๐ฆ','๐ค','๐ฟ']
global.sp = 'โญ'
global.mess = {
    success: 'โ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/three.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
