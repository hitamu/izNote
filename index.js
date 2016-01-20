'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var NoteItem = React.createClass({
  render() {
    return (
      <div>
        <input type="text" defaultValue={this.props.note.title}/>
        <textarea defaultValue={this.props.note.content}></textarea>
      </div>
    );
  }
});

var ListNote = React.createClass({
  render() {
    var items = this.props.notes.map(note =>
      <NoteItem note={note} key={note.id}/>
    );
    return <div>{items}</div>;
  }
});

var ShowingNote = React.createClass({
  render() {
    return <div>"List Note"</div>;
  }
});
var data = [
  {id: 1, title: "abc", content:"Dai loang ngoang"},
  {id: 2, title: "x", content:"Dai loang ngoang"},
  {id: 3, title: "y", content:"Dai loang ngoang"},
  {id: 4, title: "z", content:"Dai loang ngoang"},
]
var Application = React.createClass({
  render() {
    return <div><ListNote notes={data}/><ShowingNote/></div>;
  }
});

ReactDOM.render(
  <Application />,
  document.getElementById('container')
);