# line-graph

I wanted a graph that I could install with npm and pipe a csv to, so I wrote one.

Works both in js in the browser, and via command line.

# example, terminal

```
npm install line-graph -g

line-graph < data.csv > graph.png --title "Graph o'Data"
```

# example, browser

``` js
var graph = require('line-graph')
var Table = require('dat-table')

var canvas = document.createElement('canvas')
var ctx = canvas.getContext('2d')

graph(ctx, Table.createTable(TABLE_OF_DATA_WITH_HEADERS), opts)

document.body.appendChild(canvas)
```

If your data has headers and units how [dat-table](https://github.com/dominictarr/dat-table)
likes it, you should get a pretty good graph the first time.

<img src=https://raw.github.com/dominictarr/line-graph/master/test/fib.png>

## License

MIT
