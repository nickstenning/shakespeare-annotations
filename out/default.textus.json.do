SRC="${2}.txt ${2}.markup.txt"
redo-ifchange ../bin/textus_format transformed-textus.json $SRC
../bin/textus_format $SRC transformed-textus.json