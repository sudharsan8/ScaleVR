
function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class SearchExample extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",





    { searchString: '' });_defineProperty(this, "handleChange",
    e => {
      this.setState({ searchString: e.target.value });
    });}
  render() {
    var libraries = this.props.items,
    searchString = this.state.searchString.trim().toLowerCase();
    if (searchString.length > 0) {
      libraries = libraries.filter(function (i) {
        return i.name.toLowerCase().match(searchString);
      });
    }
    return (
      React.createElement("div", null,
      React.createElement("input", { type: "text", value: this.state.searchString, onChange: this.handleChange, placeholder: "Type here..." }),
      React.createElement("ul", null,
      libraries.map(function (i) {
        return React.createElement("li", null, i.name, " ", React.createElement("a", { href: i.url }, i.url));
      }))));



  }}


// Constant, library
var libraries = [

{ name: 'Dance Monkey', url: 'index3.html' },
{ name: 'Blinding lights', url: 'index4.html' },
{ name: 'The Box', url: '' },
{ name: 'Someone You Loved', url: '' },
{ name: 'Apna Time Aayega', url: '' },
{ name: 'Bekhayali', url: '' },
{ name: 'Mast Magan', url: '' },
{ name: 'Verithanam', url: '' },
{ name: 'Breakup Song', url: '' },
{ name: 'Chill Bro', url: '' },
{ name: 'Hayati', url: '' },
{ name: 'In Your Eyes', url: '' },
{ name: 'South of the Border', url: '' },
{ name: 'No Time To Die', url: '' }];



// put input and display on page
React.render(
React.createElement(SearchExample, { items: libraries }),
document.getElementById('content'));