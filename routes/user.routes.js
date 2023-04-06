const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')

router.post('/adminCreate', userController.createAdmin)
router.post('/mentorCreate', userController.mentorAdmin)
router.post('/login', userController.login)
router.post('/studentCreate', userController.createStudentData)

router.get('/getSections', userController.getSections)
router.get('/getRooms/:section', userController.getRooms)

router.post('/getStudents', userController.getStudents)
router.get('/getStudent/:text', userController.getStudent)

router.put('/updateStudent', userController.updateStudent)
router.get('/deleteStudent/:id', userController.deleteStudent)

module.exports = router
