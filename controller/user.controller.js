const db = require("../db");

class UserController {
  async createPosition(req, res) {
    const { login, password, post } = req.body;
    try {
        const newMentor = await db.query(
          "INSERT INTO positions (login, password, post) values ($1, $2, $3) RETURNING *",
          [login, password, post]);
      res.json("Good")
      } catch (err) {
        console.log(err);
      }
  }

  async createStudentData(req, res) {
    const { section, room, name, surname, patronymic, group } = req.body;
    if (section !== undefined && room !== undefined && name !== undefined && surname !== undefined && group !== undefined)
    {
      const newStudentData = await db.query(
        "INSERT INTO mainDatabase (section, room, name, surname, patronymic, groupStudent) values ($1, $2, $3, $4, $5, $6) RETURNING *",
        [section, room, name, surname, patronymic, group]
      );
      res.json('Good');
    }
    else
    {
      res.json('Не заполнены все поля');
    }
  }

  async updateStudent(req, res) {
    const { id, Section, Room, Name, Surname, Patronymic, Group } = req.body;
    try {
      const updateData = await db.query(
        "UPDATE mainDatabase set section = $1, room = $2, name = $3, surname = $4, patronymic = $5, groupStudent = $6 WHERE id = $7 RETURNING *",
        [Section, Room, Name, Surname, Patronymic, Group, id]
      );
      res.json('Good');
    } catch (err) {
      console.log(err);
    }
  }

  async deleteStudent(req, res) {
    const id = req.params.id;
    const deleteData = await db.query(
      "DELETE FROM mainDatabase WHERE id = $1",
      [id]
    );
    res.json("Successfully deleted");
  }

  async login(req, res) {
    const { login, password } = req.body;
    const checkPosition = await db.query(
      "SELECT * FROM positions WHERE login = $1 AND password = $2",
      [login, password]
    );
    const checkLogin = await db.query(
      "SELECT EXISTS (SELECT * FROM positions WHERE login = $1)",
      [login]
    );
    const checkPassword = await db.query(
      "SELECT EXISTS (SELECT * FROM positions WHERE password = $1)",
      [password]
    );

    const isRowExistsLogin = checkLogin.rows[0];
    const isRowExistsPassword = checkPassword.rows[0];
    if (isRowExistsLogin.exists && isRowExistsPassword.exists) {
      res.json(checkPosition);
    } else {
      res.json("Error");
    }
  }
  
  async getSections(req, res) {
    const sections = await db.query(
      "SELECT DISTINCT ON (upper(section)) section FROM mainDatabase ORDER BY upper(section)"
    );
    res.json(sections.rows);
  }

  async getRooms(req, res) {
    const numberSection = req.params.section;
    const rooms = await db.query(
      "SELECT DISTINCT room FROM mainDatabase WHERE section = $1 ORDER BY room",
      [numberSection]
    );
    res.json(rooms.rows);
  }

  async getStudents(req, res) {
    const { section, room } = req.body;
    const students = await db.query(
      "SELECT name, surname, patronymic, groupstudent FROM mainDatabase WHERE section = $1 AND room = $2",
      [section, room]
    );
    res.json(students.rows);
  }

  async getStudent(req, res) {
    const textRn = req.params.text;
    try {
      const student = await db.query(
        "SELECT * FROM mainDatabase WHERE name ILIKE $1 OR surname ILIKE $1 OR patronymic ILIKE $1",
        [`${textRn}%`]
      );
      res.json(student.rows);
    } catch (err) {
      console.log(err);
    }
  }  

}
module.exports = new UserController();
