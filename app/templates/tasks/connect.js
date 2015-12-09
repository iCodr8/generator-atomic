/**
 * grunt-contrib-connect options
 * @type {Object}
 */

module.exports = {
  options: {
    // change this to '0.0.0.0' to access the server from outside
    hostname: 'localhost',
    open: true
  },
  dist: {
    options: {
      port: 9000,
      keepalive: true,
      base: [
        '<%- folders.dist %>'
      ],
      livereload: false
    }
  },
  testresults: {
    options: {
      port: 9001,
      base: [
        'report/'
      ],
      livereload: false,
      keepalive: true,
      open: 'http://localhost:9001/report.html'
    }
  }
};
