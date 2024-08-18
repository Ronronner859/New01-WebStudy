const mysql = require("mysql"); // 引入mysql模块
console.log(mysql)
const express = require("express"); //引入express模块
const app = express(); //创建app实例对象

const connection = mysql.createConnection({
    host: "localhost", //主机名(默认都是localhost)
    user: "root", //用户名
    password: "123456", //密码
    database: "node_test", //数据库名
});
console.log(connection)
// 测试连接
connection.connect((err) => {
    if (err) {
        console.log("数据库连接失败，原因：", err);
    } else {
        console.log("数据库连接成功！");
        // 开启服务器监听
        app.listen(3001, () => {
            console.log("服务在3001端口已开启...");
        });
    }
});

// 添加功能
app.get('/add', (req, res) => {
    const sqlStr = "INSERT INTO users(name, email) VALUES ('金离瞳', 'jwz@qq.com')";
    connection.query(sqlStr, (err, result) => {
        if (err) {
            console.log("SQL语句执行失败，原因：", err);
            res.send('添加失败');
        } else {
            console.log("SQL语句执行成功");
            res.send('添加成功');
        }
    });
});

// 查询功能
app.get('/find',(req,res) => {
    const sqlStr = "select * from users";
    connection.query(sqlStr,(err,result) => {
        if (err) {
            console.log("SQL语句查询功能执行失败，原因：", err);
            res.status(500).send("查询失败");
        } else {
            console.log("SQL语句查询功能执行成功");
            res.status(200).json({message:'查询成功',data:result})
        }
    })
})

// 修改功能
app.put("/update/:id", (req, res) => {
    const userId = req.params.id;
    console.log("收到PUT请求的用户ID为:", userId);

    const newName = "陆瑾年"; // 修改之后的名字
    const newEmail = "shmily@qq.com";

    // 定义一个查询函数
    const sqlStr = "update users set name = ?, email = ? where id = ?";
    connection.query(sqlStr, [newName, newEmail, userId], (err, result) => {
        if (err) {
            console.error("sql语句修改功能失败，原因：", err);
            return res.status(500).send("修改失败");
        }
        console.log("sql语句修改功能成功");
        return res.status(200).send("修改成功");
    });
});

// 删除功能
app.delete("/delete/:id", (req, res) => {
    const userId = req.params.id;
    console.log("收到delete请求的用户ID为:", userId);

    // 定义一个查询函数
    const sqlStr = "delete from users where id = ?";
    connection.query(sqlStr, [userId], (err, result) => {
        if (err) {
            console.error("sql语句删除功能失败，原因：", err);
            return res.status(500).send("修改失败");
        }
        console.log("sql语句删除功能成功");
        return res.status(200).send("删除成功");
    });
});

