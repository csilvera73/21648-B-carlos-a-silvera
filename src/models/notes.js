const { Sequelize, sequelize } = require("../../database")
const { DataTypes } = require("sequelize")


const NoteModel = sequelize.define('notas',{
    title: DataTypes.STRING ,
    content: DataTypes.STRING ,
    link: DataTypes.TEXT ,
    dcreate: DataTypes.DATE
})

module.exports = (NoteModel)