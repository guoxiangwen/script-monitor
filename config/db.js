// let mysql = require('mysql');
// let connection = mysql.createConnection({
//     host: '10.3.30.183',
//     user: 'user-center',
//     password: 'user-center-123'
// })
// connection.connect((err) => {
//     if (err) {
//         console.error('error connecting:' + err.stack);
//         return;
//     }
//     console.log('connection is successed' + connection.threadId)
// })

let Sequelize = require('sequelize');
const sequelize = new Sequelize('node', 'root', '12345', {
    host: '10.3.93.229',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000 // 连接在释放之前可以空闲的最长时间（以毫秒为单位）
    },
});
async function main() {
    try {
        await sequelize.authenticate()
        console.log("sequelize 已经连接成功啦！ >_< ")
            // process.exit(0)
    } catch (e) {
        console.log(e)
    }
}
main();

module.exports = sequelize;