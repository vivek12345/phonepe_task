(function () {
	function BoardsContainer(dummyBoard) {
		this.boards = [];
		this.mainContainer = document.querySelector('.mainContainer');
		let boardsContainer = document.createElement('div');
		boardsContainer.className = "boards-container";
		this.mainContainer.appendChild(boardsContainer);
		this.render();
	}
	BoardsContainer.prototype.render = function() {
		this.renderAddABoardDiv();
	}
	BoardsContainer.prototype.renderBoard = function(board) {
		let boardElement = document.createElement('div');
		boardElement.setAttribute('board-id', board.id);
		boardElement.className = "trello-board";
		let boardName = document.createElement('span');
		boardName.textContent = board.name;
		boardElement.appendChild(boardName);
		document.querySelector('.boards-container').appendChild(boardElement);
	}
	BoardsContainer.prototype.renderAddABoardDiv = function() {
		let addABoardTopContainer = document.createElement('div');
		addABoardTopContainer.className = "trello-board-top-container";
		let addABoardContainer = document.createElement('div');
		addABoardContainer.className = "trello-add-board";
		let addABoardContainerSpan = document.createElement('span');
		addABoardContainerSpan.textContent = "Add a board...";
		addABoardContainer.addEventListener('click', (event) => {
			this.handleAddBoardClick(event);
		});
		addABoardContainer.appendChild(addABoardContainerSpan);
		addABoardTopContainer.appendChild(addABoardContainer);
		let addABoardContainerFormDiv = document.createElement('div');
		addABoardContainerFormDiv.className = "add-board-form";
		let addABoardContainerFormInput = document.createElement('input');
		addABoardContainerFormInput.type = "text";
		addABoardContainerFormInput.className = "add-board-name";
		addABoardContainerFormDiv.appendChild(addABoardContainerFormInput);
		let saveButton = document.createElement('button');
		saveButton.className = "add-board-save";
		saveButton.textContent = "Save";
		saveButton.addEventListener("click", (event) => {
			let boardName = document.querySelector('.add-board-form input');
			this.addBoard(event, boardName.value);
			boardName.value = "";
			document.querySelector('.add-board-form').style.display = "";
		});
		addABoardContainerFormDiv.appendChild(saveButton);
		addABoardTopContainer.appendChild(addABoardContainerFormDiv);
		this.mainContainer.appendChild(addABoardTopContainer);
	}
	BoardsContainer.prototype.handleAddBoardClick = function(event) {
		(function(style) {
			style.display = style.display === '' ? 'block' : '';
		})(document.querySelector('.add-board-form').style);
	}
	BoardsContainer.prototype.addBoard = function(event, name) {
		let newBoard = new Board(name, this.boards.length);
		this.boards.push(newBoard);
		this.renderBoard(newBoard);
	}
	document.body.onload = function() {
		let boardContainer = new BoardsContainer(true);
	}
})();
