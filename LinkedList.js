
function LinkedList() {
    var length = 0;
    var head = null;

    var Node = function (element) {
        this.element = element;
        this.next = null;

    };

    this.size = function () {
        return length;
    };

    this.head = function () {
        return head;
    }

    this.add = function (element) {
        var node = new Node(element);
        if (head === null) {
            head = node;
        } else {
            var currentNode = head;

            // Check if exist any next element ahead of the head
            // And set this element to be the current Node
            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }

        length++;
    }
}

//Add Examples
var animes = new LinkedList();
animes.add("Naruto");
animes.add("Dragon Ball");
animes.add("Attack on Titan");
