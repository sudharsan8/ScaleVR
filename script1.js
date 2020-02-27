class ProductFilter extends React.Component {
  constructor() {
    super();

    this.handleFormInput = this.handleFormInput.bind(this);

    this.state = {
      series: 0,
      abv: 0 };

  }

  handleFormInput(series, abv) {
    this.setState({
      series: series,
      abv: abv });

  }

  render() {
    const products = [
    { name: 'Dance Monkey', abv: 5.5, series: 'English' },
    { name: 'Apna Time AAyega', abv: 4.26, series: 'Hindi' },
    { name: "Breakup Song", abv: 3.5, series: 'Tamil' },
    { name: "No Time To Die", abv: 5.2, series: 'English' },
    { name: 'Verithanam', abv: 4.5, series: 'Tamil' },
    { name: 'Mast Magan', abv: 6.5, series: 'Hindi' },
    { name: 'Blinding Lights', abv: 6.5, series: 'English' },
    { name: 'Chill Bro', abv: 7.5, series: 'Tamil' },
    { name: 'Bekhayali', abv: 5.5, series: 'Hindi' },
    { name: 'The Box', abv: 6.8, series: 'English' },
    { name: 'Hayati', abv: 6.4, series: 'Tamil' }];


    return (
      React.createElement("div", { className: "filter" },
      React.createElement(ProductFilterMenu, {
        series: this.state.series,
        abv: this.state.abv,
        onFormInput: this.handleFormInput }),

      React.createElement(ProductFilterResults, {
        products: products,
        series: this.state.series,
        abv: this.state.abv })));



  }}


class ProductFilterMenu extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onFormInput(
    this.refs['seriesInput'].getDOMNode().value,
    this.refs['abvInput'].getDOMNode().checked);

  }

  render() {
    return (
      React.createElement("form", { className: "filter-menu" },
      React.createElement("label", { for: "abvInput" }, "Sort By Ratings"),
      React.createElement("input", { id: "abvInput", type: "checkbox", checked: this.props.abv, ref: "abvInput", onChange: this.handleChange }),
      React.createElement("label", { for: "seriesInput" }, "Filter By Series"),
      React.createElement("select", { id: "seriesInput", ref: "seriesInput", onChange: this.handleChange },
      React.createElement("option", { value: "All" }, "All Songs"),
      React.createElement("option", { value: "English" }, "English"),
      React.createElement("option", { value: "Tamil" }, "Tamil"),
      React.createElement("option", { value: "Hindi" }, "Hindi"))));



  }}


class ProductFilterResults extends React.Component {
  constructor() {
    super();
  }

  render() {
    var results = []; 

    if (this.props.abv === true) {
      this.props.products.sort((a, b) => {
        return b.abv - a.abv;
      });
    }

    this.props.products.map(product => {
      if (this.props.series === 0 || this.props.series === 'All') {
        results.push(React.createElement(Product, { product: product }));
      } else
      if (product.series === this.props.series) {
        results.push(React.createElement(Product, { product: product }));
      }
    });

    return (
      React.createElement("div", { className: "filter-results" },
      React.createElement("ul", { className: "blocks blocks_3up" },
      results)));



  }}


class Product extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      React.createElement("li", null,
      React.createElement("div", { className: "feature" },
      React.createElement("div", { className: "feature-hd" },
      React.createElement("h2", { class: "hdg hdg_2" }, this.props.product.name)),

      React.createElement("div", { className: "feature-bd" },
      React.createElement("p", null, this.props.product.series)),

      React.createElement("div", { className: "feature-ft" },
      React.createElement("p", null, this.props.product.abv)))));




  }}


React.render(React.createElement(ProductFilter, null), document.getElementById('ProductFilter'));