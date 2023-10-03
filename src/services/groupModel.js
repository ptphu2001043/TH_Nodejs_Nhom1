import pool from '../configs/connectDB'

const getAllGroup = async () => {
    const [rows, fields] = await pool.execute('select * from `group_users`')
    return rows
}

export default { getAllGroup }