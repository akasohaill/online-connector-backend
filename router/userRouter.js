import express from 'express'
import { upload } from '../middleware/multerConfig.js'
import { userPost } from '../controller/userController.js'


const router=express.Router();

router.post('/',upload.array('images',5),userPost);
// router.get('/submissions',getAllUsers)

export default router;