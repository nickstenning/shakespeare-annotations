redo-ifchange ../mapping.txt ../bin/offset_mapping
OS_PLAY="${2}"
FC_PLAY="$(grep -P "\t${OS_PLAY}$" ../mapping.txt | cut -f1)"
FC_PLAY="${FC_PLAY}"
redo-ifchange "fc/$FC_PLAY.txt" "os/$OS_PLAY.txt"
../bin/offset_mapping "fc/$FC_PLAY.txt" "os/$OS_PLAY.txt"
