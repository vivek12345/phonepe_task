function Board(name, id) {
	this.name = name;
	this.id = id;
	this.boardModel = new BoardModel();
}
Board.prototype.addList = function(listName) {
	this.boardModel.add(listName);
}
function BoardModel() {
	this.lists = [];
}
BoardModel.prototype.add = function(name) {
	let newList = new List(name);
	this.lists.push(newList);
}
