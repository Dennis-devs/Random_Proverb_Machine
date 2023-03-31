$(document).ready(function () {
  $("#quote-box").css("min-height", "200px");
});

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

const Book = { "Proverbs 3:5-6": "Trust ADONAI with all your heart, do not rely on your own understanding. In all your ways acknowledge him, then he will level your paths.", "Proverbs 1:7": "The fear of Adonai is the beginning of knowledge, but fools despise wisdom and discipline.", "Proverbs 3:27": "Don’t withhold good from someone entitled to it when you have in hand the power to do it.", "Proverbs 10:17": "He who observes discipline is on the way to life; but he who ignores correction is making a mistake.", "Proverbs 11:14": "Without clever tactics an army is defeated, and victory comes from much planning.", "Proverbs 11:20-21": "The crooked-hearted are an abomination to Adonai, but those sincere in their ways are his delight.Depend on it: the evil will not go unpunished; but the offspring of the righteous will escape.", "Proverbs 12:10": "A righteous man takes care of his animal, but the wicked? Even his compassion is cruel.", "Proverbs 12: 25-26": "Anxiety in a person’s heart weighs him down, but a kind word cheers him up.The righteous guides his friend’s way rightly, but the way of the wicked will lead them astray.", "Proverbs 13:24": "He who fails to use a stick hates his son, but he who loves him is careful to discipline him.", "Proverbs 13:22": "A good man leaves an inheritance to his grandchildren, but the wealth of a sinner is stored up for the righteous.", "Proverbs 27:2": "Let someone else praise you, not your own mouth, a stranger and not your own lips.", "Proverbs 27:3": "The weight of stone and sand is nothing compared to the trouble that stupidity can cause." };

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let newVal = Object.values(Book)[Math.floor(Math.random() * Object.keys(Book).length)];
let newKey = Object.keys(Book).find(key => Book[key] === newVal);

class MyProverbs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: newVal,
      verse: newKey };

  }
  handleClick() {
    this.setState(() => {
      let newVal = Object.values(Book)[Math.floor(Math.random() * Object.keys(Book).length)];
      let newKey = Object.keys(Book).find(key => Book[key] === newVal);

      return {
        message: newVal, verse: newKey };


    });
    let newColor = $("#quote-box").css("border-color", getRandomColor());
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { class: "container back2" }, /*#__PURE__*/
      React.createElement("div", { id: "quote-box", class: "well col-md-6" }, /*#__PURE__*/
      React.createElement("div", { class: "upper" }, /*#__PURE__*/
      React.createElement("p", { id: "text", class: "text-center" }, this.state.message), /*#__PURE__*/
      React.createElement("footer", { id: "author", class: "text-center" }, this.state.verse)), /*#__PURE__*/

      React.createElement("div", { class: "lower" }, /*#__PURE__*/
      React.createElement("div", { class: "low1" }, /*#__PURE__*/React.createElement("button", { onClick: this.handleClick.bind(this), class: "btn btn-info", id: "new-quote" }, "New Proverb"), " "), /*#__PURE__*/


      React.createElement("div", { class: "low2" }, /*#__PURE__*/React.createElement("a", { href: "twitter.com/intent/tweet", target: "_blank", id: "tweet-quote" }, /*#__PURE__*/React.createElement("i", { class: "fa fa-twitter" })), /*#__PURE__*/
      React.createElement("a", { href: "http://bible.com/en-GB/bible/116/PRO.1.NLT", target: "_blank", id: "bible", "data-toggle": "tooltip", title: "More Proverbs", "data-placement": "right" }, /*#__PURE__*/React.createElement("i", { class: "fa fa-bible" })))))));






  }}


ReactDOM.render( /*#__PURE__*/React.createElement(MyProverbs, null), document.getElementById("root"));