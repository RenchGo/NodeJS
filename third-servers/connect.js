const Pool = require('pg').Pool
const pool = new Pool({
  user: 'user3',
  host: 'localhost',
  database: 'lab3',
  password: '12345',
  port: 5432,
});
const getStudent = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM students ORDER BY id ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }
  const createStudent = (body) => {
    return new Promise(function(resolve, reject) {
      const { first_name, last_name, group_name } = body
      pool.query('INSERT INTO students (first_name, last_name, group_name) VALUES ($1, $2, $3) RETURNING *', [first_name, last_name, group_name], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`Добавление прошло успешно`)
      })
    })
  }
  const updateStudent = (body) => {
    return new Promise(function(resolve, reject) {
      const { first_name, last_name, group_name } = body
      const id = parseInt(i, 10)
      pool.query('UPDATE students SET first_name=$1, last_name=$2, group_name=$3 WHERE id =$4 ', [first_name, last_name, group_name, id], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`Обновление прошло успешно`)
      })
    })
  }

  const deleteStudent = () => {
    return new Promise(function(resolve, reject) {
      const id = parseInt(i, 10)
      pool.query('DELETE FROM students WHERE id = $1', [id], (error) => {
        if (error) {
          reject(error)
        }
        resolve(`Запись о студенте удалена`)
      })
    })
  }
  
  module.exports = {
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent,
  }