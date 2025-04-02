import express from 'express'
import { postUser, getUser } from '../controllers/user.controller.js'
import { PostEmp,GetEmp, deleteEmp, updateEmp } from '../controllers/employee.controller.js';


const router = express.Router();

router.get('/getuser', getUser)

router.post('/postuser', postUser)

router.post('/postemp',PostEmp)

router.get('/getemp',GetEmp)

router.post('/updateemp/:id', updateEmp)

router.post('/deleteemp/:id', deleteEmp)

export default router;

