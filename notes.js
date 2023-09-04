const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your Notes... ';	// Arrow Function

const addNote = (title,body)=>{
	const notes = loadNotes();
	const duplicateNotes = notes.find((note) => note.title === title);
	
	if(!duplicateNotes){
		notes.push({
		title: title,
		body: body
		})
		saveNotes(notes);
		console.log(chalk.green.inverse('New Note added!'));
	}else{
		console.log(chalk.red.inverse('Note title taken'));
	}
}

const removeNote = (title)=>{
	const notes = loadNotes();
	const change = notes.filter( (note) => note.title === title);
	const notesToKeep = notes.filter( (note) => note.title !== title)
	saveNotes(notesToKeep);
	if(change.length === 0){
		const msg = chalk.red.inverse('No Note Found!');
		console.log(msg);
	}
	else{
		const msg = chalk.green.inverse('Note removed!');
		console.log(msg);
	}
}

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes = ()=>{
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	}catch (e) {
		return [];
	}
}

const listNotes = ()=>{
	const notes= loadNotes();
	console.log(chalk.blue.bold('Yout Notes...'));
	notes.forEach((note)=> console.log(note.title + " " + note.body));
}

const readNotes = (title)=> {
	const notes= loadNotes();
	//const msg = notes.find(title);
	const note = notes.find((note)=> note.title === title);
	if(!note){
		console.log(chalk.red.bold.inverse('Error 404 ...'));
	}
	else{
		console.log(chalk.green.inverse(note.title) + ' ' + note.body);
	}
}

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes,
	readNotes: readNotes,
}
