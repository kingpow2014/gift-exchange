var people = ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'aaa'];

var pair = function (arr) {
    var result = [];
    var recipients = arr.slice();
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        var sender = arr[i];
        var recipientIndex = Math.floor(Math.random() * recipients.length);
        while (recipients[recipientIndex] === sender) {
            // Can't send gift to myself
            recipientIndex = Math.floor(Math.random() * recipients.length);
        }
        var recipient = recipients.splice(recipientIndex, 1)[0];
        result.push({
            sender: sender,
            receiver: recipient
        });
    }
    return result;
};

var exchange = function (arr) {
    var result = [];
    var recipients = arr.slice();
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        var sender = arr[i];
        var recipientIndex = Math.floor(Math.random() * recipients.length);
        while (recipients[recipientIndex] === sender) {
            // Can't send gift to myself
            recipientIndex = Math.floor(Math.random() * recipients.length);
        }
        var recipient = recipients.splice(recipientIndex, 1)[0];
        result.push({
            sender: sender,
            receiver: recipient
        });
    }
    return result;
};


// 
console.log(pair(people));
