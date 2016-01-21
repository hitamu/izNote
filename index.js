'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var NoteTitle = React.createClass({
  render: function() {
    return (
      <input type="text" defaultValue={this.props.title}/>
    );
  }
});

var NoteContent = React.createClass({
  render: function() {
    return (
      <textarea defaultValue={this.props.content}></textarea>
    );
  }
});

var NoteItem = React.createClass({
  handleClick: function() {
    console.log(this.props.note.title);
  },
  render: function() {
    return (
      <div onClick={this.handleClick}>
        <NoteTitle title={this.props.note.title}/>
        <NoteContent content={this.props.note.content}/>
      </div>
    );
  }
});

var ListNote = React.createClass({
  render: function() {
    var items = this.props.notes.map(note => <NoteItem note={note} key={note.id}/>);
    return <div>{items}</div>;
  }
});

var ActiveNote = React.createClass({
  render: function() {
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
  render: function() {
    return <div><ListNote notes={data}/><ActiveNote/></div>;
  }
});

ReactDOM.render(
  <Application />,
  document.getElementById('container')
);