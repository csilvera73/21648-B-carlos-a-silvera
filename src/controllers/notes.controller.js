const { NoteModel } = require("../models/notes");

const getAllNotes = async (req, res) => {
  const allNotes = await NoteModel.findAll();

  res.render("index", { allNotes });
};

const formsCreateNote = async (req, res) => {
    res.render("new-note")

};

const formUpdateNote = async (req, res) => {
    res.render("update-note", update-note)
}


const CreateNote = async (req, res) => {
    const {title, content, link, dcreate} = req.body
    await NoteModel.CreateNote ({title, content, link, dcreate})
    res.send("Nota Creada Exitosamente.")

};

module.exports = {getAllNotes, formsCreateNote}