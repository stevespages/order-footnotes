# order-footnotes

This program puts renumbers footnotes in a document. Both the footnotes in the body of the text and their definitions are put into numberical order.

When writing a document with numbered footnotes it is common for the footnotes in the body of the text to get out of order because the author will likely add some footnotes to a position in the text before some already existing footnotes that appear later in the text but were added at an earlier time. The footnote definitions that appear at the end of the document are more easily kept in order by the author but they do not need to be for this program to put them in order.

## Usage

This program requires Node.js, an open-source JavaScript runtime environment for Windows, Linux, Unix, macOS and more, needs to be installed on your computer.

Copy or download `order-footnotes.js` to your computer. Then the program can be invoked on a document file from your command line as follows (where `$` is the cursor on your command line):

```
$ node path/to/order-footnotes.js path/to/my-document.txt
```

If `order-footnotes.js` and `my-document.txt` are in the same directory and you have navigated to that directory using the command line then the command is simply:

```
$ node order-footnotes.js my-document.txt
```

After running the comman you should find a new file in the same directory as `my-document.txt` called `my-document.txt.ordered`. At this point you could delete my-document.txt and rename the new file to `my-document.txt`.

Finally I make no guarantees or predictions about the functionality of this program. It may contain bugs which result in loss of data. As always back up all your data before using it. It is unlikely that the program will alter the content of the input file.

## Example of unordered footnotes:

`test-order-footnotes.md`

hello people[^1] what a fine[^3] day it[^2] is.

[^1]: this is about people

[^2]: it contains an "i" and a "t"

[^3]: fine is very good

## Example after running the program

`test-order-footnotes.md.ordered`

hello people[^1] what a fine[^2] day it[^3] is.

[^1]:  this is about people
[^2]:  fine is very good
[^3]:  it contains an "i" and a "t"

## What happened?

The author added the footnote next to the word "fine" after adding the one next to the word "it". So the order of the footnotes in the text was 1, 3, 2. Running the program produced a new file in which their order was 1, 2, 3.

