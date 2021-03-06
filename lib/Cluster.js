'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ClusterController = require('./controllers/ClusterController');

var _ClusterController2 = _interopRequireDefault(_ClusterController);

var _geoObject = require('./apiEventsLists/geoObject');

var _geoObject2 = _interopRequireDefault(_geoObject);

var _decorators = require('./utils/decorators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cluster = function (_Component) {
    _inherits(Cluster, _Component);

    function Cluster(props, context) {
        _classCallCheck(this, Cluster);

        var _this = _possibleConstructorReturn(this, (Cluster.__proto__ || Object.getPrototypeOf(Cluster)).call(this, props));

        var options = props.options;


        _this._controller = new _ClusterController2.default(options, context.mapController);
        return _this;
    }

    _createClass(Cluster, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                cluster: true,
                clusterController: this._controller
            };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this._setupEvents();
            this._setupLayouts();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this._controller.destroy();
        }
    }, {
        key: '_setupLayouts',
        value: function _setupLayouts() {
            if (this.props.custom) {
                this._controller.setLayout('customLayout');
            }
        }
    }, {
        key: 'getController',
        value: function getController() {
            return this._controller ? this._controller : null;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.props.children
            );
        }
    }]);

    return Cluster;
}(_react.Component);

Cluster.defaultProps = {
    options: {}
};
Cluster.propTypes = {
    options: _react.PropTypes.object
};
Cluster.contextTypes = {
    mapController: _react.PropTypes.object
};
Cluster.childContextTypes = {
    cluster: _react.PropTypes.bool,
    clusterController: _react.PropTypes.object
};
exports.default = (0, _decorators.eventsDecorator)(Cluster, { supportEvents: _geoObject2.default });