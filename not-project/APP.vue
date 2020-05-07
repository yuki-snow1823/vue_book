<!DOCTYPE html>
<html>
<head>
    <title>My first Vue app</title>
    <script src="https://unpkg.com/vue"></script>
</head>
<body>
    <h1>Vue.js</h1>
</body>
</html>

<body>
    <h1>Vue.js</h1>
    <div id="app">
    {{ message }}
    </div>
    <hr>
    <button onclick="doAction();">
    click
    </button>


    <script>
    var data = {
        message: 'Hello Vue!',
        items: ['One', 'Two', 'Three', 'Four', 'Five']
    };


    var app = new Vue({
        el: '#app',
        data: data,
        render: (element)=>{
            var p = element("p", 
                {style:'font-size:20pt;'}, 
                data.message);
            var li = data.items.map(item=> element('li', item));
            var ol = element("ol", li);
            var div = element("div", [p, ol]);
            return div;
        }
    })


    function doAction() {
        var newdata = [
            'いち', 'に', 'さん', 'よん', 'ご'
        ]
        data.message = "クリックしました!!!";
        data.items[0] = 'ゼロ';
        for (n in data.items) {
            data.items[n] = newdata[n];
        }
    }
    </script>
</body>
