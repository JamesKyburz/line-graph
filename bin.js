var opts = require('optimist').argv
var Canvas = require('canvas')
var graph = require('./')

var canvas = new Canvas ()
canvas.width = opts.width || 300
canvas.height = opts.height || 150

var data = ''
var Table = require('dat-table')
process.stdin.on('data', function (d) {
  data += d
})
.on('end', function () {
  var table
  if(/^\s*[[{]/.test(data))
    table = Table.createTable(JSON.parse(data))
  else
    table = Table.createTable(data)

  graph(canvas.getContext('2d'), table, opts)
  canvas.pngStream().pipe(process.stdout)
})
