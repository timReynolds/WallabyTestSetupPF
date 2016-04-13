jest.unmock('../HelloMessage');

var React = require('react');
var shallow = require('enzyme').shallow;

describe('HelloMessage', function () {

    var HelloMessage;

    beforeEach(function() {
        HelloMessage = require('../HelloMessage');
    });

    it('when HelloMessage is passed "World", should render "Hello World!"', function () {
        // Arrange
        // Act
        var wrapper = shallow(
            React.createElement(HelloMessage, { message: 'World' })
        );

        // Assert
        expect(wrapper.text()).toBe("Hello World!");
    });
});
