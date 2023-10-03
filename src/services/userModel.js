import pool from '../configs/connectDB'
var bycript = require('bcryptjs')

const checkUserExist = async (username) => {
    let [rows, fields] = await pool.execute('select * from `users` where username=?', [username])
    if (rows.length > 0) {
        return true
    }
    return false
}

let compareUserPassword = async (username, password) => {
    let hash = bycript.compareSync("B4c0/\/", password);

    let [rows, fields] = await pool.execute('select * from `users` where username=? and password=?', [username, hash])
    return rows
}

const getAllUser = async () => {
    const [rows, fields] = await pool.execute('select * from `users`')
    return rows
}

const detailUser = async (username) => {
    const [rows, fields] = await pool.execute('select * from `users` where username=?', [username])
    return rows[0]
}

const insertUser = async (username, password, fullname, address, sex, email, id_group) => {
    const salt = bycript.genSaltSync(10)
    const hash = bycript.hashSync(`${password}/\/`, salt)

    await pool.execute('insert into `users` value(?,?,?,?,?,?,?,?)', [null, username, hash, fullname, address, sex, email, id_group])
}

const updateUser = async (id_user, username, password, fullname, address, sex, email, id_group) => {
    const salt = bycript.genSaltSync(10)
    const hash = bycript.hashSync(`${password}/\/`, salt)

    await pool.execute('update `users` set username=?, password=?, fullname=?, address=?, sex=?, email=?, id_group=? where id_user=?', [username, hash, fullname, address, sex, email, id_group, id_user])
}

const deleteUser = async (username) => {
    await pool.execute('delete from users where username=?', [username])
}


export default { getAllUser, insertUser, detailUser, updateUser, deleteUser, checkUserExist, compareUserPassword }