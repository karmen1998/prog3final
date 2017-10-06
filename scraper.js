var scrapeIt = require("scrape-it");
var jsonfile = require('jsonfile')
var file = 'db.json'
var i = 1, arr = { 'cars': [] }, sl;
var int = setInterval(function () {
    i++;
    sl = "https://www.list.am/category/23/" + i;
    console.log(sl);
    scrapeIt(sl, {
        cars: {
            listItem: ".h",
            data: {

                title: "div.l",
                price: {
                    selector: ".l2 .l",
                    convert: function (x) {
                        var res = x.replace(/,/gi, "");
                        return res;
                    }
                },
                year: {
                    selector: "div.l",
                    convert: function (x) {
                        var re = / (\d*) թ/;
                        if (re.test(x)) {
                            var found = x.match(re);
                            return found[1];
                        } else {
                            return "";
                        }
                    }
                },
                url: {
                    closest: "a",
                    attr: "href"
                },

                image: {
                    selector: 'img',
                    attr: "src"
                },



            }

        }

    }, (err, page) => {
        arr.cars.push(page.cars)
    })

    if (i == 15) {
        // console.log(arr);
        jsonfile.writeFile(file, arr, { spaces: 2 }, function (err) {
            // console.error(err)
        })
        clearInterval(int);
    }


}, 6000);