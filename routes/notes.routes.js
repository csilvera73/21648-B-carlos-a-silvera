const {Router} = require ('express')
//como se auto importa ctrl+copy?
const {getAllNotes, createNote, formsCreateNote,
} = require("../src/controllers/notes.controller")
 

const router = Router()

router.get('/',getAllNotes)
router.get('/create',formsCreateNote)
router.post('/',createNote)
router.get('/update/:id')

module.exports = router
