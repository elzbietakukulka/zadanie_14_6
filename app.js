var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    getDefaultProps: function() {
        console.log('Ustawienie domyślnych wartości propsów, jeśli nie zostały przekazane żadne do komponentu')
    },

    componentWillMount: function() {
        console.log('Wywoływna przed wykonaniem metody render')
    },

    componentDidMount: function() {
        console.log('Komponent istnieje już w drzewie DOM- można na nim wykonywać różne operacje manipualci, pobrać dane itd.')
    },

    componentWillReceiveProps: function() {
        console.log('Wykonywana gdy komponent dostaję nowe właściwości, ale nie jest to faza pierwszego renderowania- aktualzujemy stan')
    },

    shouldComponentUpdate: function() {
        console.log('Ta metoda sprawdza czy trzeba jeszcze raz przerysowywać komponent (przed wywołaniem metody render)')
    },

    componentWillUpdate: function() {
        console.log('Metoda wywoływana tylko do przygotowania na nadchodzące zmiany - nie modyfikujemy tutaj stanu')
    },

    componentDidUpdate: function() {
        console.log('Metoda, w której wykonujemy manipulacje DOM')
    },

    componentWillUnount: function() {
        console.log('"Sprzątanie" przed usunięciem komponentu np. odpinanie timerów czy nasłuchiwania zdarzeń na elementach DOM')
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('h3', {}, 'Counter'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('div', {},
                React.createElement('button', {onClick: this.increment}, 'Increment'),
                React.createElement('button', {onClick: this.decrement}, 'Decrement')
                )
            );
    }
});
    

var element = React.createElement('div', {},
                React.createElement(Counter),
                React.createElement(Counter)
                );
            

ReactDOM.render(element, document.getElementById('app'));