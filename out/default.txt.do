SRC="../src/${2}.html"
redo-ifchange ../bin/html_to_text "$SRC"
../bin/html_to_text < "$SRC"